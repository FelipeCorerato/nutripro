interface MacrosSectionProps {
  className?: string;
  macros: {
      alimento: string;
      quantidade: string;
      proteina: string;
      carboidrato: string;
      gordura: string;
      calorias: string;
  };
}

export const MacrosSection = ({ macros, className = "" }: MacrosSectionProps) => {
  return(
    <section className={className}>
      <label>Macros </label>
      <span>Proteínas: {macros.proteina} </span>
      <span>Carboidratos: {macros.carboidrato} </span>
      <span>Gorduras: {macros.gordura} </span>
      <span>Calorias: {macros.calorias} </span>
    </section>
  );
}