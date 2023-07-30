import { Merge } from "@/utils/typescript";

export interface MealsResponse {
  refeicoes: {
    refeicao: string;
    alimentos: {
      alimento: string;
      quantidade: string;
      proteina: string;
      carboidrato: string;
      gordura: string;
      calorias: string;
    }[];
  }[];
}

export type MealsResponseEnhancedWithTotalizers = Merge<MealsResponse, {
  totalizers: {
    calorias: number;
    carboidrato: number;
    gordura: number;
    proteina: number;
  }
}>;