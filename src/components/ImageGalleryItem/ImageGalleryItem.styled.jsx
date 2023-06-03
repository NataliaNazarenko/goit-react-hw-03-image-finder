import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: ${props => props.theme.spacing(0.5)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: ${props => props.theme.spacing(65)};
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
  transform: scale(1.03);
  cursor: zoom-in;
`;
