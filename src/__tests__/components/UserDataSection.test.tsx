// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserDataSection } from '@/app/profile/components/UserDataSection';
import React from 'react';

// eslint-disable-next-line @next/next/no-img-element
jest.mock('next/image', () => {
  const Img = (props: any) => <img {...props} alt={props.alt || ''} />;
  Img.displayName = 'NextImageMock';
  return Img;
});
jest.mock('next-auth/react', () => ({ signOut: jest.fn() }));

describe('Componente UserDataSection', () => {
  const userData = {
    name: 'Felipe',
    email: 'felipe@email.com',
    image: '/img.png',
  };

  it('deve renderizar o nome e a imagem do usuário', () => {
    render(<UserDataSection userData={userData} />);
    expect(screen.getByText('Felipe')).toBeInTheDocument();
    expect(screen.getByAltText('profile-picture')).toBeInTheDocument();
  });

  it('deve renderizar os campos de input', () => {
    render(<UserDataSection userData={userData} />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Altura')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Peso')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Data de nascimento')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Gênero')).toBeInTheDocument();
  });

  it('deve renderizar o ícone do Google no campo de email', () => {
    render(<UserDataSection userData={userData} />);
    const emailInput = screen.getByPlaceholderText('Email');
    const icon = emailInput.parentElement?.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('deve renderizar o botão de deslogar e chamar signOut ao clicar', () => {
    const { signOut } = require('next-auth/react');
    render(<UserDataSection userData={userData} />);
    const btn = screen.getByText('Deslogar');
    fireEvent.click(btn);
    expect(signOut).toHaveBeenCalled();
  });
}); 