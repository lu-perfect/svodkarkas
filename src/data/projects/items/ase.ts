const project: Project = {
  id: 'ase',

  title: 'Асе',

  covers: 1,
  facades: 4,
  floors: 'masandra',

  isPopular: false,
  isSale: false,

  area: {
    common: 348.2,
    balcony: 9.5,
    terrace: 40.1,
  },

  oneFloorElement: {
    area: 57,
  },

  roof: {
    variant: 'hip',
    isComplex: true,
  },

  style: 'classic',

  size: {
    x: 13.9,
    y: 18.2
  },

  bedrooms: 4,
  bathrooms: 2,
}
export default project;
