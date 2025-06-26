import { render, screen } from '@testing-library/react';
import { CircularLoading } from '@/app/components/CircularLoading';
import React from 'react';

describe('Componente CircularLoading', () => {
  it('deve renderizar com a cor padrão', () => {
    render(<CircularLoading />);
    const output = screen.getByRole('status', { hidden: true });
    expect(output).toHaveClass('text-green-500');
    expect(output).toHaveClass('animate-spin');
  });

  it('deve renderizar com cor customizada', () => {
    render(<CircularLoading color="text-blue-300" />);
    const output = screen.getByRole('status', { hidden: true });
    expect(output).toHaveClass('text-blue-300');
  });

  it('deve conter o texto Loading... para acessibilidade', () => {
    render(<CircularLoading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
}); 