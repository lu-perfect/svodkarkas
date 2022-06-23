import Button from "components/UI/Button";

import styles from './styles.module.scss';

const OfferSection = () => (
  <section id="offer" className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>Карта построенных объектов</h3>
        <p>Мы строим в Москве и Московской области.</p>

        <div className={styles.map}>
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUJZCrWSC" frameBorder={0} allowFullScreen />
        </div>
      </div>

      <div className={styles.right}>
        <h3>Заказать звонок</h3>
        <p>Заполните форму и мы свяжется с вами в ближайшее время.</p>

        <form>
          <div className={styles.field}>
            <label>Ваше имя </label>
            <input type="text" placeholder="Иван Иванов" />
          </div>
          <div className={styles.field}>
            <label>Телефон <i>*</i></label>
            <input type="text" placeholder="+7 (_ _ _) _ _ _-_ _-_ _" />
          </div>

          <Button type="submit" variant="slider" className={styles.button}>
            Заказать звонок
          </Button>

          <small className={styles.agree}>
            * Нажимая на кнопку, вы даёте согласие на обработку ваших персональных данных в
            соответствии с <a target="_blank" href="/privacy">политикой конфиденциальности</a>
          </small>
        </form>
      </div>
    </div>
  </section>
);
export default OfferSection;
