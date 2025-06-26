// @jest-environment jsdom
import type { Merge } from '@/utils/typescript';

describe('Tipo utilitário Merge', () => {
  it('deve mesclar dois tipos corretamente', () => {
    type A = { a: string; b: number };
    type B = { b: boolean; c: string };
    type Result = Merge<A, B>;
    // O tipo resultante deve ter:
    // a: string (de A)
    // b: boolean (de B, sobrescreve A)
    // c: string (de B)
    const value: Result = { a: 'x', b: true, c: 'y' };
    expect(value).toEqual({ a: 'x', b: true, c: 'y' });
  });

  it('deve funcionar com tipos vazios', () => {
    type A = {};
    type B = { x: number };
    type Result = Merge<A, B>;
    const value: Result = { x: 1 };
    expect(value).toEqual({ x: 1 });
  });

  it('deve funcionar quando B é vazio', () => {
    type A = { a: number };
    type B = {};
    type Result = Merge<A, B>;
    const value: Result = { a: 2 };
    expect(value).toEqual({ a: 2 });
  });
}); 