import React, {Component} from 'react';
import { appTheme} from '../../global/theme.global';
import {Row, Box} from "../common/Flex.style";
import Login from "../Login/Login";


export class HouseContainer extends Component {
    render = () => {
        const { zoom } = this.props;
        const westWidth = `${appTheme.artistIconSize + 10}px`;
        const westHeight = `${appTheme.houseTopPadding}px`;
        return (
            <Row wrap='true' zoom={zoom}>
                <Box id='house-west-box' minWidth={westWidth} maxWidth={westWidth} minHeight={westHeight}/>
                {this.props.children}
            </Row>
        );
    }
}

export class Welcome extends Component {
    render = () =>
        <HouseContainer id='welcome'>
            <Login/>
        </HouseContainer>;
}

export class Campaigns extends Component {
    render = () =>
        <HouseContainer id='campaigns'>
            <br/>
            TDB: Campaigns...
            <br/>
        </HouseContainer>;
}
