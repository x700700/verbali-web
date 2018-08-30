import React, {Component} from 'react';
import windowSize from 'react-window-size';
import { appTheme, themeGlobal} from '../../global/theme.global';
import {Box, Column} from "../common/Flex.style";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";
import {ThemeProvider} from "styled-components";
import {HouseColumn} from "./Main.style";
import {AppRoutes} from "../../AppRoutes";


class Main extends Component {
    render = () => {
        const { windowWidth, onClick } = this.props;
        const width = `${windowWidth > appTheme.mainWidth ? appTheme.mainWidth : windowWidth}px`;
        return (
            <Column theme={themeGlobal.main}>
                <Header width={width}/>
                <House theme={themeGlobal.house}
                       width={width}
                       onClick={onClick}
                />
                <Footer theme={themeGlobal.footer}/>
            </Column>
        );
    };
}
export default windowSize(Main);

export class House extends Component {
    render = () => {
        const { width } = this.props;
        return (
            <ThemeProvider theme={this.props.theme}>
                <HouseColumn id='house-column'
                             maxWidth={width}
                             onMouseDown={() => this.props.onClick()}
                >
                    <AppRoutes/>
                    <Box id='house-south-box' flexGrow='1' minHeight='4em'/>
                </HouseColumn>
            </ThemeProvider>
        );
    }
}
