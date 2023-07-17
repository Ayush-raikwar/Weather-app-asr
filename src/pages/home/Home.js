import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BottomContainer, FormMain, GetLocationBtn, InputText, LoadingImg, MainContainer, Separator } from './styles';
import { screenTexts } from '../../constants/screenTexts';
import { SeparatorComp } from '../../components/separator-comp/SeparatorComp';
import LoadingGif from '../../assets/gifs/loading.gif'
import { useNavigate } from 'react-router-dom';
import { routeTexts } from '../../constants/routeTexts';

export const Home = () => {

    const [city, setCity] = useState('')
    const [coords, setCoords] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, [])

    useEffect(() => {
        setError(null)
    }, [city])

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const fetchData = (lat, long) => {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}`;
                const response = await axios.get(url);
                const data = response.data;
                if (response.status === 200 && data.length > 0) {
                    const cityName = data[0].name;
                    resolve(cityName);
                } else {
                    reject(new Error('Invalid response or no data available.'));
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            localStorage.setItem(screenTexts.COMMONS.CITY, response?.data?.name)
            navigate(routeTexts.WEATHER_VIEW)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError(error?.response?.data?.message)
        }
    }

    const handleSuccess = (pos) => {
        setCoords(prev => ({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }))
    }
    const handleError = (err) => {
        alert(err)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        if (!city) {
            fetchData(coords.latitude, coords.longitude)
                .then(val => setCity(val))
                .catch(err => console.log(err))
            setLoading(false)
        }
    }

    return (
        <MainContainer>
            <FormMain
                onSubmit={e => handleSubmit(e)}
            >
                <h3>{screenTexts.HOME.FORM_TITLE}</h3>
                <Separator />
                <BottomContainer>
                    <InputText
                        placeholder={screenTexts.HOME.PLACEHOLDERS.CITY}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        style={error ? { borderColor: 'red', color: 'red' } : null}
                    />
                    {error &&
                        <p className='error'>{error} !</p>}

                    {!city &&
                        <SeparatorComp text={screenTexts.HOME.OR} />
                    }

                    {city ?
                        <GetLocationBtn
                            onClick={() => fetchWeatherData()}
                        >
                            {screenTexts.HOME.GET_WEATHER_INFO}
                        </GetLocationBtn>
                        :
                        <GetLocationBtn type='submit'>
                            {loading ?
                                <LoadingImg src={LoadingGif} />
                                :
                                screenTexts.HOME.BTN
                            }
                        </GetLocationBtn>
                    }
                </BottomContainer>
            </FormMain>
        </MainContainer>
    )
}
