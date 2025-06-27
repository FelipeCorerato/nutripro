// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PlansSection } from '@/app/showcase/components/PlansSection';
import React from 'react';
import userEvent from '@testing-library/user-event';

jest.mock('../../app/components/Modal', () => ({
  Modal: ({ id, children }: any) => <div data-testid={id}>{children}</div>,
  openModal: jest.fn(),
}));

jest.mock('../../app/components/MacrosSection', () => ({
  MacrosSection: ({ macros }: any) => <div data-testid="macros">{macros.alimento}</div>,
}));

describe('Componente PlansSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o título, descrição e boxes de planos', () => {
    render(<PlansSection />);
    expect(screen.getByText('Planos de alimentação')).toBeInTheDocument();
    expect(screen.getByText(/Aqui você encontrará um conjunto de planos/)).toBeInTheDocument();
    expect(screen.getByText('Pequenos preços')).toBeInTheDocument();
    expect(screen.getByText('Low-carb')).toBeInTheDocument();
    expect(screen.getByText('Low-sugar')).toBeInTheDocument();
    expect(screen.getByText('Vegetariano')).toBeInTheDocument();
    expect(screen.getByText('Vegano')).toBeInTheDocument();
    expect(screen.getByText('Diabetes')).toBeInTheDocument();
    expect(screen.getByText('Controle de colesterol')).toBeInTheDocument();
  });

  const planos = [
    'Pequenos preços',
    'Low-carb',
    'Low-sugar',
    'Vegetariano',
    'Vegano',
    'Diabetes',
    'Controle de colesterol',
  ];

  it('deve abrir o modal e renderizar o título correto para cada plano', () => {
    render(<PlansSection />);
    planos.forEach((plano) => {
      userEvent.click(screen.getByText(plano));
      expect(screen.getByTestId('plains-modal')).toBeInTheDocument();
      expect(screen.getByText(plano)).toBeInTheDocument();
    });
  });

  it('deve renderizar refeições e alimentos no modal ao abrir um plano', () => {
    render(<PlansSection />);
    userEvent.click(screen.getByText('Pequenos preços'));
    expect(screen.getByText('Café da Manhã')).toBeInTheDocument();
    expect(screen.getByText('Ovo - 3 unidades')).toBeInTheDocument();
    expect(screen.getByText('Banana - 1 unidade')).toBeInTheDocument();
    const macros = screen.getAllByTestId('macros');
    expect(macros.length).toBeGreaterThan(0);
  });

  it('deve renderizar MacrosSection para cada alimento', () => {
    render(<PlansSection />);
    userEvent.click(screen.getByText('Pequenos preços'));
    // Deve haver vários elementos de macros (um para cada alimento)
    const macros = screen.getAllByTestId('macros');
    expect(macros.length).toBeGreaterThan(1);
  });

  it('deve permitir fechar o modal ao clicar no botão de fechar', () => {
    render(<PlansSection />);
    userEvent.click(screen.getByText('Low-carb'));
    const closeBtn = screen.getByRole('button');
    userEvent.click(closeBtn);
    expect(closeBtn).toBeInTheDocument();
  });
}); 