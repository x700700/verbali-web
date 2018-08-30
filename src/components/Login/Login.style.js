import styled, {keyframes} from 'styled-components';



export const rotation = keyframes`
    from {
            transform: rotate(0deg);
    }
    to {
            transform: rotate(359deg);
    }
 `;

export const Dimmer = styled.img`
  width: 30px;
  height: 35px;
  margin: 2rem;
  animation: ${rotation} 2s infinite linear; 
`;
