import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import CortPhotoBlock from '../../components/CortPhotoBlock/CortPhotoBlock';
import BigAboutBlock from '../../components/BigAboutBlock/BigAboutBlock';
import RulesBlock from '../../components/RulesBlock/RulesBlock';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>О клубе</h1>
        </div>
        <main>
          <CortPhotoBlock />
          <BigAboutBlock />
          <RulesBlock />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
