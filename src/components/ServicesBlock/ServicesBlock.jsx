import styles from './ServicesBlock.module.scss';

const ServicesBlock = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h3>Услуги</h3>
        <article>
          <button>
            <img src="/left.svg" alt="left" />
          </button>
          <button>
            <img src="/right.svg" alt="right" />
          </button>
        </article>
      </section>
      <section className={styles.serviceImg}>
        <div className={styles.photo}>
          <p>Уютное кафе</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesBlock;
