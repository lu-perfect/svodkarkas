import type { Tag } from "./Tag";
import type { FloorsVariant } from "utils/price.builder";
import {Slides} from "../../app/projects/pages/project/sections/Packages";
import {Property} from "csstype";

declare global {
  type Project = {
    id: string | number;

    title: string;

    covers: number;
    facades: number;

    floors: FloorsVariant;

    storeys?: FloorsVariant;

    isPopular?: boolean;
    isSale?: boolean;

    area: {
      common: number;

      balcony: number;
      terrace: number;
    }

    complexWallsElement?: {
      area: number;
      variant: 'oriel'; // Эркер
    }
    oneFloorElement?: {
      area: number;
      variant?:
        'bath' | // Баня/Сауна
        'garage'; // Гараж
    }
    roof: {
      variant:
        'flat' | // Плоская крыша
        'hip'  | // Вальмовая крыша
        'gable'; // Двускатная крыша
      isComplex?: boolean;
    }

    tags?: Array<Tag>;
    style: ArchitecturalStyle;

    size: {
      x: number;
      y: number;
    }

    bedrooms: number;
    bathrooms: number;
  }

  type Slide = {
    title: string;
    url: string;
    objectFit?: Property.ObjectFit;
  };

  type ProjectViewDTO = Project & { prices: Array<number>, minPrice: string, terraceAndBalconyArea: string, slides: {
      covers: Array<Slide>,
      facades: Array<Slide>,
      plans: Array<Slide>,
    }
  };
}
export {}
