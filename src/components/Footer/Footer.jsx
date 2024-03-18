import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>2024 © Все права защищены.</p>
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
        <img src="/youtubePurple.svg" alt="youtubePurple" />
        <img src="/vkPurple.svg" alt="vkPurple" />
        <img src="/telegramPurple.svg" alt="telegramPurple" />
      </div>
    </footer>
  );
};

export default Footer;
