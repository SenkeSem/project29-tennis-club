import styles from './TrainersBlock.module.scss';

const TrainersBlock = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <h4>Тренерский состав</h4>
        <article>
          <button>
            <img src="/left.svg" alt="left" />
          </button>
          <button>
            <img src="/right.svg" alt="right" />
          </button>
        </article>
      </section>
      <section className={styles.photoSection}>
        <article>
          <img src="/1tren.png" alt="1tren" />
          <h4>Pulvinar aliquam</h4>
          <p>Arcu elit massa amet turpis vel consequat pellentesque sit. </p>
        </article>
        <article>
          <img src="/2tren.png" alt="2tren" />
          <h4>Pretium odio</h4>
          <p>Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. </p>
        </article>
        <article>
          <img src="/3tren.png" alt="3tren" />
          <h4>Aliquet consectetur</h4>
          <p>Id sapien sed nibh fermentum massa posuere ipsum. Diam in.</p>
        </article>
        <article>
          <img src="/4tren.png" alt="4tren" />
          <h4>Blandit augue</h4>
          <p>
            Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam
            eros.
          </p>
        </article>
        <article>
          <img src="/5tren.png" alt="5tren" />
          <h4>Lorem lacus</h4>
          <p>Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus. </p>
        </article>
        <article>
          <img src="/6tren.png" alt="6tren" />
          <h4>Sed erat</h4>
          <p>Quis ullamcorper pretium lacus risus tellus dolor etiam. </p>
        </article>
      </section>
    </div>
  );
};

export default TrainersBlock;
