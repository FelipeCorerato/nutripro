import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));

jest.mock('../../app/components/AccountButton', () => ({
  AccountButton: () => <div data-testid="account-btn">AccountButton</div>,
  AccountButtonLoading: () => <div>Loading...</div>,
}));

jest.mock('../../app/components/NavLink', () => ({
  NavLink: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

describe('Componente Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar links públicos e botão de conta quando deslogado', async () => {
    const { getServerSession } = require('next-auth');
    getServerSession.mockResolvedValue(null);
    const { Navbar } = await import('../../app/components/Navbar');
    render(await Navbar());
    expect(screen.getByText('NutriPro')).toBeInTheDocument();
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Showcase')[0]).toBeInTheDocument();
    expect(screen.getAllByText('NutriAI')[0]).toBeInTheDocument();
    expect(screen.getByTestId('account-btn')).toBeInTheDocument();
    expect(screen.queryByText('Meu diário')).not.toBeInTheDocument();
    expect(screen.queryByText('Perfil')).not.toBeInTheDocument();
  });

  it('deve renderizar links pessoais quando logado', async () => {
    const { getServerSession } = require('next-auth');
    getServerSession.mockResolvedValue({ user: { name: 'Felipe' } });
    const { Navbar } = await import('../../app/components/Navbar');
    render(await Navbar());
    expect(screen.getAllByText('Meu diário').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Perfil').length).toBeGreaterThanOrEqual(2);
  });
}); 