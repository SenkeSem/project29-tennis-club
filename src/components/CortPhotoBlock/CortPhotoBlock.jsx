import styles from './CortPhotoBlock.module.scss';

const CortPhotoBlock = () => {
  return (
    <div className={styles.wrapperPhoto}>
      <section className={styles.headerPhoto}>
        <h3>Фото кортов</h3>
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
        <div className={styles.photo}></div>
      </section>
    </div>
  );
};

export default CortPhotoBlock;
