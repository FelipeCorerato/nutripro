import { render } from '@testing-library/react';
import LineChart from '@/app/components/LineChart';
import React from 'react';

jest.mock('tw-elements', () => ({
  initTE: jest.fn(),
  Chart: jest.fn().mockImplementation(() => ({ destroy: jest.fn() })),
}));

describe('Componente LineChart', () => {
  it('deve renderizar o canvas com o id correto', () => {
    render(<LineChart chartName="peso" />);
    const canvas = document.getElementById('line-chart-peso');
    expect(canvas).toBeInTheDocument();
    expect(canvas?.tagName).toBe('CANVAS');
  });

  it('deve aplicar a classe customizada', () => {
    render(<LineChart chartName="peso" className="minha-classe" />);
    const div = canvasParentWithClass('line-chart-peso');
    expect(div).toHaveClass('minha-classe');
  });
});

function canvasParentWithClass(id: string) {
  const canvas = document.getElementById(id);
  return canvas?.parentElement;
} 