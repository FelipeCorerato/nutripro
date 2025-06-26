// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlansSection } from '@/app/showcase/components/PlansSection';
import React from 'react';

jest.mock('../../app/components/Modal', () => ({
  Modal: ({ id, children }: any) => <div data-testid={id}>{children}</div>,
  openModal: jest.fn(),
}));

jest.mock('../../app/components/MacrosSection', () => ({
  MacrosSection: ({ macros }: any) => <div data-testid="macros">{macros?.alimento}</div>,
}));

describe('Componente PlansSection', () => {
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

  it('deve abrir o modal ao clicar em um plano', () => {
    const { getByText, getByTestId } = screen;
    render(<PlansSection />);
    fireEvent.click(getByText('Low-carb'));
    expect(getByTestId('plains-modal')).toBeInTheDocument();
  });
}); 