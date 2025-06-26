import { render, screen } from '@testing-library/react';
import { Page } from '@/app/components/Page';
import React from 'react';

jest.mock('../../app/components/Navbar', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
}));

describe('Componente Page', () => {
  it('deve renderizar os filhos corretamente', () => {
    render(<Page><div>Conteúdo da página</div></Page>);
    expect(screen.getByText('Conteúdo da página')).toBeInTheDocument();
  });

  it('deve aplicar a classe customizada', () => {
    render(<Page className="minha-classe"><div>Teste</div></Page>);
    const span = screen.getByText('Teste').parentElement;
    expect(span).toHaveClass('minha-classe');
  });

  it('deve renderizar o Navbar', () => {
    render(<Page><div>Teste</div></Page>);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
}); 