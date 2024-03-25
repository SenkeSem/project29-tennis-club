import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src="/tennis.png" alt="tennis" />
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
          <li>Детский теннис</li>
          <li>Галерея</li>
          <li>Цены</li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoBox}>
        <img src="/youtube.svg" alt="youtube" />
        <img src="/vk.svg" alt="vk" />
      </div>
    </header>
  );
};

export default Header;
