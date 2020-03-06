import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.span`
  color: ${props => props.theme.colors.message};
  font-size: 20px;
`;

export const ImportantMessage = styled.span`
   color: ${props => props.theme.colors.importantMessage};
   font-size: 30px;
   transition: all 0.2s linear;

   &:hover {
     font-size: 40px;
   }
`;