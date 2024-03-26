import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FAQElement from '../../components/FAQElement/FAQElement';

import styles from './ChildrenPage.module.scss';

const ChildrenPage = () => {
  const QUESTION_ANSWER = [
    {
      question: 'HOW WILL USING THE KIDS TENNIS APPROACH HELP MY CHILD’S DEVELOPMENT?',
      answer:
        'Kids Tennis offers a variety of benefits primarily associated with the modified equipment used (i.e., smaller racquet, court size, decompressed balls). The proportional equipment supports the size of younger athletes and helps in the overall development of the game’s key fundamentals. The fun and early success experiences fostered through Kids Tennis also tend to encourage players to continue in the sport over time',
    },
    {
      question: 'IS KIDS TENNIS USED TO DEVELOP KIDS IN OTHER COUNTRIES?',
      answer:
        'For many years, European countries such as France and Belgium used Kids Tennis to develop players, many of whom are on the pro Tours today. Over the past couple of years, the International Tennis Federation (ITF) along with more than 45 countries in Europe, North America and others have adopted the Kids Tennis approach, which is now generally accepted as the best means for developing young players. Also, many other sports such as baseball, soccer, and golf have been using the same scaled down approach to develop their young athletes for many years.',
    },
    {
      question: 'WHY IS THE COURT SIZE IMPORTANT?',
      answer:
        'The court size is proportional to the child’s size. This assists young players in developing an all-court game by ensuring realistic court coverage. The proportional court size will allow the children to develop tactics similar to the advanced tactics that they will use on a full court when they get older. For example, young players will be able to come to the net because of the shorter distance and more narrow sidelines that they would need to cover.',
    },
    {
      question: 'WHY IS THE TYPE OF BALL IMPORTANT?',
      answer:
        'The progressive ball moves through the court slower and bounces lower. Young players are able to receive and project the ball easier, which aids in the development of proper technical fundamentals (grip, set-up, impact point, hitting zone, and recovery). Use of the Kids ball also promotes longer rallies and the overall importance of consistency.',
    },
    {
      question: 'WHY IS THE LENGTH OF THE RACQUET IMPORTANT?',
      answer:
        'This aspect is one of the most important and often ignored. The proper racquet size (length and weight) will ensure racquet head control, stability, and feel for the ball which are the most important factors in ball control. It will also help prevent future injuries from the use of oversized racquets.',
    },
    {
      question: 'HOW IMPORTANT IS IT FOR A YOUNG PLAYER TO COMPETE FROM AN EARLIER STAGE?',
      answer:
        'Competition teaches many aspects of the game that cannot be learned in training. Hence, regular match play, both in tournaments and practice, is an essential part of a young player’s development. Regular competition will help develop mental skills such as: Incorporating technical fundamentals into match play, The ability to focus, Consistent and determination, Learning to cope with basic competitive environments, Learning emotional control and maintaining a positive attitude, Learning to display good sportsmanship, Developing and understanding the love of competing, Fostering the concept of respect for coaches, officials and other players.',
    },
    {
      question: 'HOW SHOULD ONE SELECT THE TYPE OF COMPETITION FOR A YOUNG JUNIOR PLAYER?',
      answer:
        'Selection of competition should ideally be based on achieving a 3:1 win-loss ratio over a period of time. This ensures both the development of confidence (through winning) while still maintaining motivation to improve and train hard (through losing). In general, it is recommended that juniors compete in their proper age category and only play up if they are winning tournaments easily and have exhausted the competition in their age category.',
    },
    {
      question: 'ARE THERE KIDS TENNIS TOURNAMENTS AVAILABLE FOR YOUNG PLAYERS TO COMPETE IN?',
      answer:
        'Tennis Canada, along with the Provincial Tennis Associations, has created a series of sanctioned tournaments that will allow kids to compete in the same environment in which they train. There are both U9 Advanced Tour events (orange court) and U10 Kids (green court) sanctioned events. It is also recommended that all programs offering half-court tennis implement a competitive portion within their club to provide regular competition to young players. Contact your Provincial Tennis Association for further information and the dates of these events.',
    },
    {
      question:
        'WILL KIDS TENNIS HOLD A TALENTED YOUNG PLAYER BACK FROM DEVELOPING IN COMPARISON TO TRAINING ON A FULL COURT WITH FULL COURT EQUIPMENT?',
      answer:
        'There is no one way to develop a tennis player, but Tennis Canada believes that the development of a child through the Kids Tennis stages will provide them with the means to properly establish the fundamental skills and tactics essential for long-term success on the full court.',
    },
    {
      question:
        'AT WHAT POINT SHOULD A YOUNG PLAYER BE PLAYING ON A FULL COURT WITH REGULAR BALLS?',
      answer:
        'The general goal for young players, is to have them training and playing on the full court by the age of 9 with the Kids green ball. Once the player is accustomed to the full court size with the green ball, they will then be able to move on to use regular tennis balls. There are multiple factors that need to be considered when trying to determine when a player is ready to play on a full court with regular balls. These include; athleticism, maturation rates, number of hours of training and competing, overall commitment to the sport, ability to learn and competitive results. As a result of these factors, a small group of children may be capable of progressing faster.',
    },
    {
      question:
        'ARE ALL TENNIS DEVELOPMENT CENTRES (TDCS) AND COACHES IN CANADA MOVING TOWARDS THIS TYPE OF TRAINING FOR YOUNG KIDS?',
      answer:
        'Tennis Canada and the Provincial Tennis Associations are strongly promoting and supporting Kids Tennis. All TDCs and their coaches are developing their young players with the Kids Tennis system and Tennis Canada continues to provide many resources to support them, including equipment, coaching resources and coaching education.',
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <Header />
          <h1>WHAT IS KIDS TENNIS</h1>
        </div>
        <main>
          <div>
            <h1>PROGRESSIVE STAGES AND EQUIPMENT</h1>
            <p>
              There are many variations of racquets and balls out there and sometimes it can be
              difficult to know which of them are the right ones, specifically for children. Below,
              we break down the type of equipment your child should be using, depending on their age
              and skillset.
            </p>
          </div>
          <section>
            <h2>
              <b>5-7 YEAR OLDS (“MINI TENNIS”)</b>
            </h2>
            <article>
              <div className={styles.imgBlock}>
                <img src="/5-7.png" alt="balls" />
                <img src="/5-7cort.png" alt="rocket" />
                <img src="/5-7.jpg" alt="cort" />
              </div>
              <div className={styles.textBlock}>
                <p>Ball: low-compression balls (orange)</p>
                <p>Racquet size: 23”</p>
              </div>
            </article>
            <p>
              Basic rules: Games to 11, 15, or 21 are generally recommended. The server has two
              chances to put ball in play. The first chance is overhead and the second can be
              underhand. The serve can land anywhere in the opponent’s court.
            </p>
          </section>

          <section>
            <h2>
              <b>7-9 YEAR OLDS (“3/4-COURT TENNIS”)</b>
            </h2>
            <article>
              <div className={styles.imgBlock}>
                <img src="/7-9ball.png" alt="balls" />
                <img src="/7-9rocket.png" alt="rocket" />
                <img src="/7-9cort.jpg" alt="cort" />
              </div>
              <div className={styles.textBlock}>
                <p>Ball: low-compression balls (orange)</p>
                <p>Racquet size: 23”</p>
              </div>
            </article>
            <p>Basic rules: full-court tennis</p>
          </section>

          <section>
            <h2>
              <b>9-10 YEAR OLDS (“FULL-COURT TENNIS”)</b>
            </h2>
            <article>
              <div className={styles.imgBlock}>
                <img src="/9-10ball.png" alt="balls" />
                <img src="/9-10rocket.png" alt="rocket" />
                <img src="/9-10cort.jpg" alt="cort" />
              </div>
              <div className={styles.textBlock}>
                <p>Ball: low-compression balls (eg. Wilson Easy Play)</p>
                <p>Racquet size: 23-25”</p>
              </div>
            </article>
            <p>Basic rules: full-court tennis</p>
          </section>
          <div className={styles.faqBlock}>
            <h2>
              <b>FAQS</b>
            </h2>
            <article>
              {QUESTION_ANSWER.map((item) => (
                <>
                  <FAQElement key={item.question} question={item.question} answer={item.answer} />
                </>
              ))}
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ChildrenPage;
