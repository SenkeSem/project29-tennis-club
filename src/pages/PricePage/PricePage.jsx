import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './PricePage.module.scss';

const PricePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>Прайс-лист</h1>
        </div>
        <main>
          <section>
            <h2>Аренда кортов</h2>
            <p>на период с 01.09.2023 г. до 31.05.2024 г.</p>
            <table>
              Понедельник - Пятница
              <tr>
                <td>Время</td>
                <td>Корты № 1 - 4</td>
                <td>Корт № 5*</td>
              </tr>
              <tr>
                <td>06:00 - 09:00</td>
                <td>2 000 р.</td>
                <td>1 500 р.</td>
              </tr>
              <tr>
                <td>09:00 - 15:00</td>
                <td>1 800 р.</td>
                <td>1 500 р.</td>
              </tr>
              <tr>
                <td>15:00 - 18:00</td>
                <td>2 300 р.</td>
                <td>2 800 р.</td>
              </tr>
              <tr>
                <td>18:00 - 22:00</td>
                <td>2 800 р.</td>
                <td>2 000 p.</td>
              </tr>
              <tr>
                <td>22:00 - 24:00</td>
                <td>2 000 р.</td>
                <td>1 500 р.</td>
              </tr>
            </table>
            <table>
              Суббота - Воскресенье
              <tr>
                <td>Время</td>
                <td>Корты № 1 - 4 </td>
                <td>Корт № 5*</td>
              </tr>
              <tr>
                <td>06:00 - 09:00</td>
                <td>2 000 р.</td>
                <td>1 500 р.</td>
              </tr>
              <tr>
                <td>09:00 - 22:00</td>
                <td>2 500 р.</td>
                <td>2 000 р.</td>
              </tr>
              <tr>
                <td>22:00 - 24:00</td>
                <td>2 000 р.</td>
                <td>1 500 р.</td>
              </tr>
            </table>
            <p>*Цены указаны за 1 час (60 минут) аренды</p>
          </section>

          <section>
            <h2>Услуги инструкторов по теннису</h2>
            <p>на период с 01.09.2023 г. до 31.05.2024 г.</p>
            <table>
              Для несовершеннолетних
              <tr>
                <td>Кол-во занимающихся на корте </td>
                <td>Продолжительность</td>
                <td>Стоимость</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1 час (60 минут)</td>
                <td>1 500 р.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1 час (60 минут)</td>
                <td>1 800 р.</td>
              </tr>
            </table>
            <table>
              Для взрослых
              <tr>
                <td>Кол-во занимающихся на корте </td>
                <td>Продолжительность</td>
                <td>Стоимость</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1 час (60 минут)</td>
                <td>2 000 р.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1 час (60 минут)</td>
                <td>2 500 р.</td>
              </tr>
            </table>
          </section>

          <section>
            <h2>Дополнительные услуги</h2>
            <table>
              на период с 01.09.2023 г. до 31.05.2024 г.
              <tr>
                <td>Услуга</td>
                <td>Продолжительность</td>
                <td>Кол-во </td>
                <td>Стоимость</td>
              </tr>
              <tr>
                <td>Прокат теннисной ракетки </td>
                <td>1 час (60 минут) </td>
                <td>1 шт </td>
                <td>300 р.</td>
              </tr>
              <tr>
                <td>Прокат мячей:</td>
                <td>1 час (60 минут) </td>
                <td>3 шт </td>
                <td>100 р.</td>
              </tr>
              <tr>
                <td></td>
                <td>1 час (60 минут) </td>
                <td>1 корзина (до 72 мячей) </td>
                <td>1 000 р.</td>
              </tr>
              <tr>
                <td>Аренда индивидуального шкафа-ячейки:</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Маленький</td>
                <td>1 месяц </td>
                <td>1 шт </td>
                <td>1 000 р.</td>
              </tr>
              <tr>
                <td>Средний</td>
                <td>1 месяц </td>
                <td>1 шт </td>
                <td>1 500 р.</td>
              </tr>
              <tr>
                <td>Большой</td>
                <td>1 месяц </td>
                <td>1 шт </td>
                <td>2 000 р.</td>
              </tr>
              <tr>
                <td>Прокат детской теннисной сетки 10s </td>
                <td>1 час (60 минут) </td>
                <td>1 шт </td>
                <td>500 р.</td>
              </tr>
              <tr>
                <td>Аренда стола для игры в настольный теннис </td>
                <td>1 час (60 минут) </td>
                <td>1 шт </td>
                <td>500 р.</td>
              </tr>
              <tr>
                <td>Аренда тренировочной стенки в зоне ОФП </td>
                <td>1 час (60 минут) </td>
                <td>1 шт </td>
                <td>500 р.</td>
              </tr>
              <tr>
                <td>Аренда полотенца:</td>
                <td>Большое (70*140) </td>
                <td>1 шт </td>
                <td>150 р.</td>
              </tr>
              <tr>
                <td></td>
                <td>Маленькое (40*70) </td>
                <td>1 шт </td>
                <td>100 р.</td>
              </tr>
            </table>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PricePage;
