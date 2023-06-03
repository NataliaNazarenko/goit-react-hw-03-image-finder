import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.theme.spacing(16)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.tagBackground};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.spacing(150)};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing(0.75)};
  overflow: hidden;
`;

export const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${props => props.theme.spacing(5)};
  border: none;
  outline: none;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};

  ::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: ${props => props.theme.spacing(12)};
  height: ${props => props.theme.spacing(12)};
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing(2.5)};
  justify-content: center;

  & svg {
    width: ${props => props.theme.spacing(7.5)};
    height: ${props => props.theme.spacing(7.5)};
    fill: ${props => props.theme.colors.gray};
  }
`;
