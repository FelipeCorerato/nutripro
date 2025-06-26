// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NutriAIContent } from '@/app/nutriai/components/NutriAIContent';
import React from 'react';

jest.mock('../../app/components/Modal', () => ({
  Modal: ({ id, children }: any) => <div data-testid={id}>{children}</div>,
  openModal: jest.fn(),
  closeModal: jest.fn(),
}));

jest.mock('../../app/components/CircularLoading', () => ({
  CircularLoading: () => <div data-testid="circular-loading">Loading...</div>,
}));

jest.mock('../../app/components/MacrosSection', () => ({
  MacrosSection: ({ macros }: any) => <div data-testid="macros">{macros?.alimento}</div>,
}));

jest.mock('../../services/chatgpt', () => ({
  sendChatMessage: jest.fn().mockResolvedValue({ response: {}, chatHistory: [] }),
  sendChatMessageV2: jest.fn().mockResolvedValue({ response: 'Detalhe', chatHistory: [] }),
}));

describe('Componente NutriAIContent', () => {
  it('deve renderizar o título, botão e texto de descrição', () => {
    render(<NutriAIContent />);
    expect(screen.getByText('Gerar cardápio do dia')).toBeInTheDocument();
    const botoes = screen.getAllByText(/Gerar cardápio|Gerar/);
    expect(botoes.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/Deixe a tecnologia trabalhar a seu favor/)).toBeInTheDocument();
  });

  it('deve renderizar as macros do dia', () => {
    render(<NutriAIContent />);
    expect(screen.getByText(/Macros do dia/)).toBeInTheDocument();
    expect(screen.getByText(/Proteínas:/)).toBeInTheDocument();
    expect(screen.getByText(/Carboidratos:/)).toBeInTheDocument();
    expect(screen.getByText(/Gorduras:/)).toBeInTheDocument();
    expect(screen.getByText(/Calorias:/)).toBeInTheDocument();
  });

  it('deve renderizar as refeições do template inicial', () => {
    render(<NutriAIContent />);
    expect(screen.getAllByText(/Café da manhã|Almoço|Jantar|Lanche/).length).toBeGreaterThan(0);
  });
}); 