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
    min-width:400px ;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 1.25rem;
        color: ${commonStyles.COLORS.THEME};
        margin: 0 .6rem;
        font-weight: 600;
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
`