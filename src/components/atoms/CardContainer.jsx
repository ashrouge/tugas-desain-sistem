import styled from 'styled-components';

// Basic Card component
export const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 36px;
  
  .card__header {
    padding: 16px;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    font-size: 18px;
  }

  .card__body {
    padding: 16px;
    font-size: 14px;
    color: #333;
  }

  .card__footer {
    padding: 16px;
    border-top: 1px solid #ddd;
    text-align: right;
  }
`;
