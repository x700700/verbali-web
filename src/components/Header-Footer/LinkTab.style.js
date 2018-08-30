import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkTabContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${props => !props.selected ? props.theme.bg : props.theme.bgSelected};
  width: ${props => props.theme.width};
  color: ${props => !props.selected ? props.theme.color : props.theme.selectedColor};
  text-align: center;
  justify-self: end;
  user-select: none;
  text-decoration: none;
  margin-right: 1rem;
  // padding-left: 0.3rem;
  cursor: ${props => !props.selected ? 'pointer' : 'default'};
  &:hover{
    color: ${props => !props.selected && props.theme.hoverColor};
    text-decoration: none;
  }
`;
