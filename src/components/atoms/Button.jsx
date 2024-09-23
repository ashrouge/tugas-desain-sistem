import styled, { css } from 'styled-components';

// Define button variant styles
const buttonVariants = {
  primary: css`
    background-color: #007bff;
    color: white;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
  `,
  success: css`
    background-color: #28a745;
    color: white;
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
  `,
  outline: css`
    background-color: transparent;
    border: 2px solid #007bff;
    color: #007bff;
  `,
};

// Styled Button component with shouldForwardProp configuration
export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant', // Prevents 'variant' from being passed to the DOM
})`
  padding: 8px 16px;
  margin: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  /* Apply variant styles based on props, with a fallback to 'primary' */
  ${(props) => buttonVariants[props.variant || 'primary']}

  /* Styles for large button */
  &.button--large {
    padding: 12px 24px;
    font-size: 16px;
  }

  /* Styles for small button */
  &.button--small {
    padding: 4px 8px;
    font-size: 12px;
  }

  /* Hover effect */
  &:hover {
    opacity: 0.9;
  }
`;
