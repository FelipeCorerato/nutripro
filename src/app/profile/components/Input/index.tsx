interface InputProps {
  value?: string | null;
  readonly?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

export function Input({ value, readonly, label, icon, disabled }: InputProps) {
  return(
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {label && (
          <span className="label-text-alt">{label}</span>
        )}

        {icon && (
          <span className="label-text-alt">{icon}</span>
        )}
      </label>

      <input 
        type="email" 
        placeholder={label} 
        value={`${value}`} 
        readOnly={readonly} 
        disabled={disabled} 
        className="input input-sm input-bordered w-full max-w-xs" 
      />
    </div>
  );
}