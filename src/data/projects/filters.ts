export type FilterVariant<Variant> = 'all' | Variant;

export type PriceVariant = FilterVariant<'2_3' | '3_4' | '4_5' | '5_6' | '6_7' | '7+'>;
export type AreaVariant = FilterVariant<'less_100' | '100_150' | '150_200' | '200_250' | '250_300' | 'more_300'>;
export type FloorVariant = FilterVariant<1 | 2 | 'masandra'>;
export type BedroomVariant = FilterVariant<1 | 2 | 3 | 4>;
export type BathroomVariant = FilterVariant<1 | 2 | 3 | 4>;
export type RoofVariant = FilterVariant<'hip' | 'gable' | 'flat'>;
export type StyleVariant = FilterVariant<ArchitecturalStyle>;

export const priceKey = 'price';
export const areaKey = 'area';
export const floorsKey = 'floors';
export const bedroomsKey = 'bedrooms';
export const bathroomsKey = 'bathrooms';
export const roofKey = 'roof';
export const styleKey = 'style';

export type FilterKey = typeof priceKey | typeof areaKey | typeof floorsKey | typeof bedroomsKey | typeof bathroomsKey | typeof roofKey | typeof styleKey;

export const priceVariants: Options<PriceVariant> = [
  { key: '2_3', value: 'от 2 до 3 млн. руб.' },
  { key: '3_4', value: 'от 3 до 4 млн. руб.' },
  { key: '4_5', value: 'от 4 до 5 млн. руб.' },
  { key: '5_6', value: 'от 5 до 6 млн. руб.' },
  { key: '6_7', value: 'от 6 до 7 млн. руб.' },
  { key: '7+', value: 'от 7 млн. руб.' },
];
export const areaVariants: Options<AreaVariant> = [
  { key: 'less_100', value: 'до 100 м²' },
  { key: '100_150', value: 'от 100 до 150 м²' },
  { key: '150_200', value: 'от 150 до 200 м²' },
  { key: '200_250', value: 'от 200 до 250 м²' },
  { key: '250_300', value: 'от 250 до 300 м²' },
  { key: 'more_300', value: 'от 300 м²' },
];
export const floorsVariants: Options<FloorVariant> = [
  { key: 1, value: '1 этаж' },
  { key: 2, value: '2 этажа' },
  { key: 'masandra', value: 'с масандрой' },
];
export const bedroomsVariants: Options<BedroomVariant> = [
  { key: 1, value: 1 },
  { key: 2, value: 2 },
  { key: 3, value: 3 },
  { key: 4, value: 4 },
];
export const bathroomsVariants: Options<BathroomVariant> = [
  { key: 1, value: 1 },
  { key: 2, value: 2 },
  { key: 3, value: 3 },
  { key: 4, value: 4 },
];
export const roofVariants: Options<RoofVariant> = [
  { key: 'hip', value: 'Вальмовая' },
  { key: 'gable', value: 'Двускатная' },
  { key: 'flat', value: 'Плоская' },
];
export const styleVariants: Options<StyleVariant> = [
  { key: 'classic', value: 'Классический' },
  { key: 'barn', value: 'Барн' },
  { key: 'high-tech', value: 'High Tech' },
  { key: 'prairies', value: 'Прерий' },
  { key: 'chalet', value: 'Прерий' },
  { key: 'modern', value: 'Шале' },
  { key: 'scandinavian', value: 'Скандинавский' },
];

export const priceFilter = { id: priceKey as FilterKey, label: 'Цена, руб.', options: priceVariants };
export const areaFilter = { id: areaKey as FilterKey, label: 'Площадь, м²', options: areaVariants };
export const floorsFilter = { id: floorsKey as FilterKey, label: 'Этажность', options: floorsVariants };
export const bedroomsFilter = { id: bedroomsKey as FilterKey, label: 'Спален', options: bedroomsVariants, width: 12 as 12 };
export const bathroomsFilter = { id: bathroomsKey as FilterKey, label: 'Санузлов', options: bathroomsVariants, width: 12 as 12 };
export const roofFilter = { id: roofKey as FilterKey, label: 'Кровля', options: roofVariants };
export const styleFilter = { id: styleKey as FilterKey, label: 'Стиль', options: styleVariants };

export type FilterValues = Record<FilterKey, string | number>;
export type OrderByValue = null | typeof areaKey | typeof priceKey;
export const defaultFilterValues: FilterValues = {
  [priceKey]: 'all',
  [areaKey]: 'all',
  [floorsKey]: 'all',
  [bedroomsKey]: 'all',
  [bathroomsKey]: 'all',
  [roofKey]: 'all',
  [styleKey]: 'all',
}
