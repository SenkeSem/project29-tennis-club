import Header from '../../components/Header/Header';
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock';
import AboutBlock from '../../components/AboutBlock/AboutBlock';
import TrainersBlock from '../../components/TrainersBlock/TrainersBlock';
import PriceBlock from '../../components/PriceBlock/PriceBlock';
import ServicesBlock from '../../components/ServicesBlock/ServicesBlock';

import styles from './MainPage.module.scss';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <h1>Петербургский теннисный клуб имени М.А. Пасечникова</h1>
          <section>
            <a href="https://www.youtube.com/watch?v=0tfBbbXoNH0">
              <img src="/play.svg" alt="play" />
            </a>
            <p>Посмотрите видео о нашем клубе</p>
          </section>
        </main>
        <nav className={styles.container}>
          <article>
            <p>Услуги</p>
            <h5>
              Аренда корта <img src="/ci_external-link.svg" alt="link" />
            </h5>
          </article>
          <article>
            <p>Услуги</p>
            <h5>
              Детский теннис <img src="/ci_external-link.svg" alt="link" />
            </h5>
          </article>
          <article>
            <p>Услуги</p>
            <h5>
              Сборы команд <img src="/ci_external-link.svg" alt="link" />
            </h5>
          </article>
          <article>
            <p>Услуги</p>
            <h5>
              Расписание <img src="/ci_external-link.svg" alt="link" />
            </h5>
          </article>
        </nav>
      </div>
      <AdvantagesBlock />
      <AboutBlock />
      <TrainersBlock />
      <div className={styles.priceAndServices}>
        <PriceBlock />
        <ServicesBlock />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
