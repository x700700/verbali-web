import styled from 'styled-components';
import { Row, Column, Box, BoxItem } from '../common/Flex.style'
import purple from '@material-ui/core/colors/purple';
import { themeGlobal } from '../../global/theme.global';


export const AppIcon = styled.img`
  padding: ${props => props.theme.padding};
  width: ${props => props.theme.size};
  height: ${props => props.theme.size};
`;

export const ArtistName = styled(BoxItem)`
  margin-left: 0.3rem;
  padding: 0.3rem;
  padding-bottom: 0;
  margin-bottom: -3px;
`;

export const MarketingBox = styled(Column)`
  //width: 8rem;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const MarketingLevel = styled.div`
  font-family: sans-serif;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  text-align: center;
`;

export const AccountBox = styled(BoxItem)`
  height: fit-content;
  align-self: center;
`;


export const Box1West = styled(Column)`
  width: ${themeGlobal.header.artistIcon.size};
  min-width: ${themeGlobal.header.artistIcon.size};
  max-width: ${themeGlobal.header.artistIcon.size};;
`;
export const Box1East = styled(Row)`
  flex-grow: 1;
`;


export const Box2ArtistName = styled(Box)`
  flex-grow: 1;
  margin-top: auto;
`;
export const Box3Tabs = styled(Box)`
  flex-grow: 5;
  margin-top: auto;
`;
export const Box4SubscribtionLevel = styled(Box)`
  flex-grow: 1;
  border-left: 1px solid rgba(151, 151, 151, 0.5);
  padding-left: 0.1rem;
  padding-right: 0.1rem;
`;
export const Box5Upgrade = styled(Box)`
  flex-grow: 1;
  border-right: 1px solid rgba(151, 151, 151, 0.5);
  padding-left: 0.1rem;
  padding-right: 0.1rem;
`;
export const Box6UserMenu = styled(Row)`
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 0.3rem; 
`;



export const stylesMUI = theme => ({
    upgradeButton: {
        width: '5rem',
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        marginTop: '-2px',
        opacity: 0.8,
        '&:hover': {
            backgroundColor: purple[500],
            opacity: 1,
        },
    },
});
