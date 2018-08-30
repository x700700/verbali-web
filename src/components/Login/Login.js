import React, {Component} from "react";
import { connect } from 'react-redux';
import { Container, Column } from '../common/Flex.style';
import { withStyles } from '@material-ui/core/styles';
import {Dimmer} from './Login.style';
import logo from '../../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import {userLogin} from "../../rdx-Actions/auth.actions";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class Login extends Component {
    render() {
        const { isAuthChecked, duringRequest, isLoggedIn, userInfo } = this.props;
        return (
            <Container>
                {!isAuthChecked &&
                <Container/>
                }
                {duringRequest &&
                <Container marginLeft='5rem' paddingTop='5rem'>
                    <Dimmer src={logo}/>
                </Container>
                }
                {isAuthChecked && isLoggedIn &&
                <Container marginLeft='1rem' paddingTop='2rem'>
                    <p>Signed in as [{userInfo.username}]</p>
                </Container>
                }
                {isAuthChecked && !duringRequest && !isLoggedIn &&
                <Container maxWidth='10rem' marginLeft='1rem' paddingTop='2rem'>
                    <p>Enter your credentials to sign in:</p>
                    <br/>
                    <form noValidate autoComplete="on">
                        <Column>
                            <TextField
                                id="email"
                                label="Email"
                                placeholder=""
                                margin="normal"
                                onChange={this.onTextFieldUsernameChange}
                            />
                            <br/>
                            <TextField
                                id="password"
                                autoComplete="on"
                                label="Password"
                                type="password"
                                placeholder=""
                                margin="normal"
                                onChange={this.onTextFieldPasswordChange}
                            />
                            <br/>
                            <br/>
                            <Button variant='contained'
                                    onClick={() => this.Login()}
                            >
                                Sign In
                            </Button>
                        </Column>
                    </form>
                </Container>
                }
            </Container>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            username: 'liora@feature.fm',
            password: 'Aharoni1',
        };
    }
    onTextFieldUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    };
    onTextFieldPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };
    Login = () => {
        const { username, password } = this.state;
        console.log(`Login - user[${username}] password[${password}]`);
        const loginInfo = {
            username: username,
            password: password,
        };
        this.props.authActions.userLogin(loginInfo);
    };
}


const mapStateToProps = state => {
    return {
        isAuthChecked: state.auth.isAuthChecked,
        duringRequest: state.auth.duringRequest,
        isLoggedIn: state.auth.isLoggedIn,
        userInfo: state.auth.userInfo,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        authActions: {
            userLogin: (loginInfo) => dispatch(userLogin(loginInfo)),
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
