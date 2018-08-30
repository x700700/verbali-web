import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import Main from "./components/Main/Main";
import { resetError } from './rdx-Actions/app.actions';
import {userAuthCheck} from "./rdx-Actions/auth.actions";
import {themeGlobal} from "./global/theme.global";


class App extends Component {
    render = () => {
        return (
            <div style={{backgroundColor: themeGlobal.house.bg}}>
                <BrowserRouter>
                    <Main onClick={this.onClick}/>
                </BrowserRouter>
            </div>
        );
    };

    componentWillMount() {
        this.props.authActions.userAuthCheck();
    }
    onClick = () => {
        if (this.props.appError !== null) {
            this.props.appActions.resetError();
        }
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
            resetError() {dispatch(resetError())},
        },
        authActions: {
            userAuthCheck: () => dispatch(userAuthCheck()),
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

