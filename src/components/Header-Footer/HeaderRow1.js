import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Row, BoxItem, Box} from '../common/Flex.style'
import { stylesMUI, AppIcon, MarketingBox, MarketingLevel, AccountBox, Box1West, Box1East, Box2ArtistName, Box3Tabs, Box4SubscribtionLevel, Box5Upgrade, Box6UserMenu } from './HeaderRow1.style';
import logo from '../../assets/logo.png';
import artistImage from '../../assets/booli-image.png';
import {themeGlobal} from "../../global/theme.global";
import {ArtistName} from "./HeaderRow1.style";
import HeaderTabs from "./HeaderTabs";
import {ArtistIcon} from "./Header.style";
// import classNames from 'classnames';


class HeaderRow1 extends Component {
    render = () => {
        const { classes, width } = this.props;
        return (
            <Row theme={themeGlobal.header.row1} width={width}>
                <Box1West>
                    <Box>
                        <AppIcon theme={themeGlobal.header.appIcon} src={logo} alt='Feature.fm'/>
                    </Box>
                    <Box>
                        <BoxItem>
                            <ArtistIcon theme={themeGlobal.header.artistIcon} src={artistImage} alt='Artist'/>
                        </BoxItem>
                    </Box>
                </Box1West>
                <ThemeProvider theme={themeGlobal.reset}>
                    <Box1East>
                        <Box2ArtistName>
                            <ArtistName nowrap>
                                Booli Assaf Weiss - בולי אסף וייס
                            </ArtistName>
                        </Box2ArtistName>
                        <Box3Tabs>
                            <HeaderTabs/>
                        </Box3Tabs>
                        <Box4SubscribtionLevel>
                            <MarketingBox>
                                <MarketingLevel>
                                    You have <br/> Marketing Pro
                                </MarketingLevel>
                            </MarketingBox>
                        </Box4SubscribtionLevel>
                        <Box5Upgrade>
                            <MarketingBox>
                                <Button size="small" variant="outlined" className={classes.upgradeButton}>
                                    Upgrade
                                </Button>
                            </MarketingBox>
                        </Box5Upgrade>
                        <Box6UserMenu>
                            <AccountBox>
                                <AppIcon theme={themeGlobal.header.appIcon} src={artistImage} alt='Feature.fm'/>
                                <ExpandMoreIcon/>
                            </AccountBox>
                        </Box6UserMenu>
                    </Box1East>
                </ThemeProvider>
            </Row>
        )
    };
}
export default withStyles(stylesMUI)(HeaderRow1);
