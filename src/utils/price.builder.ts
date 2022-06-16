import { data } from "../data";
import * as math from "mathjs";

export class Price {
  public static builder(): PriceBuilder {
    return new PriceBuilder();
  }
}

export type FloorsVariant = 1 | 2 | 'masandra';

export class PriceBuilder {
  private _package = 1 | 2 | 3;

  private _area: number = 0;
  private _balconyArea: number = 0;
  private _terraceArea: number = 0;
  private _oneFloorElementsArea: number = 0;

  private _floors: FloorsVariant = 1;

  private _hasComplexRoof: boolean = false;
  private _complexWallsArea: number = 0;

  public setPackage(_package: 1 | 2 | 3): PriceBuilder {
    this._package = _package;

    return this;
  }

  public setArea(area: number): PriceBuilder {
    this._area = area;

    return this;
  }
  public setBalconyArea(area: number): PriceBuilder {
    this._balconyArea = area;

    return this;
  }
  public setTerraceArea(area: number): PriceBuilder {
    this._terraceArea = area;

    return this;
  }
  public setOneFloorElementsArea(area: number): PriceBuilder {
    this._oneFloorElementsArea = area;

    return this;
  }
  public setComplexWallsArea(area: number): PriceBuilder {
    this._complexWallsArea = area;

    return this;
  }

  public setFloors(floors: FloorsVariant): PriceBuilder {
    this._floors = floors;

    return this;
  }

  public hasComplexRoof(has: boolean): PriceBuilder {
    this._hasComplexRoof = has;

    return this;
  }

  public build(): number {
    const s0: number = math.subtract(this._area, math.add(this._oneFloorElementsArea, this._complexWallsArea)); // S элементов обычных.
    const s1: number = this._complexWallsArea;     // S элементов со сложными стенами (эркер).
    const s2: number = this._oneFloorElementsArea; // S элементов в 1 этаж (гараж).

    let fk: number = 1; // Коэффициент за этажность.
    let rk: number = 1; // Коэффициент за крышу.

    switch (this._floors) {
      case 1: fk = data.prices.oneStoryHouseCoefficient; break;
      case 2: fk = data.prices.twoStoryHouseCoefficient; break;
      case 'masandra': fk = 1; break;
    }

    if (this._hasComplexRoof) {
      rk = data.prices.complexRoofCoefficient;
    }

    let s: number = math.add(math.multiply((math.add(s0, math.multiply(s1, data.prices.complexWallsCoefficient))), fk), math.multiply(math.multiply(s2, data.prices.oneFloorElementsCoefficient), data.prices.oneStoryHouseCoefficient));

    let m: number;

    const p50_80: number = data.prices.price_per_meter[50_80][this._package - 1];
    const p80_120: number = data.prices.price_per_meter[80_120][this._package - 1];
    const p120_180: number = data.prices.price_per_meter[120_180][this._package - 1];
    const p180_220: number = data.prices.price_per_meter[180_220][this._package - 1];
    const p220_300: number = data.prices.price_per_meter[220_300][this._package - 1]
    const p300_450: number = data.prices.price_per_meter[300_450][this._package - 1];

    if (this._area < 80) {
      m = math.multiply(p50_80, this._area);
    } else if (this._area < 120) {
      const diff = math.subtract(120, this._area);

      const dx = math.divide(p80_120, math.subtract(120, 80));

      m = math.add(p50_80, math.multiply(diff, dx));
    } else if (this._area < 180) {
      const diff = math.subtract(180, this._area);
      const dx = math.divide(p120_180,  math.subtract(180, 120));

      m = math.add(p80_120, math.multiply(diff, dx));
    } else if (this._area < 220) {
      const diff = math.subtract(220, this._area);
      const dx = math.divide(p180_220, math.subtract(220, 180));

      m = math.add(p120_180, math.multiply(diff, dx));
    } else if (this._area < 300) {
      const diff = math.subtract(300, this._area);
      const dx = math.divide(p220_300, math.subtract(300, 220));

      m = math.add(p180_220, math.multiply(diff, dx));
    } else if (this._area < 450) {
      const diff = math.subtract(450, this._area);
      const dx = math.divide(p300_450, math.subtract(450, 300));

      m = math.add(p220_300, math.multiply(diff, dx));
    } else {
      m = data.prices.price_per_meter[300_450][this._package - 1];
    }
    return math.round(math.add(
      math.multiply(s, math.multiply(m, rk)),
      math.add(
        math.multiply(this._balconyArea, data.prices.balconyPrice),
        math.multiply(this._terraceArea, data.prices.terracePrice)
      )
    ), 3);
  }
}
