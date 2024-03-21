import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewsContainer from '../../components/NewsContainer/NewsContainer';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>Новости</h1>
        </div>
        <main>
          <NewsContainer />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
