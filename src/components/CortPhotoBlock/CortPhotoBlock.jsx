import { useState } from 'react';

import styles from './CortPhotoBlock.module.scss';

const CortPhotoBlock = () => {
  const CORT_PHOTO = [
    'url(/cort.png)',
    'url(https://img.freepik.com/free-photo/symmetric-aerial-shot-tennis-field_181624-1785.jpg?t=st=1711463317~exp=1711466917~hmac=baf4aefba2ac4530b776821b0739f4290b7d93c2f05180f56c77a238b0aba6d7&w=1380)',
    'url(https://images.pexels.com/photos/2961964/pexels-photo-2961964.jpeg)',
    'url(https://images.pexels.com/photos/1432034/pexels-photo-1432034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    'url(https://images.pexels.com/photos/5741294/pexels-photo-5741294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    'url(https://images.pexels.com/photos/8224718/pexels-photo-8224718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  ];

  const [activeCort, setActiveCort] = useState(0);

  const handleNextImg = () => {
    let next = activeCort;
    next++;

    if (next >= CORT_PHOTO.length) {
      setActiveCort(0);
    } else {
      setActiveCort(next);
    }
  };

  const handlePrevImg = () => {
    let prev = activeCort;
    prev--;

    if (prev < 0) {
      setActiveCort(CORT_PHOTO.length - 1);
    } else {
      setActiveCort(prev);
    }
  };

  return (
    <div className={styles.wrapperPhoto}>
      <section className={styles.headerPhoto}>
        <h3>Фото кортов</h3>
        <article>
          <button onClick={handlePrevImg}>
            <img src="/left.svg" alt="left" />
          </button>
          <button onClick={handleNextImg}>
            <img src="/right.svg" alt="right" />
          </button>
        </article>
      </section>
      <section className={styles.serviceImg}>
        <div className={styles.photo} style={{ backgroundImage: CORT_PHOTO[activeCort] }}></div>
      </section>
    </div>
  );
};

export default CortPhotoBlock;
