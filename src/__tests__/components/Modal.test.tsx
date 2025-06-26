import { render, screen } from '@testing-library/react';
import { Modal, openModal, closeModal } from '@/app/components/Modal';
import React from 'react';

describe('Componente Modal', () => {
  it('deve renderizar os filhos corretamente', () => {
    render(<Modal id="modal-teste"><span data-testid="conteudo">Conteúdo do Modal</span></Modal>);
    expect(screen.getByTestId('conteudo')).toBeInTheDocument();
  });

  it('deve chamar showModal ao abrir', () => {
    window['modal-teste'] = { showModal: jest.fn() };
    openModal({ id: 'modal-teste' });
    expect(window['modal-teste'].showModal).toHaveBeenCalled();
  });

  it('deve chamar close ao fechar', () => {
    window['modal-teste'] = { close: jest.fn() };
    closeModal({ id: 'modal-teste' });
    expect(window['modal-teste'].close).toHaveBeenCalled();
  });
}); 