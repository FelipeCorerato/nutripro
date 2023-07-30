import { MealsResponse, MealsResponseEnhancedWithTotalizers } from "@/types/types";
import { isNumber } from "lodash";
import { removeUnity } from "./unities";

export const enhanceWithTotalizers = (meals: MealsResponse): MealsResponseEnhancedWithTotalizers => {
  const initialValue = {
    calorias: 0,
    carboidrato: 0,
    gordura: 0,
    proteina: 0,
  };

  const totalizersByMeal = meals.refeicoes.map((meal) => meal.alimentos.reduce((prev, curr) => ({
    calorias: prev.calorias + (isNumber(removeUnity(curr.calorias)) ? removeUnity(curr.calorias) : 0),
    carboidrato: prev.carboidrato + (isNumber(removeUnity(curr.carboidrato)) ? removeUnity(curr.carboidrato) : 0),
    gordura: prev.gordura + (isNumber(removeUnity(curr.gordura)) ? removeUnity(curr.gordura) : 0),
    proteina: prev.proteina + (isNumber(removeUnity(curr.proteina)) ? removeUnity(curr.proteina) : 0),
  }), initialValue));

  const totalizers = totalizersByMeal.reduce((prev, curr) => ({
    calorias: prev.calorias + curr.calorias,
    carboidrato: prev.carboidrato + curr.carboidrato,
    gordura: prev.gordura + curr.gordura,
    proteina: prev.proteina + curr.proteina,
  }));

  return {
    ...meals,
    totalizers,
  }
};