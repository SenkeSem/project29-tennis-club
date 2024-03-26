import { useState } from 'react';
import styles from './FAQElement.module.scss';

const FAQElement = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.faqHeader} onClick={() => setIsActive(!isActive)}>
        <h5>{question}</h5>
        {isActive ? <img src="/minusBlack.svg" alt="minus" /> : <img src="/plus.svg" alt="plus" />}
      </div>

      {isActive && <p>{answer}</p>}
    </div>
  );
};

export default FAQElement;
