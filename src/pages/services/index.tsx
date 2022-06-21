import type { NextPage } from 'next'
import Image from 'next/image';

import Layout from 'components/Layout';
import Container from "../../components/UI/Container";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import InternalLink from "../../components/UI/InternalLink";
import Typography from "../../components/UI/Typography";
import Wrapper from "../../components/UI/Wrapper";
import Box from "../../components/UI/Box";
import {PropsWithChildren, useState} from "react";
import Icon from "../../components/UI/Icon";
import Button from "../../components/UI/Button";
import config from "../../config";

function Tab({ title, current, filename, onClick } : { title: string, current: any, filename: string, onClick: () => void }) {
  return (
    <button type="button" role="tab" aria-selected="false" tabIndex={-1} onClick={onClick} className={current.filename === filename ? 'active' : ''}>
      <Image width={100} height={80}  alt={title} src={`/images/banks/${filename}.png`} />
    </button>
  );
}

function Accordion({ title, desc } : { title: string; desc: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className={`accordion${isOpen ? ' open' : ''}`}>
      <Button aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Typography tag="h3">{title}</Typography>
        <Icon width={18} height={18} viewBox="0 0 18 18">
          <rect className="vert" x="8" width="2" height="18"/>
          <rect className="horiz" y="8" width="18" height="2"/>
        </Icon>
      </Button>

      <Typography tag="p">
        {desc}
      </Typography>
    </Box>
  );
}

const banks = {
  sberbank: {
    name: 'Сбербанк',
    filename: 'sberbank',
    sum: 30,
    rate: 8,
    term: 30,
    contribution: 25,
  },
  'alfa-bank': {
    name: 'Альфа-Банк',
    filename: 'alfa-bank',
    sum: 2,
    rate: 12,
    term: 5,
    contribution: 10,
  },
  tinkoff: {
    name: 'Тинькофф',
    filename: 'tinkoff',
    sum: 15,
    rate: 8,
    term: 15,
    contribution: 10,
  },
  vtb: {
    name: 'ВТБ',
    filename: 'vtb',
    sum: 16.3,
    rate: 7,
    term: 7,
    contribution: 0,
  },
  'dom.rf': {
    name: 'ДОМ.РФ',
    filename: 'dom.rf',
    sum: 30,
    rate: 6.1,
    term: 30,
    contribution: 20,
  },
  'loko-bank': {
    name: 'ЛокоБанк',
    filename: 'loko-bank',
    sum: 7,
    rate: 6.5,
    term: 7,
    contribution: 0,
  },
  'credit-europe-bank': {
    name: 'Сredit Europe Bank',
    filename: 'credit-europe-bank',
    sum: 6,
    rate: 13.99,
    term: 10,
    contribution: 10,
  },
  'post-bank': {
    name: 'Почта Банк',
    filename: 'post-bank',
    sum: 5,
    rate: 4.9,
    term: 7,
    contribution: 10,
  },
};

const ServiceItem = ({ filename, label, reverse, children } : PropsWithChildren<{ filename: string, reverse?: boolean, label: string }>) => (
  <div id={filename} className={`service-item${reverse ? ' service-item--reversed' : ''}`}>
    <picture>
      <source srcSet={`/images/pages/services/${filename}.jpg`} type="image/jpeg" />
      <img title={label} alt={label} />
    </picture>
    <div className="service-item__info">
      <Typography tag="h2">{label}</Typography>
      {children}
    </div>
  </div>
);

const faq = [
  { title: 'На Вашем сайте описаны все типы фундаментов, которые Вы делаете или возможны другие варианты?', desc: 'На нашем сайте описаны самые популярные типы фундаментов, но возможны и другие. Наши инженеры подберут оптимальный вариант для Ваших условий.' },
  { title: 'Возможно ли строительство по моему проекту?', desc: 'Да, мы с удовольствием выполним расчет и строительство вашего проекта.' },
  { title: 'Может ли измениться стоимость договора заключенного Заказчиком с Вашей фирмой?', desc: 'При заключении Договора сумма в рублях фиксируется на все время строительства. Если во время работ Заказчик принимает решение на дополнительные работы, то они просчитываются и заключается дополнительное соглашение. Только в этом случае сумма договора меняется.' },
  { title: 'Возможно ли изменение проекта по желанию заказчика? Как это отразится на его стоимости?', desc: 'Изменение проекта возможно. Проект и его изменения для нашего заказчика – бесплатно.' },
  { title: 'Можно ли купить проект дома?', desc: 'Да, это возможно. Цена на проектирование обговаривается с менеджером.' },
  { title: 'Откуда ваши бригады?', desc: 'Все наши рабочие россияне – из Вологодской, Нижегородской и Кировской областей.' },
  { title: 'В какое время года лучше приступить к строительству дома?', desc: 'Каждое время года имеет свое преимущество. Более подробно можно узнать у наших менеджеров.' },
  { title: 'Возможно ли строительство дома на моём фундаменте?', desc: 'Да, возможно. При необходимости мы можем модернизировать или достроить ваш фундамент.' },
  { title: 'Какие документы необходимы для заключения договора?', desc: 'При заключении договора необходим паспорт и документ о праве собственности на земельный участок.' },
  { title: 'Какой срок занимает строительство дома?', desc: 'Срок строительства дома колеблется от двух до пяти месяцев.' },
  { title: 'Как производится оплата при строительства дома?', desc: 'Оплату можно производить как по наличному, так и по безналичному расчету, наши реквизиты будут указаны в Договоре подряда.' },
  { title: 'Можно ли отзеркалить проект? Вход в дом нужен с другой стороны.', desc: 'Дом можно отзеркалить. Такие дома уже строились.' },
  { title: 'Возможно ли заливать бетон в зимнее время? Бетон не замерзнет?', desc: 'В зимнее время бетон с заводов отпускается с противоморозными добавками, которые не позволяют воде кристаллизоваться. Единственное отличие – бетон с противоморозными добавками набирает прочность заметно медленнее.' },
];

const ServicesPage: NextPage = () => {
  const [bank, setBank] = useState<any>(banks.sberbank);

  return (
    <Layout>
      <section className="credit" id="credit">
        <Container className="sec-header">
          <Typography tag="h2">
            Кредитование
          </Typography>
          <Button variant="outline">
            <Icon width={20} height={20} viewBox="0 0 22 22">
              <path d="M11 .714C16.678.714 21.286 5.322 21.286 11S16.678 21.286 11 21.286.714 16.678.714 11 5.322.714 11 .714zm0 1.715c-4.73 0-8.571 3.84-8.571 8.57 0 4.732 3.84 8.572 8.571 8.572s8.572-3.84 8.572-8.571S15.73 2.429 11 2.429zm0 12.086a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-.056-9.524c1.757 0 3.181 1.439 3.181 3.215a2.57 2.57 0 01-.74 1.808l-.716.739c-.425.436-.732.814-.862 1.475-.011.06-.02.148-.026.266a.793.793 0 01-.792.756h-.008a.796.796 0 01-.796-.796v-.002c0-.223.008-.369.021-.438.123-.64.435-1.215.873-1.663l.986-1.012a1.604 1.604 0 00-1.121-2.74c-.557 0-1.048.292-1.333.731a3.343 3.343 0 00-.212.416.796.796 0 01-.983.428l-.03-.01a.76.76 0 01-.458-1.007c.057-.138.11-.26.163-.367.546-1.111 1.575-1.799 2.853-1.799z" />
            </Icon>
            Рассчитать Стоимость
          </Button>
        </Container>

        <Box className="separator" />

        <Container>
          <Box className="tabs">
            <div className="controls" role="tablist">
              <Tab title="Сбербанк" filename="sberbank" current={bank} onClick={() => setBank(banks.sberbank)} />
              <Tab title="Альфа-Банк" filename="alfa-bank" current={bank} onClick={() => setBank(banks["alfa-bank"])} />
              <Tab title="Тинькофф" filename="tinkoff" current={bank} onClick={() => setBank(banks.tinkoff)} />
              <Tab title="ВТБ" filename="vtb" current={bank} onClick={() => setBank(banks.vtb)} />
              <Tab title="ДОМ.РФ" filename="dom.rf" current={bank} onClick={() => setBank(banks["dom.rf"])} />
              <Tab title="ЛокоБанк" filename="loko-bank" current={bank} onClick={() => setBank(banks["loko-bank"])} />
              <Tab title="CreditEuropeBank" filename="credit-europe-bank" current={bank} onClick={() => setBank(banks["credit-europe-bank"])} />
              <Tab title="Почта Банк" filename="post-bank" current={bank} onClick={() => setBank(banks["post-bank"])} />
              <Tab title="Материнский Капитал" filename="maternal-capital" current={bank} onClick={() => {}} />
            </div>
          </Box>

          <table className="bank-table">
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

      <section className="services">
        <Container>
          <ServiceItem label="Проектирование" filename="design-services">
            <ol>
              <li>Эскизное проектирование позволяет клиенту понять, как будет выглядеть его будущий дом. Вы получаете
                3d модель дома, планировки, фасады.
              </li>
              <li>Архитектурно-строительного проектирования достаточно для строительства дома - в него входят все
                чертежи и узлы.
              </li>
              <li>Проектирование инженерных систем - это чертежи и узлы вентиляции, отопления, канализации,
                водоснабжения.
              </li>
            </ol>
            <ul>
              <li>
                <a href="/docs/examples/draft-design.pdf">
                  Пример эскизного проекта <span>(pdf)</span>
                </a>
              </li>
              <li>
                <a href="/docs/examples/as-project.pdf">
                  Пример архитектурно-строительного проекта <span>(pdf)</span>
                </a>
              </li>
            </ul>
          </ServiceItem>

          <ServiceItem label="Посещение объекта" filename="visit-object" reverse>
            <p>
              Мы рекомендуем всем нашим клиентам посетить строящиеся объекты до начала строительства. Увидев процесс
              стройки своими глазами, вы сами примите решение, сотрудничать с нами или нет.
              <br />
              <br />
              Для того, чтобы записаться на экскурсию, необходимо подъехать к нам в офис и выбрать интересующий
              вас дом или созвониться с нами и мы подберем подходящий проект. Услуга не требует подписания
              договора.
            </p>
          </ServiceItem>

          <ServiceItem label="Выезд специалиста" filename="departure-specialist">
            <p>
              Перед началом строительства необходимо детально изучить участок, в частности, состояние грунта и
              будущее местоположение дома. Данная услуга предоставляется бесплатно при заключении договора.
            </p>
          </ServiceItem>

          <ServiceItem label="Строительство под ключ" filename="turnkey-building" reverse>
            <p>
              Мы предоставляем услугу строительства &#34;под ключ&#34; - вы можете сразу жить в доме без необходимости
              дополнительных работ. Строительство &#34;под ключ&#34; подразумевает максимульную комплектацию дома, все
              инженерные системы и чистовую внутреннюю отделку.
            </p>
          </ServiceItem>

          <ServiceItem label="Отслеживание строительства" filename="object-observation">
            <p>
              Мы предоставляем услугу круглосуточного наблюдения за процессом строительства. Специальная камера
              устанавливается таким образом, чтобы вы могли отслеживать ход работ.
              <br />
              <br />
              Стоимость услуги составляет 50 000 рублей.
            </p>
          </ServiceItem>
        </Container>
      </section>

      <section className="faq" id="faq">
        <Container className="sec-header">
          <Typography tag="h2">
            Часто задаваемые вопросы
          </Typography>
          <Button variant="outline">
            <Icon width={20} height={20} viewBox="0 0 22 22">
              <path d="M11 .714C16.678.714 21.286 5.322 21.286 11S16.678 21.286 11 21.286.714 16.678.714 11 5.322.714 11 .714zm0 1.715c-4.73 0-8.571 3.84-8.571 8.57 0 4.732 3.84 8.572 8.571 8.572s8.572-3.84 8.572-8.571S15.73 2.429 11 2.429zm0 12.086a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-.056-9.524c1.757 0 3.181 1.439 3.181 3.215a2.57 2.57 0 01-.74 1.808l-.716.739c-.425.436-.732.814-.862 1.475-.011.06-.02.148-.026.266a.793.793 0 01-.792.756h-.008a.796.796 0 01-.796-.796v-.002c0-.223.008-.369.021-.438.123-.64.435-1.215.873-1.663l.986-1.012a1.604 1.604 0 00-1.121-2.74c-.557 0-1.048.292-1.333.731a3.343 3.343 0 00-.212.416.796.796 0 01-.983.428l-.03-.01a.76.76 0 01-.458-1.007c.057-.138.11-.26.163-.367.546-1.111 1.575-1.799 2.853-1.799z" />
            </Icon>
            Задать вопрос
          </Button>
        </Container>

        <Box className="separator" />

        <Container>
          {faq.map((e) => (<Accordion {...e} />))}
        </Container>
      </section>
    </Layout>
  )
}

export default ServicesPage;
