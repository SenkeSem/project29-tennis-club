import styles from './BigAboutBlock.module.scss';

const BigAboutBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h1>О клубе</h1>
      <main>
        <img src="/bigCort.png" alt="bigCort" />
        <section>
          <h3>Петербургский теннисный клуб имени М.А. Пасечникова</h3>
          <article className={styles.pBlock}>
            <p>
              Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque. Posuere
              ipsum tellus dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus
              viverra vestibulum quis. Gravida pretium odio enim ut id tempus semper. Urna cum at in
              iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi faucibus
              pellentesque molestie nunc, et, tellus. Neque cras mattis dolor id. Maecenas vivamus
              tristique donec neque id convallis. Feugiat fusce at est at.
            </p>
            <p>
              Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida
              commodo egestas pharetra, mi interdum. Ullamcorper pulvinar hac risus egestas fusce
              nunc. Vel auctor proin integer ut lacus, sed neque id dictum. At enim quis eu, mattis
              aliquet varius in eu venenatis.
            </p>
            <p>
              Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum
              feugiat ut. In purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus
              turpis sapien ipsum, mattis. Tempor sit nulla ac lorem placerat congue. Nulla purus
              vestibulum suscipit pellentesque risus non.
            </p>
          </article>
          <article className={styles.numberBlock}>
            <div>
              <img src="/7.svg" alt="7" />
              <p>Летних грунтовых кортов</p>
            </div>
            <div>
              <img src="/4.svg" alt="4" />
              <p>Зимних корта с покрытием «искусственная трава»</p>
            </div>
            <div>
              <img src="/3.svg" alt="3" />
              <p>Зимних корта с покрытием «hard»</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default BigAboutBlock;
