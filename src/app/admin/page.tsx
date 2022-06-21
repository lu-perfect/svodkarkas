import { useState } from "react";

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import Button from "../../components/UI/Button";
import Box from "components/UI/Box";

import AdminForm from "./components/Form";
import AdminFormField from "./components/Field";
import DropzoneField from "./components/DropzoneField";

import Select from 'react-select';
import Switch from "react-switch";

import { OneStoryElementVariant } from "../../@types/internal/enums/one-story-element.enum";
import { ComplexWalledElementVariant } from "../../@types/internal/enums/complex-walled-element.enum";
import { Floors } from "../../@types/internal/enums/floors.enum";
import { ArchitecturalStyle } from "../../@types/internal/enums/architectural-style.enum";
import { Roof } from "../../@types/internal/enums/roof.enum";
import { ProjectTag } from "../../@types/internal/enums/project-tag.enum";

export default function AdminPage() {
  const [title, setTitle] = useState<string>('');

  const [areaCommon, setAreaCommon] = useState<number>(0);
  const [areaTerrace, setAreaTerrace] = useState<number>(0);
  const [areaBalcony, setAreaBalcony] = useState<number>(0);

  const [floors, setFloors] = useState<{ value: Floors, label: string }>({ value: Floors.Unknown, label: 'Не выбрано' });
  const [style, setStyle] = useState<{ value: ArchitecturalStyle, label: string }>({ value: ArchitecturalStyle.Unknown, label: 'Не выбрано' });

  const [isPopular, setIsPopular] = useState<boolean>(false);

  function onSubmit() {

  }

  return (
    <section className="admin-page">

      <Container>

        <AdminForm onSubmit={onSubmit}>
          <Box className="row">
            <Box className="col col-12">
              <Typography tag="h3" className="row-title">Новый Проект</Typography>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Название">
                <input type="text" placeholder="Рассвет" value={title} onChange={(e) => setTitle(e.target.value)} />
              </AdminFormField>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Количество Этажей">
                <Select
                  defaultValue={floors}
                  onChange={(e) => setFloors(e as { value: Floors, label: string })}
                  options={[
                    { value: Floors.Unknown, label: 'Не выбрано' },

                    { value: Floors.One, label: Floors.toString(Floors.One) },
                    { value: Floors.Two, label: Floors.toString(Floors.Two) },
                    { value: Floors.Masandra, label: Floors.toString(Floors.Masandra) },
                  ]}
                  noOptionsMessage={() => <>Ничего не найдено</>}
                  classNamePrefix="select"
                />
              </AdminFormField>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Стиль">
                <Select
                  defaultValue={style}
                  onChange={(e) => setStyle(e as { value: ArchitecturalStyle, label: string })}
                  options={[
                    { value: ArchitecturalStyle.Unknown, label: 'Не выбрано' },

                    { value: ArchitecturalStyle.Modern, label: ArchitecturalStyle.toString(ArchitecturalStyle.Modern) },
                    { value: ArchitecturalStyle.Barn, label: ArchitecturalStyle.toString(ArchitecturalStyle.Barn) },
                    { value: ArchitecturalStyle.Chalet, label: ArchitecturalStyle.toString(ArchitecturalStyle.Chalet) },
                    { value: ArchitecturalStyle.Classic, label: ArchitecturalStyle.toString(ArchitecturalStyle.Classic,) },
                    { value: ArchitecturalStyle.Prairies, label: ArchitecturalStyle.toString(ArchitecturalStyle.Prairies) },
                    { value: ArchitecturalStyle.Scandinavian, label: ArchitecturalStyle.toString(ArchitecturalStyle.Scandinavian) },
                    { value: ArchitecturalStyle.HighTech, label: ArchitecturalStyle.toString(ArchitecturalStyle.HighTech) },
                  ]}
                  noOptionsMessage={() => <>Ничего не найдено</>}
                  classNamePrefix="select"
                />
              </AdminFormField>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col col-12">
              <Typography tag="h3" className="row-subtitle">Площади</Typography>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Общая">
                <input type="number" placeholder="10.00" value={areaCommon} onChange={(e) => setAreaCommon(Number(e.target.value))} />
              </AdminFormField>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Террас">
                <input type="number" placeholder="10.00" value={areaTerrace} onChange={(e) => setAreaTerrace(Number(e.target.value))} />
              </AdminFormField>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Балконов">
                <input type="number" placeholder="10.00" value={areaBalcony} onChange={(e) => setAreaBalcony(Number(e.target.value))} />
              </AdminFormField>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col col-6">
              <Box className="row">
                <Box className="col col-12">
                  <Typography tag="h3" className="row-subtitle">Габариты</Typography>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Длина">
                    <input type="number" placeholder="10.00" />
                  </AdminFormField>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Ширина">
                    <input type="number" placeholder="10.00" />
                  </AdminFormField>
                </Box>
              </Box>
            </Box>
            <Box className="col col-6">
              <Box className="row">
                <Box className="col col-12">
                  <Typography tag="h3" className="row-subtitle">Крыша</Typography>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Площадь">
                    <input type="number" placeholder="10.00" />
                  </AdminFormField>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Тип">
                    <Select
                      defaultValue={{ value: Roof.Unknown, label: 'Не выбрано' }}
                      options={[
                        { value: Roof.Unknown, label: 'Не выбрано' },

                        { value: Roof.Flat, label: Roof.toString(Roof.Flat) },
                        { value: Roof.Hip, label: Roof.toString(Roof.Hip) },
                        { value: Roof.Gable, label: Roof.toString(Roof.Gable) },
                      ]}
                      noOptionsMessage={() => <>Ничего не найдено</>}
                      classNamePrefix="select"
                    />
                  </AdminFormField>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col col-6">
              <Box className="row">
                <Box className="col col-12">
                  <Typography tag="h3" className="row-subtitle">Элемент в один этаж</Typography>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Площадь">
                    <input type="number" placeholder="10.00" />
                  </AdminFormField>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Тип">
                    <Select
                      defaultValue={{ value: OneStoryElementVariant.Unknown, label: 'Не выбрано' }}
                      options={[
                        { value: OneStoryElementVariant.Unknown, label: 'Не выбрано' },

                        { value: OneStoryElementVariant.Garage, label: OneStoryElementVariant.toString(OneStoryElementVariant.Garage) },
                        { value: OneStoryElementVariant.Bath, label: OneStoryElementVariant.toString(OneStoryElementVariant.Bath) },
                      ]}
                      noOptionsMessage={() => <>Ничего не найдено</>}
                      classNamePrefix="select"
                    />
                  </AdminFormField>
                </Box>
              </Box>
            </Box>
            <Box className="col col-6">
              <Box className="row">
                <Box className="col col-12">
                  <Typography tag="h3" className="row-subtitle">Элемент со сложными стенами</Typography>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Площадь">
                    <input type="number" placeholder="10.00" />
                  </AdminFormField>
                </Box>

                <Box className="col col-6">
                  <AdminFormField label="Тип">
                    <Select
                      defaultValue={{ value: ComplexWalledElementVariant.Unknown, label: 'Не выбрано' }}
                      options={[
                        { value: ComplexWalledElementVariant.Unknown, label: 'Не выбрано' },
                        { value: ComplexWalledElementVariant.Oriel, label: ComplexWalledElementVariant.toString(ComplexWalledElementVariant.Oriel) },
                      ]}
                      noOptionsMessage={() => <>Ничего не найдено</>}
                      classNamePrefix="select"
                    />
                  </AdminFormField>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col col-12">
              <Typography tag="h3" className="row-subtitle">Прочее</Typography>
            </Box>

            <Box className="col col-3">
              <AdminFormField label="Санузлов">
                <input type="number" placeholder="4" />
              </AdminFormField>
            </Box>

            <Box className="col col-3">
              <AdminFormField label="Спален">
                <input type="number" placeholder="2" />
              </AdminFormField>
            </Box>

            <Box className="col col-3">
              <AdminFormField label="Надбавка за понты">
                <input type="number" placeholder="100.000" />
              </AdminFormField>
            </Box>

            <Box className="col col-3">
              <AdminFormField label="Скидка">
                <input type="number" placeholder="100.000" />
              </AdminFormField>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col col-2">
              <AdminFormField label="Популярный?">
                <Switch onChange={() => setIsPopular(!isPopular)} checked={isPopular} onColor="#79b26c" offColor="#666" />
              </AdminFormField>
            </Box>
            <Box className="col col-2">
              <AdminFormField label="Активен?">
                <Switch onChange={() => setIsPopular(!isPopular)} checked={isPopular} onColor="#79b26c" offColor="#666" />
              </AdminFormField>
            </Box>

            <Box className="col col-4">
              <AdminFormField label="Тэги">
                <Select
                  options={[
                    { value: ProjectTag.Duplex, label: ProjectTag.toString(ProjectTag.Duplex) },
                    { value: ProjectTag.SecondLight, label: ProjectTag.toString(ProjectTag.SecondLight) },
                  ]}
                  isMulti
                  placeholder="Не выбрано"
                  noOptionsMessage={() => <>Ничего не найдено</>}
                  classNamePrefix="select"
                />
              </AdminFormField>
            </Box>
          </Box>


          <Box className="row">
            <Box className="col col-12">
              <Typography tag="h3" className="row-subtitle">Изображения</Typography>
            </Box>

            <Box className="col col-4">
              <DropzoneField accept="jpeg" title="Обложки" />
            </Box>
            <Box className="col col-4">
              <DropzoneField accept="png" title="Фасады" />
            </Box>
            <Box className="col col-4">
              <DropzoneField accept="jpeg" title="Планы" />
            </Box>
          </Box>

          <Box>
            <Button variant="slider" style={{ marginLeft: "auto" }}>
              Создать
            </Button>
          </Box>
        </AdminForm>

      </Container>

    </section>
  );
}
