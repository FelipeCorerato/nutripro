// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WaterSection } from '@/app/diary/components/WaterSection';
import React from 'react';

jest.mock('../../app/components/WaterSettings', () => ({
  WaterSettings: () => <div data-testid="water-settings">WaterSettings</div>,
}));

const MockBarChart = () => <div data-testid="bar-chart">BarChart</div>;
MockBarChart.displayName = 'MockBarChart';
jest.mock('../../app/components/BarChart', () => MockBarChart);

jest.mock('../../app/components/CircularLoading', () => ({ CircularLoading: () => <div data-testid="loading" /> }));

// eslint-disable-next-line @next/next/no-img-element
jest.mock('next/image', () => {
  const Img = (props: any) => <img {...props} alt={props.alt || ''} />;
  Img.displayName = 'NextImageMock';
  return Img;
});

jest.mock('next/dynamic', () => (importFn: any, opts: any) => {
  const Comp = () => <div data-testid="bar-chart">BarChart</div>;
  Comp.displayName = 'DynamicBarChart';
  return Comp;
});

describe('Componente WaterSection', () => {
  it('deve renderizar o título e o WaterSettings', () => {
    render(<WaterSection />);
    expect(screen.getByText('Consumo de água')).toBeInTheDocument();
    expect(screen.getByTestId('water-settings')).toBeInTheDocument();
  });

  it('deve renderizar o texto de descrição', () => {
    render(<WaterSection />);
    expect(screen.getByText(/Acompanhe sua hidratação diária de forma simples/)).toBeInTheDocument();
  });

  it('deve renderizar o gráfico e a imagem', () => {
    render(<WaterSection />);
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    expect(screen.getByAltText('water-glass')).toBeInTheDocument();
  });

  it('deve renderizar os valores de consumido e meta', () => {
    render(<WaterSection />);
    expect(screen.getByText('Consumido')).toBeInTheDocument();
    expect(screen.getByText('1000ml')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
    expect(screen.getByText('3000ml')).toBeInTheDocument();
  });

  it('deve renderizar os botões de incremento e decremento', () => {
    render(<WaterSection />);
    expect(screen.getAllByText('-')[0]).toBeInTheDocument();
    expect(screen.getAllByText('+')[0]).toBeInTheDocument();
  });
}); 