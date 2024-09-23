import styled from 'styled-components';
import { CardContainer } from '../atoms/CardContainer';

export const ProfileCard = styled(CardContainer)`
  display: flex;
  align-items: center;

  .card__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 16px;
    object-fit: cover;
  }

  .card__info {
    flex: 1;
    padding: 16px;

    .card__name {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .card__description {
      font-size: 14px;
      color: #555;
    }
  }
`;
