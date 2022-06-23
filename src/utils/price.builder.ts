import * as math from "mathjs";
import prices from "../data/prices";

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
  private _oneStoreyElementsArea: number = 0;

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
    this._oneStoreyElementsArea = area;

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
    const $E19 = this._area;
    const $J19 = this._complexWallsArea;
    const $H19 = this._oneStoreyElementsArea;
    const $G19 = this._terraceArea;
    const $B19 = this._floors;
    const $F19 = this._balconyArea;
    const $I19 = this._hasComplexRoof ? 1 : 0;

    const $L$3 = prices.balconyPrice;
    const $L$4 = prices.terracePrice;

    const L$6: number = prices.price_per_meter[50_80][this._package - 1];
    const L$7: number = prices.price_per_meter[80_120][this._package - 1];
    const L$8: number = prices.price_per_meter[120_180][this._package - 1];
    const L$9: number = prices.price_per_meter[180_220][this._package - 1];
    const L$10: number = prices.price_per_meter[220_300][this._package - 1]
    const L$11: number = prices.price_per_meter[300_450][this._package - 1];

    const $L$12 = prices.oneStoryHouseCoefficient;
    const $L$13 = prices.twoStoryHouseCoefficient;
    const $L$14 = prices.oneFloorElementsCoefficient;
    const $L$15 = prices.complexRoofCoefficient;
    const $L$16 = prices.complexWallsCoefficient;

    return math.round(
      ((($E19<80?L$6:($E19<120?L$6-($E19-80)*(L$6-L$7)/40:($E19<180?L$7-($E19-120)*(L$7-L$8)/60:($E19<220?L$8-($E19-180)*(L$8-L$9)/40:($E19<300?L$9-($E19-220)*(L$9-L$10)/80:($E19<450?L$10-($E19-300)*(L$9-L$10)/150:L$11)))))))*($E19+$J19*($L$16-1)+$H19*($L$14-1))+$G19*$L$4+$F19*$L$3)*($I19===0?1:$L$15)*($B19==1?$L$12:($B19==2?$L$13:1))
    , 3);
  }
}
