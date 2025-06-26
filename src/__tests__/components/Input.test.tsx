import { render, screen } from '@testing-library/react';
import { Input } from '@/app/components/Input';
import React from 'react';

describe('Componente Input', () => {
  it('deve renderizar o label corretamente', () => {
    render(<Input label="Nome" readonly />);
    expect(screen.getByText('Nome')).toBeInTheDocument();
  });

  it('deve renderizar o ícone se fornecido', () => {
    render(<Input icon={<span data-testid="icon">Icone</span>} readonly />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('deve renderizar o valor corretamente', () => {
    render(<Input value="teste" onChange={() => {}} />);
    expect(screen.getByDisplayValue('teste')).toBeInTheDocument();
  });

  it('deve aplicar o atributo readonly', () => {
    render(<Input readonly value="apenas leitura" />);
    expect(screen.getByDisplayValue('apenas leitura')).toHaveAttribute('readonly');
  });

  it('deve aplicar o atributo disabled', () => {
    render(<Input disabled value="desabilitado" />);
    expect(screen.getByDisplayValue('desabilitado')).toBeDisabled();
  });

  it('deve aplicar o tipo do input', () => {
    render(<Input type="number" value="123" onChange={() => {}} />);
    expect(screen.getByDisplayValue('123')).toHaveAttribute('type', 'number');
  });

  it('deve aplicar a classe customizada', () => {
    render(<Input className="minha-classe" value="abc" onChange={() => {}} />);
    const input = screen.getByDisplayValue('abc');
    expect(input).toHaveClass('input'); // classe padrão
  });

  it('deve renderizar children dentro do label', () => {
    render(<Input value="1" onChange={() => {}}><span data-testid="child">Filho</span></Input>);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
}); 