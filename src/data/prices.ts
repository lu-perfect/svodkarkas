const prices = {
  balconyPrice: 18000,
  terracePrice: 19500,
  oneStoryHouseCoefficient: 1.15,
  twoStoryHouseCoefficient: 1.03,
  complexRoofCoefficient: 1.03,
  complexWallsCoefficient: 1.03,
  oneFloorElementsCoefficient: 1.15,
  price_per_meter: {
    50_80: [25500, 34000, 37500],
    80_120: [24000, 33000, 35000],
    120_180: [23500, 32500, 34000],
    180_220: [23000, 31500, 32500],
    220_300: [22500, 31000, 32000],
    300_450: [22500, 30000, 31000],
  }
}

export default prices;
