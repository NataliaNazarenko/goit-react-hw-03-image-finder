import styled from '@emotion/styled';

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.dark};
  font-weight: 700;
  margin-top: ${props => props.theme.spacing(7.5)};
`;
