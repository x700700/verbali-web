import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Column } from '../common/Flex.style'
import { Bottom } from './Footer.style';
import AppError from './AppError';
//import {themeGlobal} from "../../global/theme.global";


class Footer extends Component {
    render = () => {
        return (
            <Container id='footer-container' theme={this.props.theme}>
                <Column id='footer-column'>
                    <AppError error={this.props.appError}/>
                    <Bottom id='bottom'>
                        © 2015 ListnPlay Inc.
                    </Bottom>
                </Column>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        appError: state.app.error,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        appActions: {
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
