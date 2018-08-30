import React, { Component } from "react";
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { styles, InfoColumn, InfoKey } from '../common/Card.style';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import ArchiveIcon from '@material-ui/icons/Archive';
import { Container, Row, Box } from '../common/Flex.style';
import { CardHeader } from '../common/Card';
import { ImageFooter } from '../common/Card.style';
import playImg from '../../assets/playBtn.png';
import HoverImage from "../common/HoverImage";
import {themeGlobal} from "../../global/theme.global";



class LandingPagesCard extends Component {
    render() {
        const { classes, title, url, previewImg, created, totalLinks, engagements } = this.props;
        return (
            <ThemeProvider theme={themeGlobal.reset}>
                <Card className={classes.card}>
                    <CardHeader
                        bg={themeGlobal.landingPageCard.bgSmartLink}
                        title={title}
                        subheader={url}
                    />
                    <HoverImage bgImg={previewImg} playImg={playImg}
                                size={themeGlobal.landingPageCard.previewSize}
                                onClick={() => {console.log(`play '${title}' clicked`)}}
                    />
                    <ThemeProvider theme={themeGlobal.landingPageCard.info}>
                        <Container>
                            <ImageFooter>Created At: {created}</ImageFooter>
                            <InfoColumn>
                                <Row>
                                    <InfoKey>Total Links:</InfoKey>
                                    <Box>{totalLinks}</Box>
                                </Row>
                                <Row>
                                    <InfoKey>Engagements:</InfoKey>
                                    <Box>{engagements}</Box>
                                </Row>
                            </InfoColumn>
                        </Container>
                    </ThemeProvider>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="Archive" className={classes.archiveIcon}>
                            <ArchiveIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </ThemeProvider>
        );
    }
}

LandingPagesCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPagesCard);
