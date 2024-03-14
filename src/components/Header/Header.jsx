import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src="/public/tennis.png" alt="tennis" />
      <nav>
        <ul>
          <li>Главная</li>
          <li>О клубе</li>
          <li>Турниры</li>
          <li>Услуги</li>
          <li>Детский теннис</li>
          <li>Галерея</li>
          <li>Цены</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <div className={styles.logoBox}>
        <img src="/public/youtube.svg" alt="youtube" />
        <img src="/public/vk.svg" alt="vk" />
      </div>
    </header>
  );
};

export default Header;
