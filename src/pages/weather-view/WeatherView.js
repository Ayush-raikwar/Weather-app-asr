import React, { useEffect, useState } from 'react'
import { ArrowImg, FlexContainer, FormMain, MainContainer, Separator } from './styles'
import { screenTexts } from '../../constants/screenTexts'
import ArrowLeft from '../../assets/svg/arrow.svg'

export const WeatherView = () => {

    const [iconUrl, setIconUrl] = useState(null)

    useEffect(() => {
        fetchWeatherIcon(localStorage.getItem(screenTexts.COMMONS.CITY))
    }, [])

    const fetchWeatherIcon = async (city) => {
        try {
            const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const data = await response.json();
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
            setIconUrl(iconUrl);
        } catch (error) {
            console.log('Error fetching weather icon:', error);
        }
    };

    return (
        <MainContainer>
            <FormMain>
                <FlexContainer>
                    <ArrowImg src={ArrowLeft} />
                    <h3>{screenTexts.HOME.FORM_TITLE}</h3>
                </FlexContainer>
                <img src={iconUrl} width={122} height={122} />
                <Separator />
            </FormMain>
        </MainContainer>
    )
}
