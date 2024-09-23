import React, { useState } from 'react';
import { AccordionButton } from '../atoms/AccordionButton';
import { AccordionContent } from '../molecules/AccordionContent';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  .accordion__header {
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
    border-bottom: 1px solid #ddd;
    background-color: #f8f8f8;
  }
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionButton
        className={`accordion-button${isOpen ? ' accordion-button--active' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
      </AccordionButton>
      <AccordionContent open={isOpen}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;