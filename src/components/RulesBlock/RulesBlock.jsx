import styles from './RulesBlock.module.scss';

const RulesBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Блок с правила</h3>
      <section>
        <article className={styles.rules}>
          <ul>
            <li>Общие положения</li>
            <li>Основные определения</li>
            <li>Порядок предоставления игрового времени на кортах</li>
            <li>Оплата услуг</li>
            <li>Правила поведения на территории и кортах</li>
            <li>Прочие положения</li>
          </ul>
        </article>
        <article className={styles.rulesOpen}>
          <div>
            <h5>3.1. ТК предоставляет Членам клуба:</h5>
            <ul>
              <li>Разовое посещение;</li>
              <li>Абонементы с фиксированным временем;</li>
              <li>Абонементы на 30 и 50 часов;</li>
              <li>Индивидуальные занятия с тренером;</li>
              <li>«Клуб любителей тенниса»;</li>
              <li>Детские группы разных возрастов и уровня подготовки;</li>
              <li>Взрослые группы</li>
            </ul>
          </div>
          <div>
            <h5>3.2. Минимальное время:</h5>
            <ul>
              <li>Разового посещения — 60 минут;</li>
              <li>Разового посещения на летних кортах — 55 минут;</li>
              <li>Абонемента — 30 часов;</li>
              <li>Индивидуальное занятие с тренером — 1 час;</li>
              <li>
                Занятия с тренером в группах (детских/взрослых) — согласно действующего расписания
                групп.
              </li>
            </ul>
          </div>
          <div>
            <h5>3.3. Игровое время на основании заявок (брони)</h5>
            <p>
              ТК предоставляет игровое время на основании заявок (брони) Членов клуба с учетом
              расписания работы корта, проведения соревнований, клубных мероприятий, производства
              ремонтно-профилактических работ. Бронирование игрового времени осуществляется через
              администратора ТК. Бронирование может производиться непосредственно в Комплексе, либо
              по телефону. 3.4 ТК не несет ответственности за сохранение расписания игрового времени
              за Членом клуба после окончания срока действия абонемента, а также в случае нарушения
              срока оплаты услуг. 3.5 Абонемент имеют право приобретать только Члены ТК.
              Приобретение абонементов тренерами запрещено. 3.6. Отмена игрового времени может
              производится не позднее 24 часов до начала занятия и отыгрываться в течение сезона на
              равноценном времени, либо, при желании, на более дорогом, с доплатой. Не отмененное
              вовремя занятие считается состоявшимся и оплачивается по текущему тарифу. 3.7. При
              проведении соревнований, Клубных мероприятиях, технических неисправностях, не
              позволяющих эксплуатацию кортов, ТК имеет право производить изменения в расписании.
              При этом ТК обязуется заблаговременно уведомить Члена клуба по телефону об изменении в
              расписании, а также предоставить возможность равнозначно компенсировать пропущенное
              игровое время в удобное для Члена клуба время с учетом занятости кортов. 3.8.
              Компенсация (обоюдно согласованное равноценное игровое время) для занятий в ТК
              предоставляется также в случаях:
            </p>
            <ul>
              <li>
                когда Член клуба заблаговременно (не менее суток) известил администратора ТК о
                невозможности посещения занятия;
              </li>
              <li>
                неблагоприятных погодных условий для игры на открытых кортах, и невозможности
                предоставления закрытой площадки;
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default RulesBlock;
