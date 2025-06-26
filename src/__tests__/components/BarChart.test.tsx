import { render, screen } from '@testing-library/react';
import BarChart from '@/app/components/BarChart';
import React from 'react';

jest.mock('tw-elements', () => ({
  initTE: jest.fn(),
  Chart: jest.fn().mockImplementation(() => ({ destroy: jest.fn() })),
}));

describe('Componente BarChart', () => {
  it('deve renderizar o canvas com o id correto', () => {
    render(<BarChart chartName="agua" />);
    const canvas = document.getElementById('bar-chart-agua');
    expect(canvas).toBeInTheDocument();
    expect(canvas?.tagName).toBe('CANVAS');
  });

  it('deve aplicar a classe customizada', () => {
    render(<BarChart chartName="agua" className="minha-classe" />);
    const div = canvasParentWithClass('bar-chart-agua');
    expect(div).toHaveClass('minha-classe');
  });
});

function canvasParentWithClass(id: string) {
  const canvas = document.getElementById(id);
  return canvas?.parentElement;
} 