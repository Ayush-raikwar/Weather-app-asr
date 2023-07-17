import React from 'react'
import { MainContainer, Separator } from './styles'

export const SeparatorComp = ({ text, styles }) => {
    return (
        <MainContainer style={{ ...styles }}>
            <Separator />
            <h5>{text}</h5>
            <Separator />
        </MainContainer>
    )
}
