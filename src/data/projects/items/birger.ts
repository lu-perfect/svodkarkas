const project: Project = {
  id: 'birger',

  title: 'Биргер',

  covers: 1,
  facades: 4,
  floors: 2,

  isPopular: false,
  isSale: false,

  area: {
    common: 243,
    balcony: 0,
    terrace: 12.2,
  },

  roof: {
    variant: 'gable',
    isComplex: true,
  },

  style: 'scandinavian',

  size: {
    x: 10.6,
    y: 11.95
  },

  bedrooms: 5,
  bathrooms: 3,
}
export default project;
