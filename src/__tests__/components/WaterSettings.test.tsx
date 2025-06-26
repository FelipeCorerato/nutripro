import { render, screen, fireEvent } from '@testing-library/react';
import { WaterSettings } from '@/app/components/WaterSettings';
import React from 'react';

jest.mock('../../app/components/Modal', () => ({
  Modal: ({ id, children }: any) => <div data-testid={id}>{children}</div>,
  openModal: jest.fn(),
}));

describe('Componente WaterSettings', () => {
  it('deve renderizar o ícone de configurações', () => {
    const { container } = render(<WaterSettings />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('deve abrir o modal ao clicar no ícone', () => {
    const { openModal } = require('../../app/components/Modal');
    const { container } = render(<WaterSettings />);
    const svg = container.querySelector('svg');
    fireEvent.click(svg!);
    expect(openModal).toHaveBeenCalledWith({ id: 'water-settings-modal' });
  });

  it('deve renderizar os textos e campos do modal', () => {
    render(<WaterSettings />);
    expect(screen.getByText('Configurações do consumo de água')).toBeInTheDocument();
    expect(screen.getByText('A configuração recomendada é de 50ml por kg corporal. Nesse caso, utilizaremos seus dados para determinar a meta.')).toBeInTheDocument();
    expect(screen.getByText('Usar recomendação')).toBeInTheDocument();
    expect(screen.getByText('Mililitros')).toBeInTheDocument();
    expect(screen.getByDisplayValue('3000')).toBeInTheDocument();
  });
}); 