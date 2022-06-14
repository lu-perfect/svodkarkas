import Typography from "components/UI/Typography";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

const OfferSection = () => (
  <section className="offer">
    <Box className="row">
      <Box className="col">
        <Typography tag="h3" className="h3">Карта построенных объектов</Typography>
        <Typography tag="p" className="description">Мы строим в Москве и Московской области.</Typography>

        <Box className="map">
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUJZCrWSC" frameBorder={0} allowFullScreen />
        </Box>
      </Box>

      <Box className="col">
        <Typography tag="h3" className="h3">Заказать звонок</Typography>
        <Typography tag="p" className="description">Заполните форму и мы свяжется с вами в ближайшее время.</Typography>

        <form>
          <Box className="field">
            <Typography tag="h3" className="h4">Ваше имя </Typography>
            <input type="text" />
          </Box>
          <Box className="field">
            <Typography tag="h3" className="h4">Телефон <i>*</i></Typography>
            <input type="text" placeholder="+7 (_ _ _) _ _ _-_ _-_ _" />
          </Box>

          <Button type="submit" variant="slider">
            Заказать звонок
          </Button>

          <small>
            * Нажимая на кнопку, вы даёте согласие на обработку ваших персональных данных в
            соответствии с <a target="_blank" href="/privacy">политикой конфиденциальности</a>
          </small>
        </form>
      </Box>
    </Box>
  </section>
);
export default OfferSection;
