import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '../common/Flex.style';
import { HouseContainer } from '../Main/House';
import LandingPageCard from './LandingPageCard';
// import { landingPagesStub } from '../../stubs/landingPages.stub';
import {userSmartlinks} from "../../rdx-Actions/smartlink.actions";
import {themeGlobal} from "../../global/theme.global";

export const styles = theme => ({

});

class LandingPagesList extends Component {
    render() {
        const { /*classes,*/ width } = this.props;
        const alignWidth = '80px';
        return (
            <HouseContainer width={width} zoom={themeGlobal.landingPageCard.zoom}>
                <Box id='landing-pages-cards-align' minWidth={alignWidth} maxWidth={alignWidth}/>
                {this.props.smartlinksList && this.props.smartlinksList.map(landingPage => {
                    return (
                        <LandingPageCard
                            key={landingPage.id}
                            title={landingPage.title}
                            url={`${landingPage.domain || 'https://ffm.to'}/${landingPage.shortId}`}
                            previewImg={landingPage.image}
                            created='13 Aug 2018'
                            totalLinks={landingPage.totals.clicks}
                            engagements={landingPage.totals.engagements}
                        />);
                    }
                )}
            </HouseContainer>
        );
    }
    componentDidMount() {
        this.props.smartlinkActions.userSmartlinks();
    }
}

LandingPagesList.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {
        smartlinksList: state.smartlink.smartlinksList,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        smartlinkActions: {
            userSmartlinks: () => dispatch(userSmartlinks()),
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LandingPagesList));
