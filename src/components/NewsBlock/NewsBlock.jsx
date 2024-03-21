import styles from './NewsBlock.module.scss';

const NewsBlock = ({ imageUrl, date, title }) => {
  return (
    <div className={styles.wrapper}>
      <main>
        <img src={imageUrl} alt="imageNews" />
        <p>{date}</p>
        <h5>{title}</h5>
      </main>
      <button>Подробнее</button>
    </div>
  );
};

export default NewsBlock;
