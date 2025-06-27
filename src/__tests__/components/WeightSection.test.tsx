// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WeightSection } from '@/app/diary/components/WeightSection';
import React from 'react';
import { act } from 'react-dom/test-utils';

const MockLineChart = () => <div data-testid="line-chart">Gráfico</div>;
MockLineChart.displayName = 'MockLineChart';
jest.mock('../../app/components/LineChart', () => MockLineChart);
jest.mock('../../app/components/CircularLoading', () => ({ CircularLoading: () => <div data-testid="loading" /> }));

describe('Componente WeightSection', () => {
  it('deve renderizar o título, descrição e cards de peso', async () => {
    await act(async () => {
      render(<WeightSection />);
    });
    expect(screen.getByText('Histórico de peso')).toBeInTheDocument();
    expect(screen.getByText(/Acompanhe suas mudanças ao longo do tempo/)).toBeInTheDocument();
    expect(screen.getByText('62.3kg')).toBeInTheDocument();
    expect(screen.getByText('Peso atual (2 ago.)')).toBeInTheDocument();
    expect(screen.getByText('70kg')).toBeInTheDocument();
    expect(screen.getByText('Meta (2 dez.)')).toBeInTheDocument();
    expect(screen.getByText('20.24')).toBeInTheDocument();
    expect(screen.getByText('IMC calculado')).toBeInTheDocument();
    expect(screen.getByText('Classificação')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
  });

  it('deve renderizar o gráfico de histórico de peso', async () => {
    await act(async () => {
      render(<WeightSection />);
    });
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });
}); 