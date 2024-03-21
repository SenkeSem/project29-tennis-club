import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './СontactsPage.module.scss';

const СontactsPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>Наши контакты</h1>
        </div>
        <main>
          <section>
            <img
              src="http://tennisclub.by/images/tild6464-6163-4631-b332-346434323239__group2.png"
              alt="phone"
            />
            <div>
              <p>+375 29 XXX XX XX</p>
              <p>+375 17 YYY YY YY</p>
              <p>info@project29tennisclub.by</p>
            </div>
          </section>
          <section>
            <img
              src="http://tennisclub.by/images/tild6238-3363-4633-b635-386462346263__group2.png"
              alt="address"
            />
            <div>
              <p>КЛУБ ТЕННИСА</p>
              <p>Республика Беларусь</p>
              <p>Минск, ул. Пушкина</p>
              <p>д. Колотушкина</p>
            </div>
          </section>
          <section>
            <img
              src="http://tennisclub.by/images/tild3833-6532-4832-b338-393066303165__group3.png"
              alt="parking"
            />
            <div>
              <p>Бесплатная парковка</p>
              <p>на которой Ваш автомобиль</p>
              <p>будет под присмотром.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default СontactsPage;
