import { render, screen, fireEvent } from '@testing-library/react';
import { AccountButton } from '@/app/components/AccountButton';
import React from 'react';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('Componente AccountButton', () => {
  it('deve renderizar o nome e imagem do usuário quando logado', () => {
    render(<AccountButton session={{ user: { name: 'Felipe', image: '/img.png' } } as any} />);
    expect(screen.getByText('Felipe')).toBeInTheDocument();
    expect(screen.getByAltText('profile-picture')).toBeInTheDocument();
  });

  it('deve renderizar o botão de login quando deslogado', () => {
    render(<AccountButton session={null} />);
    expect(screen.getByText('Entrar com Google')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('deve chamar signIn ao clicar no botão de login', () => {
    const { signIn } = require('next-auth/react');
    render(<AccountButton session={null} />);
    fireEvent.click(screen.getByRole('button'));
    expect(signIn).toHaveBeenCalledWith('google');
  });
}); 