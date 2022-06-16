import type { Tag } from "./Tag";
import type { FloorsVariant } from "utils/price.builder";

declare global {
  type Project = {
    id: string | number;

    title: string;

    covers: number;
    facades: number;

    floors: FloorsVariant;

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
}
export {}
