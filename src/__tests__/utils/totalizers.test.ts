import { enhanceWithTotalizers } from '@/utils/totalizers';
import { MealsResponse } from '@/types/types';

describe('Função enhanceWithTotalizers', () => {
  it('deve calcular totalizadores corretamente para uma refeição simples', () => {
    const mockMeals: MealsResponse = {
      refeicoes: [
        {
          refeicao: 'Café da Manhã',
          alimentos: [
            {
              alimento: 'Ovo',
              quantidade: '2 unidades',
              proteina: '12g',
              carboidrato: '1g',
              gordura: '10g',
              calorias: '140cal'
            },
            {
              alimento: 'Pão',
              quantidade: '2 fatias',
              proteina: '6g',
              carboidrato: '30g',
              gordura: '2g',
              calorias: '150cal'
            }
          ]
        }
      ]
    };

    const result = enhanceWithTotalizers(mockMeals);

    expect(result.totalizers).toEqual({
      calorias: 290,
      carboidrato: 31,
      gordura: 12,
      proteina: 18
    });
  });

  it('deve calcular totalizadores para múltiplas refeições', () => {
    const mockMeals: MealsResponse = {
      refeicoes: [
        {
          refeicao: 'Café da Manhã',
          alimentos: [
            {
              alimento: 'Ovo',
              quantidade: '2 unidades',
              proteina: '12g',
              carboidrato: '1g',
              gordura: '10g',
              calorias: '140cal'
            }
          ]
        },
        {
          refeicao: 'Almoço',
          alimentos: [
            {
              alimento: 'Frango',
              quantidade: '100g',
              proteina: '25g',
              carboidrato: '0g',
              gordura: '5g',
              calorias: '150cal'
            }
          ]
        }
      ]
    };

    const result = enhanceWithTotalizers(mockMeals);

    expect(result.totalizers).toEqual({
      calorias: 290,
      carboidrato: 1,
      gordura: 15,
      proteina: 37
    });
  });

  it('deve lidar com valores em vírgula', () => {
    const mockMeals: MealsResponse = {
      refeicoes: [
        {
          refeicao: 'Lanche',
          alimentos: [
            {
              alimento: 'Banana',
              quantidade: '1 unidade',
              proteina: '1,2g',
              carboidrato: '27,5g',
              gordura: '0,3g',
              calorias: '105,8cal'
            }
          ]
        }
      ]
    };

    const result = enhanceWithTotalizers(mockMeals);

    expect(result.totalizers).toEqual({
      calorias: 105.8,
      carboidrato: 27.5,
      gordura: 0.3,
      proteina: 1.2
    });
  });

  it('deve retornar zero para refeições vazias', () => {
    const mockMeals: MealsResponse = {
      refeicoes: []
    };

    const result = enhanceWithTotalizers(mockMeals);

    expect(result.totalizers).toEqual({
      calorias: 0,
      carboidrato: 0,
      gordura: 0,
      proteina: 0
    });
  });

  it('deve preservar a estrutura original dos dados', () => {
    const mockMeals: MealsResponse = {
      refeicoes: [
        {
          refeicao: 'Café da Manhã',
          alimentos: [
            {
              alimento: 'Ovo',
              quantidade: '2 unidades',
              proteina: '12g',
              carboidrato: '1g',
              gordura: '10g',
              calorias: '140cal'
            }
          ]
        }
      ]
    };

    const result = enhanceWithTotalizers(mockMeals);

    expect(result.refeicoes).toEqual(mockMeals.refeicoes);
    expect(result).toHaveProperty('totalizers');
  });
});
