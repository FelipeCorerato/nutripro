import { removeUnity, toCalories, toGrams } from '@/utils/unities';

describe('Funções de Unidades', () => {
  describe('toGrams', () => {
    it('deve converter número para string com unidade "g"', () => {
      expect(toGrams(100)).toBe('100g');
      expect(toGrams(0)).toBe('0g');
      expect(toGrams(25.5)).toBe('25.5g');
    });
  });

  describe('toCalories', () => {
    it('deve converter número para string com unidade "cal"', () => {
      expect(toCalories(200)).toBe('200cal');
      expect(toCalories(0)).toBe('0cal');
      expect(toCalories(150.7)).toBe('150.7cal');
    });
  });

  describe('removeUnity', () => {
    it('deve remover unidade "g" e retornar número', () => {
      expect(removeUnity('100g')).toBe(100);
      expect(removeUnity('25.5g')).toBe(25.5);
    });

    it('deve remover unidade "cal" e retornar número', () => {
      expect(removeUnity('200cal')).toBe(200);
      expect(removeUnity('150.7cal')).toBe(150.7);
    });

    it('deve remover unidade "k" e retornar número', () => {
      expect(removeUnity('2k')).toBe(2);
    });

    it('deve substituir vírgula por ponto', () => {
      expect(removeUnity('25,5g')).toBe(25.5);
      expect(removeUnity('100,0cal')).toBe(100.0);
    });

    it('deve lidar com strings sem unidades', () => {
      expect(removeUnity('100')).toBe(100);
      expect(removeUnity('25,5')).toBe(25.5);
    });
  });
});
