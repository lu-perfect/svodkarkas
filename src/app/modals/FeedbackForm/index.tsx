import Modal from 'react-modal';

import {useAppDispatch, useAppSelector} from "hooks/redux";

import Icon from "components/UI/Icon";
import Button from "components/UI/Button";

import {selectModal} from "../store/selectors";
import {closeModal} from "../store/slice";

export default function FeedbackFormModal() {
  const dispatch = useAppDispatch();
  const variant = useAppSelector(selectModal);

  return (
    <Modal
      isOpen={variant === 'feedback'}
      contentLabel="Заявка"
    >
      <h2>
        Форма обратной связи
      </h2>

      <Button className="close-btn" onClick={() => dispatch(closeModal())}>
        <Icon viewBox="0 0 18 18">
          <line x1="2" y1="2" x2="16" y2="16" />
          <line x1="2" y1="16" x2="16" y2="2" />
        </Icon>
      </Button>

      <form>
        <div className="form-field">
          <label>Имя</label>
          <input type="text" placeholder="Имя" />
        </div>
        <div className="form-field">
          <label>Телефон</label>
          <input type="text" placeholder="+7 (999) 999-9999" />
        </div>

        <div className="bottom">
          <label className="privacy">
            <input type="checkbox" checked value="confirm" />
            <small>
              Соглашаюсь с <a href="/privacy">политикой
              конфиденциальности</a>.
            </small>
          </label>

          <Button variant="slider" type="submit">
            Отправить
          </Button>
        </div>

      </form>
    </Modal>
  )
}
