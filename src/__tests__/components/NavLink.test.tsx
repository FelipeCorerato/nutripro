import { render, screen } from '@testing-library/react';
import { NavLink } from '@/app/components/NavLink';
import React from 'react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const { usePathname } = require('next/navigation');

describe('Componente NavLink', () => {
  it('deve renderizar o texto do link', () => {
    usePathname.mockReturnValue('/rota');
    render(<NavLink href="/rota">Meu Link</NavLink>);
    expect(screen.getByText('Meu Link')).toBeInTheDocument();
  });

  it('deve aplicar classe ativa quando a rota for igual ao href', () => {
    usePathname.mockReturnValue('/ativo');
    render(<NavLink href="/ativo">Ativo</NavLink>);
    const link = screen.getByText('Ativo');
    expect(link.className).toMatch(/font-bold/);
    expect(link.className).toMatch(/after:bg-green-500/);
  });

  it('deve aplicar classe inativa quando a rota for diferente do href', () => {
    usePathname.mockReturnValue('/outra');
    render(<NavLink href="/inativo">Inativo</NavLink>);
    const link = screen.getByText('Inativo');
    expect(link.className).toMatch(/text-gray-400/);
  });
}); 