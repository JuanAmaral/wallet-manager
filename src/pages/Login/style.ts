import styled from 'styled-components';
import bg from "../../assets/image/bg-repeat.svg";
import logo from "../../assets/image/logo-upu.png";
import email from "../../assets/icon/email.svg";
import { Link } from 'react-router-dom';


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    font-size: 2rem;

    background-image: url(${bg});
    background-repeat: repeat;
    
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    padding: 1.5rem;
    border-radius: 6px;    
    background-color: #111111;
    -webkit-box-shadow: 0 0 32px 3.5px #111111;
    -moz-box-shadow: 0 0 32px 3.5px #111111;
    box-shadow: 0 0 32px 3.5px #111111;

`

export const LoginTitle = styled.h1`
    font-size: 2rem;
    color: #eeeeee;
    align-self: center;
    padding-top: 20px;
`

export const InputText = styled.p`
    font-size: 0.8rem;
    font-weight: bold;
    color: #eeeeee;
    margin-bottom: -.01rem;
    margin-left: .2rem;
`

export const LogoUPU = styled.img`
    height: 10rem;  
    margin-bottom: 1rem;
`

export const EmailIcon = styled.i`
    width: 1.75rem;
    height: 1.25rem;
    background-image: url(${email});
    background-repeat: no-repeat;
    background-color: white;
`

export const Test = styled.div`
    width:20rem;
    height: 10rem;
    background-color: white;
    position: absolute;
    width: 17rem;
    height: 35px;
`

export const EmailInput = styled.input`
    color: #eeeeee;
    font-weight: bold;
    border: solid 1px #12b636;
    border-radius: 2px;
    background-color: #111111;
    /* background: url(${email}) no-repeat 8px 5px; */
    align-self: center;
    outline: none;
    cursor: pointer;
    margin-bottom: 1.5rem;
    padding: 0 2.5rem;
    height: 35px;
    width: 12rem;

`

export const PasswordInput = styled.input`
    color: #eeeeee;
    font-weight: bold;
    border: solid 1px #12b636;
    border-radius: 2px;
    background-color: #111111;
    /* background: url(${email}) no-repeat 8px 5px; */
    align-self: center;
    outline: none;
    cursor: pointer;
    margin-bottom: 1.5rem;
    padding: 0 2.5rem;
    height: 30px;
    width: 12rem;
`

export const ButtonEnter = styled.button`
    width: 130px;
    height: 35px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    outline: none;
    outline-offset: none;
    background-color: #12b636;
    color: #eeeeee;
    font-weight: bold;
    font-size: 0.8rem;
    align-self: center;
    margin-bottom: 25px;    

`

export const ForgotPassword = styled.a`
    font-size: 0.7rem;
    font-weight: bold;
    color: #12b636;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 1.5rem;
    margin-top: -1.3rem;
    margin-right: .2rem;
    align-self: flex-end;

`
export const LinkBtn = styled(Link)`
    text-decoration: none;
    color:inherit;
`