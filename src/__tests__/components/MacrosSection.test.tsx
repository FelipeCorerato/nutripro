import { render, screen } from '@testing-library/react';
import { MacrosSection } from '@/app/components/MacrosSection';
import React from 'react';

describe('Componente MacrosSection', () => {
  const macros = {
    alimento: 'Frango',
    quantidade: '100g',
    proteina: '25g',
    carboidrato: '0g',
    gordura: '5g',
    calorias: '150cal',
  };

  it('deve renderizar todos os valores de macros', () => {
    render(<MacrosSection macros={macros} />);
    expect(screen.getByText((content) => content.includes('Proteínas:') && content.includes('25g'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Carboidratos:') && content.includes('0g'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Gorduras:') && content.includes('5g'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Calorias:') && content.includes('150cal'))).toBeInTheDocument();
  });

  it('deve aplicar a classe customizada', () => {
    render(<MacrosSection macros={macros} className="minha-classe" />);
    const section = screen.getByText('Macros', { selector: 'label' }).closest('section');
    expect(section).toHaveClass('minha-classe');
  });
}); 