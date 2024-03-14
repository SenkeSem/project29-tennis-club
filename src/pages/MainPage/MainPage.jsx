import Header from '../../components/Header/Header';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <h1>Петербургский теннисный клуб имени М.А. Пасечникова</h1>
        </main>
        <section>
          <img src="/public/play.svg" alt="play" />
          <p>Посмотрите видео о нашем клубе</p>
        </section>
      </div>
    </>
  );
};

export default MainPage;
