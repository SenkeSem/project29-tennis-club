import styles from './AdvantagesBlock.module.scss';

const AdvantagesBlock = () => {
  return (
    <div className={styles.wrapper}>
      <article>
        <img src="/public/1.png" alt="1" />
        <h5>5 летних грунтовых кортов</h5>
      </article>
      <article>
        <img src="/public/2.png" alt="2" />
        <h5>Зал с покрытием “Искусственная трава”</h5>
      </article>
      <article>
        <img src="/public/3.png" alt="3" />
        <h5>Зал с покрытием “Хард”</h5>
      </article>
    </div>
  );
};

export default AdvantagesBlock;
