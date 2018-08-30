import styled from 'styled-components';


export const HoverImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    align-self: center;
    font-family: fantasy;
    font-size: larger;
    font-weight: bolder;
    width: 90%;
    max-width: 90%;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const BackgroundImage = styled.img`
  padding-top: 0.3rem;
  padding-bottom: 0;
  flex-grow: 1;
  margin: 0.3rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export const PlayImage = styled.img`
  position: absolute;
  transform: translate(0, 0);
  height: 50px;
  width: 50px;
  display: ${props => props.comp.state.hover && !props.comp.props.markedDel ? 'initial' : 'none'};
  cursor: pointer;
  opacity: 0.75;
  &:hover{
    opacity: 1;
  }
`;

export const DeleteImage = styled.img`
  position: absolute;
  transform: translate(0, 0);
  height: 100px;
  width: 100px;
  display: ${props => props.comp.props.markedDel? 'initial' : 'none'};
  cursor: pointer;
`;
