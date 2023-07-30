export const toGrams = (n: number): string => `${n}g`;

export const toCalories = (n: number): string => `${n}cal`;

export const removeUnity = (value: string): number => {
  return Number(value.replace("g", "").replace("cal", "").replace("k", "").replace(",", "."));
};
