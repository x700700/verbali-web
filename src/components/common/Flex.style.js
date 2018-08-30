import styled from 'styled-components';


const StyledDiv = styled.div`
  height: ${props => props.height || props.theme.height};
  width: ${props => props.width || props.theme.width};
  min-width: ${props => props.minWidth || props.theme.minWidth};
  max-width: ${props => props.maxWidth || props.theme.maxWidth};
  min-height: ${props => props.minHeight || props.theme.minHeight};
  max-height: ${props => props.maxHeight || props.theme.maxHeight};
  zoom: ${props => props.zoom || props.theme.zoom};
  background-color: ${props => props.bg || props.theme.bg};
  font-size: ${props => props.fontSize || props.theme.fontSize};
  margin: ${props => props.margin || props.theme.margin};
  margin-left: ${props => props.marginLeft || props.theme.marginLeft};
  margin-right: ${props => props.marginRight || props.theme.marginRight};
  padding: ${props => props.padding || props.theme.padding};
  padding-left: ${props => props.paddingLeft || props.theme.paddingLeft};
  padding-right: ${props => props.paddingRight || props.theme.paddingRight};
  padding-top: ${props => props.paddingTop || props.theme.paddingTop};
  justify-content: ${props => props.justifyContent || props.theme.justifyContent};
  align-self: ${props => props.alignSelf || props.theme.alignSelf};
  text-align: ${props => props.textAlign || props.theme.textAlign};
  
  white-space: ${props => props.nowrap ? 'nowrap' : 'normal'};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};
  border-bottom: ${props => props.theme.borderBottom};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.theme.marginBottom};
  bottom: ${props => props.theme.bottom};
  top: ${props => props.theme.top};
  left: ${props => props.theme.left};
  right: ${props => props.theme.right};
  align-self: ${props => props.theme.alignSelf};
  z-index: ${props => props.theme.zIndex};
  overflow: ${props => props.theme.overflow};
`;

export const Container = styled(StyledDiv)`
  display: ${props => props.hide ? 'none' : 'block'};
  flex-grow: ${props => props.flexGrow || props.theme.flexGrow};
  position: ${props => props.position || props.theme.position || 'static'};
`;

export const Row = styled(StyledDiv)`
  display: flex;
  flex-direction: row;
  flex-grow: ${props => props.flexGrow || props.theme.flexGrow};
  flex-wrap: ${props => props.wrap || props.theme.wrap ? 'wrap' : 'nowrap'};
`;
export const Column = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.flexGrow || props.theme.flexGrow};
`;

export const Box = styled(Container)`
`;
export const BoxItem = styled(Container)`
`;
