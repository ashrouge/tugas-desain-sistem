import styled from 'styled-components';
import { CardContainer } from '../atoms/CardContainer';

export const ImageCard = styled(CardContainer)`
  .card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card__body {
    padding: 12px 16px;
  }
`;
