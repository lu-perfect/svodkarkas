import type { NextPage } from 'next';

import { useState } from "react";

import Image from 'next/image';

import Container from "components/UI/Container";
import Icon from "components/UI/Icon";
import Button from "components/UI/Button";

import BankTab from "./Tab";

import styles from './styles.module.scss';

import banksData from "./banks.data";

const CreditPage: NextPage = () => {
  const [bank, setBank] = useState(banksData.sberbank);

  return (
    <section className={styles.root} id="credit">
      <Container className={styles.header}>
        <h2>
          Кредитование
        </h2>
        <Button variant="outline" className={styles.button}>
          <Icon width={20} height={20} viewBox="0 0 22 22">
            <path d="M11 .714C16.678.714 21.286 5.322 21.286 11S16.678 21.286 11 21.286.714 16.678.714 11 5.322.714 11 .714zm0 1.715c-4.73 0-8.571 3.84-8.571 8.57 0 4.732 3.84 8.572 8.571 8.572s8.572-3.84 8.572-8.571S15.73 2.429 11 2.429zm0 12.086a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-.056-9.524c1.757 0 3.181 1.439 3.181 3.215a2.57 2.57 0 01-.74 1.808l-.716.739c-.425.436-.732.814-.862 1.475-.011.06-.02.148-.026.266a.793.793 0 01-.792.756h-.008a.796.796 0 01-.796-.796v-.002c0-.223.008-.369.021-.438.123-.64.435-1.215.873-1.663l.986-1.012a1.604 1.604 0 00-1.121-2.74c-.557 0-1.048.292-1.333.731a3.343 3.343 0 00-.212.416.796.796 0 01-.983.428l-.03-.01a.76.76 0 01-.458-1.007c.057-.138.11-.26.163-.367.546-1.111 1.575-1.799 2.853-1.799z" />
          </Icon>
          Рассчитать Стоимость
        </Button>
      </Container>

      <div className={styles.separator} />

      <Container>
        <div className={styles.tabs} role="tablist">
          <BankTab title="Сбербанк" filename="sberbank" current={bank} onClick={() => setBank(banksData.sberbank)} />
          <BankTab title="Альфа-Банк" filename="alfa-bank" current={bank} onClick={() => setBank(banksData["alfa-bank"])} />
          <BankTab title="Тинькофф" filename="tinkoff" current={bank} onClick={() => setBank(banksData.tinkoff)} />
          <BankTab title="ВТБ" filename="vtb" current={bank} onClick={() => setBank(banksData.vtb)} />
          <BankTab title="ДОМ.РФ" filename="dom.rf" current={bank} onClick={() => setBank(banksData["dom.rf"])} />
          <BankTab title="ЛокоБанк" filename="loko-bank" current={bank} onClick={() => setBank(banksData["loko-bank"])} />
          <BankTab title="CreditEuropeBank" filename="credit-europe-bank" current={bank} onClick={() => setBank(banksData["credit-europe-bank"])} />
          <BankTab title="Почта Банк" filename="post-bank" current={bank} onClick={() => setBank(banksData["post-bank"])} />
          <BankTab title="Материнский Капитал" filename="maternal-capital" current={bank} onClick={() => {}} />
        </div>

        <table className={styles.table}>
          <thead>
          <tr>
            <th scope="col">Банк</th>
            <th scope="col">Сумма кредита</th>
            <th scope="col">Ставка</th>
            <th scope="col">Срок</th>
            <th scope="col">Первый взнос</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Image width={100} height={45} alt={bank.name} src={`/images/banks/${bank.filename}.png`} />
            </td>
            <td data-label="Сумма кредита:">
              до {bank.sum} млн. ₽
            </td>
            <td data-label="Ставка:">
              от {bank.rate} %
            </td>
            <td data-label="Срок кредита:">
              до {bank.term} лет
            </td>
            <td data-label="Первый взнос:">
              {bank.contribution !== 0 ? `${bank.contribution}%` : ''}
            </td>
          </tr>
          </tbody>
        </table>
      </Container>
    </section>
  )
}

export default CreditPage;
