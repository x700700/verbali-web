import React, { Component } from 'react';
import {BoxItem} from "../common/Flex.style";
import { LinkTabContainer } from './LinkTab.style';
import {themeGlobal} from "../../global/theme.global";


export default class LinkTab extends Component {
    render = () => {
        const { id, text, where, currentPage, onClick } = this.props;
        const selected = currentPage === where;
        return (
                <LinkTabContainer id={id} to={where} selected={selected}
                                  theme={themeGlobal.header.link}
                                  onClick={onClick}
                >
                    <BoxItem>
                        {this.props.children}
                    </BoxItem>
                    <BoxItem nowrap fontSize={themeGlobal.header.link.fontSize}>
                        {text}
                    </BoxItem>
                </LinkTabContainer>
        )
    };
}
