// @jest-environment jsdom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NutriAIContent } from '@/app/nutriai/components/NutriAIContent';
import React from 'react';
import userEvent from '@testing-library/user-event';

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
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('deve chamar sendChatMessage ao clicar em Gerar cardápio', async () => {
    const { sendChatMessage } = require('../../services/chatgpt');
    sendChatMessage.mockResolvedValueOnce({
      response: {
        refeicoes: [
          {
            refeicao: 'Almoço',
            alimentos: [
              { alimento: 'Arroz', quantidade: '100g', proteina: '2g', carboidrato: '20g', gordura: '0g', calorias: '90cal' }
            ]
          }
        ]
      },
      chatHistory: []
    });
    render(<NutriAIContent />);
    await userEvent.click(screen.getByText('Gerar cardápio'));
    expect(sendChatMessage).toHaveBeenCalled();
  });

  it('deve chamar sendChatMessage ao clicar em Trocar', async () => {
    const { sendChatMessage } = require('../../services/chatgpt');
    sendChatMessage.mockResolvedValueOnce({
      response: {
        alimento: 'Feijão', quantidade: '50g', proteina: '3g', carboidrato: '10g', gordura: '0g', calorias: '40cal'
      },
      chatHistory: []
    });
    render(<NutriAIContent />);
    // Encontrar o primeiro botão Trocar
    const trocarBtn = screen.getAllByText('Trocar')[0];
    await userEvent.click(trocarBtn);
    expect(sendChatMessage).toHaveBeenCalled();
  });

  it('deve chamar sendChatMessageV2 e abrir modal ao clicar em Detalhar', async () => {
    const { sendChatMessageV2 } = require('../../services/chatgpt');
    render(<NutriAIContent />);
    const detalharBtn = screen.getAllByText('Detalhar')[0];
    await userEvent.click(detalharBtn);
    expect(sendChatMessageV2).toHaveBeenCalled();
    expect(screen.getByTestId('details-modal')).toBeInTheDocument();
  });

  it('deve fechar o modal de loading após resposta', async () => {
    const { sendChatMessage } = require('../../services/chatgpt');
    sendChatMessage.mockResolvedValueOnce({
      response: {
        refeicoes: [
          {
            refeicao: 'Almoço',
            alimentos: [
              { alimento: 'Arroz', quantidade: '100g', proteina: '2g', carboidrato: '20g', gordura: '0g', calorias: '90cal' }
            ]
          }
        ]
      },
      chatHistory: []
    });
    const { openModal, closeModal } = require('../../app/components/Modal');
    render(<NutriAIContent />);
    await userEvent.click(screen.getByText('Gerar cardápio'));
    expect(openModal).toHaveBeenCalledWith({ id: 'loading-modal' });
    expect(closeModal).toHaveBeenCalledWith({ id: 'loading-modal' });
  });

  it('deve lidar com erro ao chamar sendChatMessage', async () => {
    const { sendChatMessage } = require('../../services/chatgpt');
    sendChatMessage.mockRejectedValueOnce(new Error('Erro GPT'));
    const { openModal, closeModal } = require('../../app/components/Modal');
    render(<NutriAIContent />);
    await userEvent.click(screen.getByText('Gerar cardápio'));
    expect(openModal).toHaveBeenCalledWith({ id: 'loading-modal' });
    // O closeModal deve ser chamado mesmo em erro
    expect(closeModal).toHaveBeenCalledWith({ id: 'loading-modal' });
  });
}); 