import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Row } from '../common/Flex.style'
import { stylesMUI } from './HeaderRow1.style';
import {themeGlobal} from "../../global/theme.global";
import LinkTab from "./LinkTab";
import consts from "../../global/consts";
import WelcomeIcon from '@material-ui/icons/Mic';
import LandingPagesIcon from '@material-ui/icons/PhonelinkRing';
import CampaignsIcon from '@material-ui/icons/Hearing';
import {resetError, setCurrentPage} from "../../rdx-Actions/app.actions";
// import classNames from 'classnames';


class HeaderTabs extends Component {
    render = () => {
        const {isLoggedIn} = this.props;
        return (
            <Row marginLeft='1rem'>
                <LinkTab  id='link-welcome' text='Welcome' where={consts.PAGE_WELCOME}
                          onClick={() => this.linkClicked(consts.PAGE_WELCOME)}
                          currentPage={this.props.currentPage}
                >
                    <WelcomeIcon style={{ fontSize: themeGlobal.header.link.iconSize }}/>
                </LinkTab>
                {isLoggedIn &&
                <Row>
                    <LinkTab id='link-landingPage' text='Landing Pages' where={consts.PAGE_LANDINGPAGE}
                             onClick={() => this.linkClicked(consts.PAGE_LANDINGPAGE)}
                             currentPage={this.props.currentPage}
                    >
                        <LandingPagesIcon style={{fontSize: themeGlobal.header.link.iconSize}}/>
                    </LinkTab>
                    <LinkTab id='link-campaign' text='Campaigns' where={consts.PAGE_CAMPAIGN}
                             onClick={() => this.linkClicked(consts.PAGE_CAMPAIGN)}
                             currentPage={this.props.currentPage}
                    >
                        <CampaignsIcon style={{fontSize: themeGlobal.header.link.iconSize}}/>
                    </LinkTab>
                </Row>
                }
            </Row>
        )
    };
    linkClicked = (where) => {
        if (this.props.appError !== null) {
            this.props.appActions.resetError();
        }
        if (this.props.currentPage !== where) {
            this.props.appActions.setCurrentPage(where);
        }
    };
}


const mapStateToProps = state => {
    return {
        currentPage: state.app.currentPage,
        appError: state.app.error,
        isLoggedIn: state.auth.isLoggedIn,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        appActions: {
            setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
            resetError: () => dispatch(resetError()),
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesMUI)(HeaderTabs));

