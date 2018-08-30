import React, { Component } from 'react';
import { connect } from 'react-redux';
import { themeGlobal } from "../../global/theme.global";
import { Container, Row } from '../common/Flex.style'
import { Msg } from './AppError.style';
import {ThemeProvider} from "styled-components";


class AppError extends Component {
    render = () => {
        const { error } = this.props;
        return (
            <ThemeProvider theme={themeGlobal}>
                <Container id='app-error-container' hide={!error} theme={themeGlobal.appError}>
                    <Row id='app-error-row'>
                        <Msg id='app-error-msg'>
                            {error}
                        </Msg>
                    </Row>
                </Container>
            </ThemeProvider>
        );
    }
}


const mapStateToProps = state => {
    return {
        error: state.app.error,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        /*authActions: {
            userLogin: (loginInfo) => dispatch(userLogin(loginInfo)),
        },*/
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppError);
