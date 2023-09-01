import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from "./accordion.module.scss"

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <p className={styles.accordionTitle}>{title}</p>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={isAccordionOpen ? faMinus : faPlus} />
        </div>
      </div>
      {isAccordionOpen && (
        <div className={styles.accordionContent}>{content}</div>
      )}
    </div>
  );
};

export default Accordion;