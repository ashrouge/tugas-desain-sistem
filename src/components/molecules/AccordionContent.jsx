import styled from 'styled-components';

export const AccordionContent = styled.div`
  height: ${(props) => (props.open ? '80px' : '0')};
  overflow: hidden;
  transition: height 0.3s ease;
  background-color: #fafafa;
  padding: ${(props) => (props.open ? '16px' : '0px 16px')};
  border-bottom: 1px solid #ddd;
`;
