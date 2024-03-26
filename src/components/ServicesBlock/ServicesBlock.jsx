import { useState } from 'react';
import styles from './ServicesBlock.module.scss';

const ServicesBlock = () => {
  const SERVICES_INFO = [
    {
      imageUrl: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/cafe.png)',
      title: 'Уютное кафе',
    },
    {
      imageUrl: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/sauna.jpg)',
      title: 'Сауна',
    },
    {
      imageUrl: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/gym.jpg)',
      title: 'Тренажёрный зал',
    },
    {
      imageUrl: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/babe.jpg)',
      title: 'Детская комната',
    },
    {
      imageUrl: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/smyzi.jpg)',
      title: 'Смузи бар',
    },
  ];

  const [activeService, setActiveService] = useState(0);

  const handleNextImg = () => {
    let next = activeService;
    next++;

    if (next >= SERVICES_INFO.length) {
      setActiveService(0);
    } else {
      setActiveService(next);
    }
  };

  const handlePrevImg = () => {
    let prev = activeService;
    prev--;

    if (prev < 0) {
      setActiveService(SERVICES_INFO.length - 1);
    } else {
      setActiveService(prev);
    }
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h3>Услуги</h3>
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
        <div
          className={styles.photo}
          style={{
            backgroundImage: SERVICES_INFO[activeService].imageUrl,
          }}>
          <p>{SERVICES_INFO[activeService].title}</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesBlock;
