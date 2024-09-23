// components/organisms/Navbar.styled.js
import styled from 'styled-components';
import { Button } from '../atoms/Button';

// Styled Component for Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #343a40;
  color: white;

  .navbar__logo {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .navbar__menu {
    display: flex;
    gap: 16px;

    .navbar__item {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }

  .navbar__actions {
    display: flex;
    gap: 8px;

    .navbar__button {
      ${Button} {
        margin: 0;
      }
    }
  }
`;
