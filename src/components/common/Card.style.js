import styled from 'styled-components';
import {Column, Box, BoxItem} from './Flex.style';
import {themeGlobal} from "../../global/theme.global";


export const styles = theme => ({
    card: {
        minWidth: themeGlobal.landingPageCard.width,
        maxWidth: themeGlobal.landingPageCard.width,
        height: 'fit-content',
        // maxHeight: themeGlobal.landingPageCard.height,
        // minHeight: themeGlobal.landingPageCard.height,
        margin: themeGlobal.landingPageCard.margin
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    header: {
        backgroundColor: themeGlobal.landingPageCard.bgSmartLink,
        padding: themeGlobal.landingPageCard.header.padding,
        whiteSpace: 'nowrap',
        title: {
            fontSize: '21px',
            variant: 'subheading',
        },
    },
    actions: {
        display: 'flex',
        padding: 0,
        // maxHeight: themeGlobal.landingPageCard.actionsHeight,
    },
    archiveIcon: {
        marginLeft: 'auto',
    }
});


export const HeaderContainer = styled(Column)`
  overflow: hidden;
`;
export const HeaderTitle = styled(Box)`
  white-space: nowrap;
  overflow: scroll;
`;
export const HeaderSubTitle = styled(Box)`
  white-space: nowrap;
  /*color: blue;
  cursor: pointer;*/
`;

export const ImageFooter = styled(BoxItem)`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const InfoColumn = styled(Column)`
  padding: 0.2rem;
  margin-bottom: 0.3rem;
  background-color: ${props => props.theme.bgSmartLink};
`;
export const InfoKey = styled(Box)`
  max-width: 100px;
`;
