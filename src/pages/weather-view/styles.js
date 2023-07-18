import { styled } from "styled-components";
import { commonStyles } from "../../constants/commonStyles";

export const MainContainer = styled.div`
    background-color:${commonStyles.COLORS.THEME};
    width: 100%; height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Montserrat";

`
export const FormMain = styled.form`
    background-color: ${commonStyles.COLORS.WHITE};
    padding: 1rem 0 ;
    width:400px ;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    h3 {
        font-size: 1.25rem;
        color: ${commonStyles.COLORS.THEME};
        margin: 0 .6rem;
        font-weight: 600;
    }

    .flex-center {
        display: flex;
        align-items: center;
    }
    .bottom-sec {
        display: flex;
        justify-content: space-evenly;

        p {
            font-size: .7rem;
            margin: 0;
            text-align: left;
        }
        .img {
            margin-right: .5rem;
        }

    }

    @media (max-width: 768px) {
        width: 92%;
    }

`

export const Separator = styled.div`
    width: 100%;
    height: 1.5px;
    background-color: rgba(0,0,0,.1);
    margin: .8rem 0;
`

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`
export const ArrowImg = styled.img`
    width: 22px;
    height: 22px;
    color:red;
    fill: red;
    margin-left: 1rem;
    transform: rotate(-180deg);
`
export const WeatherImg = styled.img`
    margin: auto;
`
export const Temp = styled.h2`
    font-size: 2.5rem;
    margin: 0 auto;
`
export const Desc = styled.p`
    text-transform: capitalize;
    font-weight: 500;
    font-size: .8rem;
`
export const Location = styled.p`
    /* margin: 0 auto; */
    font-weight: 500;
    font-size:.8rem;
`
export const SeparatorVertical = styled.div`
    min-height: 100%;
    width: 1.5px;
    background-color: rgba(0,0,0,.2);
`