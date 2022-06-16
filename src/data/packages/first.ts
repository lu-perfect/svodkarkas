import { common1, common2, common3, common4 } from "./commons";

export const firstPackage: Package = {
  id: 1,
  title: 'Закрытый контур',
  blocks: [
    ...common1,
    {
      id: 12,
      title: 'Тепло-, звукоизоляция и защита каркаса',
      paragraphs: [
        {
          id: 1,
          isEmpty: true,
          content: 'Наружные стены: экологически чистый базальтовый утеплитель Rockwool Лайт Баттс Скандик/Paroc Extra/Технониколь в 4 слоя (150+50мм) с перекрестным утеплением.'
        },
        {
          id: 2,
          isEmpty: true,
          content: 'Межкомнатные перегородки и межэтажное перекрытие: экологически чистый базальтовый утеплитель Paroc EXTRA или ROCKWOOL ЛАЙТ БАТТС в 2 слоя.',
        },
        {
          id: 3,
          isEmpty: true,
          content: 'Полы первого этажа: экологически чистый базальтовый утеплитель Paroc EXTRA или ROCKWOOL ЛАЙТ БАТТС в 4 слоя; гидро-ветро изоляционная мембрана.',
        },
        {
          id: 4,
          isEmpty: true,
          content: 'Чердачное перекрытие: экологически чистый базальтовый утеплитель Paroc EXTRA или ROCKWOOL ЛАЙТ БАТТС в 4 слоя (200мм). Высококачественная гидро-ветрозащитная диффузионная мембрана.',
        },
      ]
    },
    ...common2,
    {
      id: 15,
      title: 'Внутренняя отделка стен',
      paragraphs: [
        {
          id: 1,
          isEmpty: true,
          content: 'Высококачественная пароизоляционная пленка стен, полов, скатов.',
        },
        {
          id: 2,
          isEmpty: true,
          content: 'Сухая обшивочная доска "имитация бруса" (16 мм)',
        },
      ]
    },
    {
      id: 16,
      title: 'Покрытие полов 1-го и 2-го этажей',
      paragraphs: [
        {
          id: 1,
          content: 'Ориентированно-стружечная плита (ОСП-3)                              ',
        },
        {
          id: 2,
          content: 'Обрешетка – сухой строганная доска 35х95 мм, шаг 300 мм',
          isEmpty: true,
        },
        {
          id: 3,
          content: 'Пароизоляция',
          isEmpty: true,
        }
      ]
    },
    {
      id: 17,
      title: 'Отделка потолков 1-го и 2-го этажей',
      paragraphs: [
        {
          id: 1,
          content: 'Сухая обшивочная доска «евровагонка» класса А-B',
          isEmpty: true,
        },
        {
          id: 2,
          content: 'Сухая обшивочная доска «евровагонка» класса А-B',
          isEmpty: true,
        },
      ]
    },
    {
      id: 18,
      title: 'Внутренняя отделка стен санузлов',
      paragraphs: [
        {
          id: 1,
          isEmpty: true,
        }
      ]
    },
    {
      id: 19,
      title: 'Отделка потолка санузлов',
      paragraphs: [
        {
          id: 1,
          isEmpty: true,
        }
      ]
    },
    ...common3,
    {
      id: 21,
      title: 'Дверь',
      paragraphs: [
        {
          id: 1,
          content: 'Входная утеплённая металлическая дверь'
        },
        {
          id: 2,
          isEmpty: true,
        },
      ]
    },
    {
      id: 22,
      title: 'Межэтажная лестница',
      paragraphs: [
        {
          id: 1,
          isEmpty: true,
        }
      ]
    },
    ...common4
  ]
};
