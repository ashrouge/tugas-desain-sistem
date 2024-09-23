import styled, { css } from 'styled-components';

const alertVariants = {
  success: css`
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  `,
  error: css`
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  `,
  danger: css`
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
  `,
  info: css`
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  `,
};

export const Alert = styled.div`
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  ${(props) => alertVariants[props.variant || 'info']}

  .alert__icon {
    margin-right: 8px;
    font-size: 18px;
  }

  .alert__message {
    flex: 1;
  }

  .alert__close-button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 16px;
    padding: 0 8px;
    margin-left: auto;
  }
`;