const servicesData = [
  {
    label: 'Проектирование',
    filename: 'design-services',
    description: `1. Эскизное проектирование позволяет клиенту понять, как будет выглядеть его будущий дом. Вы получаете 3d модель дома, планировки, фасады.
2. Архитектурно-строительного проектирования достаточно для строительства дома - в него входят все чертежи и узлы.
3. Проектирование инженерных систем - это чертежи и узлы вентиляции, отопления, канализации, водоснабжения.`,
    content: (
      <>
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
      </>
    ),
  },
  {
    label: 'Посещение объекта',
    filename: 'visit-object',
    description: `Мы рекомендуем всем нашим клиентам посетить строящиеся объекты до начала строительства. Увидев процесс стройки своими глазами, вы сами примите решение, сотрудничать с нами или нет. Для того, чтобы записаться на экскурсию, необходимо подъехать к нам в офис и выбрать интересующий вас дом или созвониться с нами и мы подберем подходящий проект. Услуга не требует подписания договора.`,
    content: (
      <p>
        Мы рекомендуем всем нашим клиентам посетить строящиеся объекты до начала строительства. Увидев процесс
        стройки своими глазами, вы сами примите решение, сотрудничать с нами или нет.
        <br />
        <br />
        Для того, чтобы записаться на экскурсию, необходимо подъехать к нам в офис и выбрать интересующий
        вас дом или созвониться с нами и мы подберем подходящий проект. Услуга не требует подписания
        договора.
      </p>
    ),
  },
  {
    label: 'Выезд специалиста',
    filename: 'departure-specialist',
    description: `Перед началом строительства необходимо детально изучить участок, в частности, состояние грунта и будущее местоположение дома. Данная услуга предоставляется бесплатно при заключении договора.`,
    content: (
      <p>
        Перед началом строительства необходимо детально изучить участок, в частности, состояние грунта и
        будущее местоположение дома. Данная услуга предоставляется бесплатно при заключении договора.
      </p>
    ),
  },
  {
    label: 'Строительство под ключ',
    filename: 'turnkey-building',
    description: `Мы предоставляем услугу строительства "под ключ" - вы можете сразу жить в доме без необходимости дополнительных работ. Строительство "под ключ" подразумевает максимульную комплектацию дома, все инженерные системы и чистовую внутреннюю отделку.`,
    content: (
      <p>
        Мы предоставляем услугу строительства &#34;под ключ&#34; - вы можете сразу жить в доме без необходимости
        дополнительных работ. Строительство &#34;под ключ&#34; подразумевает максимульную комплектацию дома, все
        инженерные системы и чистовую внутреннюю отделку.
      </p>
    ),
  },
  {
    label: 'Отслеживание строительства',
    filename: 'object-observation',
    description: `Мы предоставляем услугу круглосуточного наблюдения за процессом строительства. Специальная камера устанавливается таким образом, чтобы вы могли отслеживать ход работ.
Стоимость услуги составляет 50 000 рублей.`,
    content: (
      <p>
        Мы предоставляем услугу круглосуточного наблюдения за процессом строительства. Специальная камера
        устанавливается таким образом, чтобы вы могли отслеживать ход работ.
        <br />
        <br />
        Стоимость услуги составляет 50 000 рублей.
      </p>
    ),
  },
  ];

export default servicesData;
