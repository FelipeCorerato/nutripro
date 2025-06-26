// @jest-environment node

import { generateDayMenuMessageContent, changeItemFromMeal } from '@/utils/prompt';

describe('generateDayMenuMessageContent', () => {
  it('should contain instructions to create a diet', () => {
    expect(generateDayMenuMessageContent).toContain('Monte uma dieta para');
    expect(generateDayMenuMessageContent).toContain('A resposta deve ser dada neste formato (JSON)');
    expect(generateDayMenuMessageContent).toContain('{ refeicoes: [{refeicao: ,alimentos: [{alimento: ,quantidade: ,proteina: ,carboidrato: ,gordura: ,calorias: }]}]}');
  });
});

describe('changeItemFromMeal', () => {
  it('should generate a food swap message with correct parameters', () => {
    const food = 'Rice';
    const meal = 'Lunch';
    const observation = 'Lactose free';
    const result = changeItemFromMeal(food, meal, observation);
    expect(result).toContain(`Troque o item ${food} da refeição ${meal}`);
    expect(result).toContain('A resposta deve ser apenas esse alimento neste formato (JSON): {alimento: ,quantidade: ,proteina: ,carboidrato: ,gordura: ,calorias: }');
    expect(result).toContain(observation);
  });
}); 