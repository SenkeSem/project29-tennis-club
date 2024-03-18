import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>О клубе</h1>
        </div>
        <main></main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
