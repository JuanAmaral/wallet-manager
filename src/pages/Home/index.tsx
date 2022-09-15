import React from "react";
import { LinkBtn } from "../Withdraw/style";
import { Bio, TextUserCode, TextContent, Content, ImgProfile, NameUser, Profile, BalanceContent, Separator, CopyIcon, InfoEC, WithdrawBtn, BalanceBtn, OrderNotification, RegisterNotification, TextDate, LogoutBtn } from "./style";

const Home = () => {
    return (
        <Content>
            <Profile>
                <Bio>
                    <ImgProfile></ImgProfile>
                    <Separator>
                        <NameUser>FRANKLIN AMARAL</NameUser>
                        <TextUserCode>AMARAL<CopyIcon /></TextUserCode>
                        <TextUserCode>bit.ly/franklinamaral<CopyIcon /></TextUserCode>
                    </Separator>
                </Bio>
                <InfoEC>
                    {/* <CartIcon /> */}
                    <LogoutBtn><LinkBtn to="/login">SAIR</LinkBtn></LogoutBtn>

                </InfoEC>
            </Profile>
            <BalanceBtn type="button">
                <LinkBtn to="/">SALDO</LinkBtn>
            </BalanceBtn>
            <WithdrawBtn type="button">
                <LinkBtn to="/saque/">SAQUE</LinkBtn>
            </WithdrawBtn>
            <BalanceContent>
                <OrderNotification>
                    <TextContent>
                        Você recebeu R$ 3,13 da compra de zezinho123.
                    </TextContent>
                    <TextDate>
                        22/08
                    </TextDate>
                </OrderNotification>
                <RegisterNotification>
                    <TextContent>
                        gdsgames registrou-se com seu código.
                    </TextContent>
                    <TextDate>
                        07/08
                    </TextDate>
                </RegisterNotification>
                <RegisterNotification>
                    <TextContent>
                        ronaldo7 registrou-se com seu código.
                    </TextContent>
                    <TextDate>
                        02/06
                    </TextDate>
                </RegisterNotification>
                <OrderNotification>
                    <TextContent>
                        Você recebeu R$ 5,37 da compra de ronaldo7.
                    </TextContent>
                    <TextDate>
                        03/06
                    </TextDate>
                </OrderNotification>
            </BalanceContent>


        </Content>
    )
};

export default Home;
