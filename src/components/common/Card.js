import React, { Component } from "react";
import { HeaderContainer, HeaderTitle, HeaderSubTitle } from './Card.style';
import {themeGlobal} from "../../global/theme.global";


export class CardHeader extends Component {
    render() {
        const { bg, title, subheader } = this.props;
        return (
            <HeaderContainer bg={bg}>
                <HeaderTitle theme={themeGlobal.landingPageCard.header.title}>
                    {title}
                </HeaderTitle>
                <HeaderSubTitle theme={themeGlobal.landingPageCard.header.subheader}>
                    {subheader}
                </HeaderSubTitle>
            </HeaderContainer>
        );
    }
}
