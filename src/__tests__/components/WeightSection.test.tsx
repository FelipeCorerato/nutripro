// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WeightSection } from '@/app/diary/components/WeightSection';
import React from 'react';

jest.mock('next/dynamic', () => (importFn: any, opts: any) => {
  const Comp = () => <div data-testid="line-chart">LineChart</div>;
  Comp.displayName = 'DynamicLineChart';
  return Comp;
});

describe('Componente WeightSection', () => {
  it('deve renderizar o título e o ícone de configurações', () => {
    const { container } = render(<WeightSection />);
    expect(screen.getByText('Histórico de peso')).toBeInTheDocument();
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('deve renderizar o texto de descrição', () => {
    render(<WeightSection />);
    expect(screen.getByText(/Acompanhe suas mudanças ao longo do tempo/)).toBeInTheDocument();
  });

  it('deve renderizar o gráfico', () => {
    render(<WeightSection />);
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

  it('deve renderizar os valores de peso atual, meta, IMC e classificação', () => {
    render(<WeightSection />);
    expect(screen.getByText('62.3kg')).toBeInTheDocument();
    expect(screen.getByText('Peso atual (2 ago.)')).toBeInTheDocument();
    expect(screen.getByText('70kg')).toBeInTheDocument();
    expect(screen.getByText('Meta (2 dez.)')).toBeInTheDocument();
    expect(screen.getByText('20.24')).toBeInTheDocument();
    expect(screen.getByText('IMC calculado')).toBeInTheDocument();
    expect(screen.getByText('Classificação')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
  });
}); 