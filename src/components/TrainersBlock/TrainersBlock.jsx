import styles from './TrainersBlock.module.scss';

const TrainersBlock = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <h4>Тренерский состав</h4>
      </section>
      <section className={styles.photoSection}>
        <article>
          <img src="https://img.championat.com/i/g/i/16756791321883456534.jpg" alt="1tren" />
          <h4>Novak Đoković</h4>
          <p>Arcu elit massa amet turpis vel consequat pellentesque sit. </p>
        </article>
        <article>
          <img
            src="data:image/jpeg;base64,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"
            alt="2tren"
          />
          <h4>Roger Federer</h4>
          <p>Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. </p>
        </article>
        <article>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Steffi_Graf_in_Hamburg_2010_%28cropped%29.jpg/548px-Steffi_Graf_in_Hamburg_2010_%28cropped%29.jpg"
            alt="3tren"
          />
          <h4>Steffi Graf</h4>
          <p>Id sapien sed nibh fermentum massa posuere ipsum. Diam in.</p>
        </article>
        <article>
          <img
            src="https://images.uznayvse.ru/600x800/p/images/catalog/2022/4/serena-williams_47.jpg"
            alt="4tren"
          />
          <h4>Serena Jameka Williams</h4>
          <p>
            Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam
            eros.
          </p>
        </article>
        <article>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg/548px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg"
            alt="5tren"
          />
          <h4>Rafael Nadal</h4>
          <p>Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus. </p>
        </article>
        <article>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Danill_Medvedev_Miami_2019.jpg/1200px-Danill_Medvedev_Miami_2019.jpg"
            alt="6tren"
          />
          <h4>Даниил Медведев</h4>
          <p>Quis ullamcorper pretium lacus risus tellus dolor etiam. </p>
        </article>
      </section>
    </div>
  );
};

export default TrainersBlock;
