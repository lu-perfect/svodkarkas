import type { PropsWithChildren } from "react";
import { useState } from "react";

import Modal from 'react-modal';

import FeedbackFormContext from "./context";

import Icon from "components/UI/Icon";
import Typography from "components/UI/Typography";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

export default function FeedbackFormProvider({ children } : PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function open(): void {
    setIsOpen(true);
  }
  function close(): void {
    setIsOpen(false);
  }

  return (
    <FeedbackFormContext.Provider
      value={{
        open,
        close,
      }}
    >
      {children}

      <Modal
        isOpen={isOpen}
        contentLabel="Заявка"
      >
        <Typography tag="h2">
          Форма обратной связи
        </Typography>

        <Button className="close-btn" onClick={close}>
          <Icon viewBox="0 0 18 18">
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="2" y1="16" x2="16" y2="2" />
          </Icon>
        </Button>

        <form>
          <Box className="form-field">
            <label>Имя</label>
            <input type="text" placeholder="Имя" />
          </Box>
          <Box className="form-field">
            <label>Телефон</label>
            <input type="text" placeholder="+7 (999) 999-9999" />
          </Box>

          <Box className="bottom">
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
          </Box>

        </form>
      </Modal>
    </FeedbackFormContext.Provider>
  );
}
