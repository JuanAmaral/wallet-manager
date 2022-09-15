import styled from 'styled-components';
import bg from "../../assets/image/bg-repeat.svg";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle"
import { Copy } from "@styled-icons/feather/Copy"
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart"
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

export const Profile = styled.div`
    display: flex;
    position: top;
    flex-direction: start;
    border-radius: 6px;    
    width: 80%;
    min-height: 30vh;
    background-color: #111111;
    margin-top: 25px;
    margin-bottom: 40px;
`

export const Bio = styled.div`
    display: flex;
    flex-direction: row;    
    width: 50%;
    padding-left: 5%;
    padding-right: 5%;
    `

export const Separator = styled.div`
    width: 300px;
    height: 120px;
    align-self: center;
    
`

export const ImgProfile = styled(UserCircle)`
    width: 150px;
    height: 150px;
    align-self: center;
    color: #12b636;
`


export const NameUser = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #12b636;
    margin-top: -1%;
    margin-bottom: 15%;
`
export const TextUserCode = styled.p`
    font-size: 1rem;
    font-weight: bold;
    align-self: center;
    color: #eeeeee;
    margin-top: -5%;

`

export const InfoEC = styled.div`
    display: flex;
    flex-direction: start;
    width: 50%;
    padding-left: 5%;
    padding-right: 5%;

`

export const BalanceContent = styled.table`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-height: 70vh;
    border-radius: 6px;    
    background-color: #111111;
    padding-top: .4rem;
`

export const WithdrawContent = styled.div`
    display: flex;
    flex-direction: start;
    width: 80%;
    min-height: 70vh;
    border-radius: 6px;    
    background-color: #111111;
`

export const BalanceBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 2px;    
    color: #111111;
    width: 100px;
    height: 35px;
    background-color: #12b636;
    cursor: pointer;
    border: none;
    margin-left: 10%;
`

export const WithdrawBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 2px;    
    color: #eeeeee;
    width: 100px;
    height: 35px;
    background-color: #3a4738;
    cursor: pointer;
    border: none;
    margin-left: 17.5%;
`

export const CopyIcon = styled(Copy)`
    width: 20px;
    height: 20px;
    color: #12b636;
    margin-left: 20px;
    position: absolute;
    cursor: pointer;
`
export const CartIcon = styled(ShoppingCart)`
    width: 60px;
    height: 60px;
    color: #12b636;
    align-self: center;
`



export const OrderNotification = styled.tr`
    display: flex;
    align-self: center;
    align-items: center;
    width: 90%;
    height: 50px;
    background: #3a4738;
    border-radius: .4rem;
    margin-bottom: 0.4rem;
    margin-top: .4rem;
`

export const RegisterNotification = styled.tr`
    display: flex;
    align-self: center;
    align-items: center;
    width: 90%;
    height: 50px;
    background: #3a4738;
    border-radius: .4rem;
    margin-bottom: 0.4rem;
    margin-top: .4rem;


`

export const TextContent = styled.th`

    font-size: 1.3rem;
    font-weight: bold;
    color: #12b636;
    margin-left: 2rem;
`

export const TextDate = styled.th`
    font-size: 1.3rem;
    font-weight: bold;
    color: #12b636;
    margin-left: 5rem;
`
export const LinkBtn = styled(Link)`
    text-decoration: none;
    color:inherit;
`

export const LogoutBtn = styled.button`
    width: 130px;
    height: 35px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    outline: none;
    outline-offset: none;
    background-color: #cf1111;
    color: #eeeeee;
    font-weight: bold;
    font-size: 0.8rem;
    align-self: flex-end;
    margin-bottom: 1%;  
    margin-left: 5%;
`