import styles from './AboutBlock.module.scss';

const AboutBlock = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/4.png" alt="4" />
      <main>
        <h2>Спортивный клуб</h2>
        <p>
          Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat
          pretium risus quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec
          vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. Non ipsum commodo,
          sit mi sit netus aenean nisl. Donec sit pellentesque enim, vestibulum.
        </p>
        <h3>Ornare orci ut dictum nulla fames.</h3>
        <ul>
          <li>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis. </li>
          <li>
            Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum
            auctor vitae in.{' '}
          </li>
          <li>
            Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis.{' '}
          </li>
          <li>
            Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus
            egestas nisl nullam.
          </li>
        </ul>
      </main>
    </div>
  );
};

export default AboutBlock;
