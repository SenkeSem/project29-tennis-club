import styles from './PriceBlock.module.scss';

const PriceBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Цены и абонементы</h3>
      <main>
        <section>
          <p>Зимний сезон 2021-2022</p>
          <img src="/public/left.svg" alt="left" />
        </section>
        <section>
          <p>Абонементы</p>
          <img src="/public/left.svg" alt="left" />
        </section>
        <section>
          <p>Скидки</p>
          <img src="/public/left.svg" alt="left" />
        </section>
        <section>
          <p>Дополнительные услуги</p>
          <img src="/public/left.svg" alt="left" />
        </section>
      </main>
    </div>
  );
};

export default PriceBlock;
