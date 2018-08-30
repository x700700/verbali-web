import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Container, Column } from '../common/Flex.style'
import { stylesMUI } from './Header.style';
import { setCurrentPage } from '../../rdx-Actions/app.actions';
import { themeGlobal } from "../../global/theme.global";
import consts from '../../global/consts';
import HeaderRow1 from "./HeaderRow1";


class Header extends Component {
    render = () => {
        const { /*classes,*/ width } = this.props;
        this.preRender();
        return (
            <Container id='header-container'>
                <Container theme={themeGlobal.header.back}/>
                <Container theme={themeGlobal.header.backTop}/>
                <Column theme={themeGlobal.header.front}>
                    <HeaderRow1 width={width}/>
                </Column>
            </Container>
        )
    };
    preRender = () => {
        if (this.props.currentPage === '') {
            let pathname = '/' + window.location.href.replace(/^.*[\\/]/, ''); // Todo: currently this regex splits the last node alone
            if (pathname === '/') {
                pathname = consts.PAGE_WELCOME;
            }
            this.props.appActions.setCurrentPage(pathname);
        }
    };
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {
        currentPage: state.app.currentPage,
        appError: state.app.error,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        appActions: {
            setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesMUI)(Header));
