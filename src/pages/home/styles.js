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
        margin: 0 1rem;
        font-weight: 600;
    }

`
export const Separator = styled.div`
    width: 100%;
    height: 1.5px;
    background-color: rgba(0,0,0,.1);
    margin: .8rem 0;
`
export const InputText = styled.input`
    text-align: center;
    width: 100%;
    margin: .5rem auto;
    outline: none;
    border-color: rgba(0,0,0,.16);
    border-radius: .28rem;
    padding: 0.6rem;
    font-family: 'Montserrat';
    box-sizing: border-box;
    
`
export const BottomContainer = styled.div`
    padding: 1rem;

    p {
        color:red;
        text-transform: capitalize;
        text-align: right;
        font-size: .66rem; 
        margin-top: 0;
    }

`
export const GetLocationBtn = styled.button`
    background-color: ${commonStyles.COLORS.THEME};
    padding: .8rem;
    width: 100%;
    margin-top: .4rem;
    justify-content: center;
    border: none;
    border-radius: .2rem;
    font-family: 'Montserrat';
    font-weight: 500;
    color:${commonStyles.COLORS.WHITE};
    cursor: pointer;
    outline: none;
`
export const LoadingImg = styled.img`
    width: 20px;
    height: 20px;
`