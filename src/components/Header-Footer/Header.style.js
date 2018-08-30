import styled from 'styled-components';
import grey from "@material-ui/core/colors/grey";
//import { themeGlobal } from '../../global/theme.global';

export const ArtistIcon = styled.img`
  padding: ${props => props.theme.padding};
  padding-top: ${props => props.theme.paddingTop};
  width: ${props => props.theme.size};
  height: ${props => props.theme.size};
  margin-top: ${props => props.theme.marginTop};
`;

export const ArtistImage = styled.img`
  z-index: 2;
`;



// Todo: rename styles to stylesMUI
export const stylesMUI = theme => ({
    artistSettingsButton: {
        color: grey[400],
        backgroundColor: grey[800],
        borderColor: grey[100],
        height: '1rem',
        fontSize: '11px',
        '&:hover': {
            color: grey[100],
            backgroundColor: grey[700],
        },
    },
});
