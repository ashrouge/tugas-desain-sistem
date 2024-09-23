// components/atoms/AccordionButton.styled.js
import styled from 'styled-components';

export const AccordionButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: #f1f1f1;
  border: none;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &.accordion-button--active {
    background-color: #e2e2e2;
  }

  &:hover {
    background-color: #ddd;
  }
`;
