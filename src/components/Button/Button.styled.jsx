import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;

  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(0.5)};
  background: ${props => props.theme.colors.tagBackground};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${props => props.theme.colors.white};
  border: 0;

  cursor: pointer;
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.spacing(6)};
  font-style: normal;
  font-weight: 500;
  min-width: ${props => props.theme.spacing(25)};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${props => props.theme.spacing(2.5)};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
