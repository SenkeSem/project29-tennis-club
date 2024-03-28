import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './GalleryPage.module.scss';

const GalleryPage = () => {
  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <Header />
            <h1>Галерея</h1>
          </div>
          <main>
            <img src="/1photo.jpg" alt="1photo" />
            <img src="/2photo.jpg" alt="2photo" />
            <img src="/3photo.jpg" alt="3photo" />
            <img src="/4photo.jpg" alt="4photo" />
            <img src="/5photo.jpg" alt="5photo" />
            <img src="/6photo.jpg" alt="6photo" />
            <img src="/7photo.jpg" alt="7photo" />
            <img src="/8photo.jpg" alt="8photo" />
            <img src="/9photo.jpg" alt="9photo" />
          </main>
          <Footer />
        </div>
      </>
    </div>
  );
};

export default GalleryPage;
