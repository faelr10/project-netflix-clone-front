import styled from "styled-components";
// import BackgroundImage from "../src/public/images/BackgroundImage.png"

export const PageAll = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: start ;
    flex-direction: column ;
    width: 100% ;
    height: 42rem ;
    background-color: transparent;
    padding: 0;
    margin: 0;
    background: linear-gradient(to top, transparent,65%, black),
    linear-gradient(to bottom, transparent,75%, black),
    url("https://miro.medium.com/max/1100/1*5lyavS59mazOFnb55Z6znQ.webp");
    
`
export const AllTopBar = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between ;
    width: 100% ;
    height: 8rem ;
    background-color: transparent ;
    /* border: 1px solid white ; */
`
export const ContainerLeftTopBar = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    /* border: 1px solid white ; */
    width: 25% ;
    height: 100% ;
    img {
        position: absolute ;
        width: 140px ;
    }
`
export const ContainerRightTopBar = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    /* border: 1px solid white ; */
    width: 27% ;
    height: 100% ;
    a{
        display: flex ;
        align-items: center ;
        justify-content: center ;
        background-color: #E50914 ;
        text-decoration: none ;
        color: white ;
        width: 5rem ;
        height: 35px ;
        border-radius: 5px ;
        margin-right: 20px ;
        font-family: 'Roboto', sans-serif;
    }
`
export const SelectLanguageTopBar = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    color: white ;
    border: 1px solid white ;
    width: 7rem ;
    height: 35px ;
    border-radius: 4px ;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px ;
`

export const TitleMessageBody = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    color: white ;
    font-family: 'Roboto', sans-serif;
    font-size: 50px ;
    font-weight: 650 ;
    text-align: center ;
    position: relative ;
    top: 6rem ;
`

export const SubTitleMessageBody = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    color: white ;
    font-family: 'Roboto', sans-serif;
    font-size: 26px ;
    font-weight: 500 ;
    text-align: center ;
    position: relative ;
    top: 7rem ;
`
export const TextMessageBody = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    color: white ;
    font-family: 'Roboto', sans-serif;
    font-size: 19px ;
    font-weight: 400 ;
    text-align: center ;
    position: relative ;
    top: 9rem ;
`

export const BoxRegister = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between ;
    width: 40rem ;
    height: 3.8rem ;
    position: relative ;
    top: 10rem ;
    border-radius: 2px ;
    background-color: black ;
`
export const FieldEmail = styled.input`
    display: flex ;
    align-items: center ;
    justify-content: start ;
    width: 28.0rem ;
    height: 3.8rem ;
    font-size: 15px ;
    border-radius: 2px ;
    font-family: Arial, Helvetica, sans-serif ;
    padding-left: 10px ;
    border: none ;
    background-color: white ;
`
export const ButtonRegister = styled.button`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    color: white ;
    background-color: #F40612 ;
    position: relative ;
    width: 11.4rem ;
    height: 3.8rem ;
    border: none ;
    border-radius: 2px ;
    font-family: 'Roboto', sans-serif;
    font-size: 26px ;
`