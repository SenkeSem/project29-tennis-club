import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img src="/tennis.png" alt="tennis" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О клубе</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/service">Услуги</Link>
          </li>
          <li>
            <Link to="/children">Детский теннис</Link>
          </li>
          <li>Галерея</li>
          <li>
            <Link to="/price">Цены</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoBox}>
        <Link to="https://www.youtube.com/@IntuitiveTennis">
          <img src="/youtube.svg" alt="youtube" />
        </Link>
        <Link to="https://vk.com/tennis_t14">
          <img src="/vk.svg" alt="vk" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
