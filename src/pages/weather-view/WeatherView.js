import React, { useEffect, useState } from 'react'
import { ArrowImg, Desc, FlexContainer, FormMain, Location, MainContainer, Separator, SeparatorVertical, Temp, WeatherImg } from './styles'
import { screenTexts } from '../../constants/screenTexts'
import ArrowLeft from '../../assets/svg/arrow.svg'
import axios from 'axios'
import FeelsLikeIcon from '../../assets/svg/feels-like.svg'
import HumidityIcon from '../../assets/svg/humidity.svg'
import LocationIcon from '../../assets/svg/location.svg'
import { useNavigate } from 'react-router-dom'
import { routeTexts } from '../../constants/routeTexts'

export const WeatherView = () => {

    const [iconUrl, setIconUrl] = useState(null)
    const city = localStorage.getItem(screenTexts.COMMONS.CITY)
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
    const [temp, setTemp] = useState(null)
    const [country, setCountry] = useState(null)
    const [description, setDescription] = useState(null)
    const [feelsLikeTemp, setFeelsLikeTemp] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const navigator = useNavigate()

    useEffect(() => {
        fetchWeatherIcon(city)
        fetchWeatherData()
    }, [])


    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    }

    const fetchWeatherIcon = async (city) => {
        try {
            const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const data = await response.json();
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
            setIconUrl(iconUrl);
        } catch (error) {
            console.log('Error fetching weather icon:', error);
        }
    };

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const tempVal = kelvinToCelsius(response?.data?.main?.temp)
            setTemp(tempVal.toFixed())
            setDescription(response?.data?.weather[0]?.description)
            setCountry(response?.data?.sys?.country)
            setFeelsLikeTemp(kelvinToCelsius(response?.data?.main?.feels_like).toFixed())
            setHumidity(response?.data?.main?.humidity)
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <MainContainer>
            <FormMain>
                <FlexContainer>
                    <ArrowImg onClick={() => navigator(routeTexts.HOME)} src={ArrowLeft} />
                    <h3>{screenTexts.HOME.FORM_TITLE}</h3>
                </FlexContainer>
                <Separator />
                <WeatherImg src={iconUrl} width={122} height={122} />

                <Temp>{temp}°C</Temp>

                <Desc>{description}</Desc>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={LocationIcon} width={14} height={14} />
                    <Location>{city}, {country}</Location>
                </div>
                <Separator />

                <div className='bottom-sec'>
                    <div className='flex-center'>
                        <img className='img' src={FeelsLikeIcon} width={26} height={26} />
                        <div>
                            <p>{feelsLikeTemp}°C</p>
                            <p>{screenTexts.WEATHER_VIEW.FELS_LIKE}</p>
                        </div>
                    </div>
                    <SeparatorVertical />
                    <div className='flex-center'>
                        <img className='img' src={HumidityIcon} width={24} height={24} />
                        <div>
                            <p>{humidity}%</p>
                            <p>{screenTexts.WEATHER_VIEW.HUMIDITY}</p>
                        </div>
                    </div>
                </div>

            </FormMain>
        </MainContainer>
    )
}
