import { useState } from "react";

import Typography from "components/UI/Typography";
import Select from "components/UI/Select";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

const AdvancedSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box className="advanced-search">
      <Box className="form-field price">
        <label>Цена, руб.</label>
        <Select
          id="price"
          options={[
            { key: 'all', value: 'Все' },
            { key: '2_3', value: 'от 2 до 3 млн. руб.' },
            { key: '4_5', value: 'от 4 до 5 млн. руб.' },
            { key: '5_6', value: 'от 5 до 6 млн. руб.' },
            { key: '6_7', value: 'от 6 до 7 млн. руб.' },
            { key: '7+', value: 'от 7 млн. руб.' },
          ]}
        />
      </Box>
      <Box className="form-field area">
        <label>Площадь, м².</label>
        <Select
          id="area"
          options={[
            { key: 'all', value: 'Все' },
            { key: '<100', value: 'до 100 м²' },
            { key: '100_150', value: 'от 100 до 150 м²' },
            { key: '150_200', value: 'от 150 до 200 м²' },
            { key: '200_250', value: 'от 200 до 250 м²' },
            { key: '250_300', value: 'от 250 до 300 м²' },
            { key: '>300', value: 'от 300 м²' },
          ]}
        />
      </Box>
      <Box className="form-field bedrooms">
        <label>Спален</label>
        <Select
          id="bedrooms"
          options={[
            { key: 'all', value: 'Все' },
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
          ]}
        />
      </Box>
      <Box className="form-field bathrooms">
        <label>Санузлов</label>
        <Select
          id="bathrooms"
          options={[
            { key: 'all', value: 'Все' },
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
          ]}
        />
      </Box>
      <Box className="button-wrapper">
        <Button>
          Подобрать Проект
        </Button>
      </Box>

      <Box className="bottom-filters">
        <Typography>
          Сортировать по
        </Typography>

        <Button>
          цене
        </Button>

        <Button>
          площади
        </Button>

        <Button>
          популярности
        </Button>

        <Button>
          новизне
        </Button>

        <Button className="show-more" onClick={() => setOpen(!open)}>
          {open ? 'Скрыть' : 'Дополнительные параметры'}
        </Button>
      </Box>


      {open && (
        <>
          <Box className="form-field floors">
            <label>Этажность</label>
            <Select
              id="floors"
              options={[
                { key: 'all', value: 'Все' },
                { key: '1', value: '1 этаж' },
                { key: '2', value: '2 этажа' },
                { key: 'masandra', value: 'с масандрой' },
              ]}
            />
          </Box>

          <Box className="form-field roof">
            <label>Кровля</label>
            <Select
              id="roof"
              options={[
                { key: 'all', value: 'Все' },
                { key: 'hip', value: 'Вальмовая' },
                { key: 'double', value: 'Двускатная' },
                { key: 'polyline', value: 'Ломаная' },
                { key: 'flat', value: 'Плоская' },
              ]}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
export default AdvancedSearch;
