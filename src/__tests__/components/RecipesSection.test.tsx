// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RecipesSection } from '@/app/showcase/components/RecipesSection';
import React from 'react';
import userEvent from '@testing-library/user-event';

// Mock do Modal e openModal para garantir abertura do modal nos testes
jest.mock('../../app/components/Modal', () => ({
  Modal: ({ id, children }: any) => <div data-testid={id}>{children}</div>,
  openModal: jest.fn(),
}));

describe('Componente RecipesSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o título, descrição e boxes de receitas', () => {
    render(<RecipesSection />);
    expect(screen.getByText('Receitas')).toBeInTheDocument();
    expect(screen.getByText(/Descubra uma coleção irresistível de Receitas/)).toBeInTheDocument();
    expect(screen.getByText('Incremente seu shake proteico')).toBeInTheDocument();
    expect(screen.getByText('Salada de Quinoa com Legumes')).toBeInTheDocument();
    expect(screen.getByText('Frango Grelhado com Batata Doce e Aspargos')).toBeInTheDocument();
    expect(screen.getByText('Omelete de Espinafre e Queijo Cottage')).toBeInTheDocument();
    expect(screen.getByText('Salmão Assado com Quinoa e Legumes no Vapor')).toBeInTheDocument();
    expect(screen.getByText('Smoothie Verde Detox')).toBeInTheDocument();
    expect(screen.getByText('Poke Bowl de Salmão')).toBeInTheDocument();
    expect(screen.getByText('Wrap de Frango com Vegetais')).toBeInTheDocument();
  });

  it('deve abrir o modal ao clicar em uma receita', () => {
    render(<RecipesSection />);
    userEvent.click(screen.getByText('Salada de Quinoa com Legumes'));
    expect(screen.getByTestId('recipes-modal')).toBeInTheDocument();
  });

  it('deve renderizar o título correto no modal para cada receita', () => {
    render(<RecipesSection />);
    const receitas = [
      'Incremente seu shake proteico',
      'Salada de Quinoa com Legumes',
      'Frango Grelhado com Batata Doce e Aspargos',
      'Omelete de Espinafre e Queijo Cottage',
      'Salmão Assado com Quinoa e Legumes no Vapor',
      'Smoothie Verde Detox',
      'Poke Bowl de Salmão',
      'Wrap de Frango com Vegetais',
    ];
    receitas.forEach((receita) => {
      userEvent.click(screen.getByText(receita));
      expect(screen.getByText(receita)).toBeInTheDocument();
    });
  });

  it('deve permitir fechar o modal ao clicar no botão de fechar', () => {
    render(<RecipesSection />);
    userEvent.click(screen.getByText('Omelete de Espinafre e Queijo Cottage'));
    const closeBtn = screen.getByRole('button');
    userEvent.click(closeBtn);
    expect(closeBtn).toBeInTheDocument();
  });
}); 