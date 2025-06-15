import { render, screen, fireEvent } from '@testing-library/react';
import { Box } from '@/app/showcase/components/Box';

describe('Componente Box', () => {
  it('deve renderizar o título corretamente', () => {
    render(<Box title="Teste de Título" />);
    
    expect(screen.getByText('Teste de Título')).toBeInTheDocument();
  });

  it('deve aplicar classes CSS padrão', () => {
    render(<Box title="Teste" />);
    
    const boxElement = screen.getByText('Teste').parentElement;
    expect(boxElement).toHaveClass('shadow', 'flex', 'border', 'cursor-pointer');
  });

  it('deve aplicar classes CSS customizadas', () => {
    const customClass = 'minha-classe-personalizada';
    render(<Box title="Teste" className={customClass} />);
    
    const boxElement = screen.getByText('Teste').parentElement;
    expect(boxElement).toHaveClass(customClass);
  });

  it('deve chamar função onClick quando clicado', () => {
    const mockOnClick = jest.fn();
    render(<Box title="Teste" onClick={mockOnClick} />);
    
    const boxElement = screen.getByText('Teste').parentElement;
    if (boxElement) {
      fireEvent.click(boxElement);
    }
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('deve funcionar sem função onClick', () => {
    expect(() => {
      render(<Box title="Teste" />);
    }).not.toThrow();
    
    const boxElement = screen.getByText('Teste').parentElement;
    expect(() => {
      if (boxElement) {
        fireEvent.click(boxElement);
      }
    }).not.toThrow();
  });

  it('deve ter o texto centralizado', () => {
    render(<Box title="Teste" />);
    
    const spanElement = screen.getByText('Teste');
    expect(spanElement).toHaveClass('text-center');
  });
});
