import React from "react";
import { Bio, TextUserCode, TextContent, Content, ImgProfile, NameUser, Profile, Separator, CopyIcon, InfoEC, WithdrawBtn, BalanceBtn, TextDate, WithdrawNotification, WithdrawNowButton, WithdrawContent, LinkBtn, LogoutBtn } from "./style";


const Withdraw = () => {
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
            <WithdrawContent>
                <WithdrawNowButton>SACAR</WithdrawNowButton>
                <WithdrawNotification>
                    <TextContent>
                        Você sacou R$ 31,11.
                    </TextContent>
                    <TextDate>
                        22/08
                    </TextDate>
                </WithdrawNotification>
                <WithdrawNotification>
                    <TextContent>
                        Você sacou R$ 44,07.
                    </TextContent>
                    <TextDate>
                        07/08
                    </TextDate>
                </WithdrawNotification>
                <WithdrawNotification>
                    <TextContent>
                        Você sacou R$ 78,67.
                    </TextContent>
                    <TextDate>
                        02/06
                    </TextDate>
                </WithdrawNotification>
                <WithdrawNotification>
                    <TextContent>
                        Você sacou R$ 34,17.
                    </TextContent>
                    <TextDate>
                        03/06
                    </TextDate>
                </WithdrawNotification>
            </WithdrawContent>


        </Content>
    )
};

export default Withdraw;
