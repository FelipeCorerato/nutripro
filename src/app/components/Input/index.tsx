interface InputProps {
  value?: string | null;
  readonly?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
}

export function Input({ value, readonly, label, icon, disabled, className, type, children }: InputProps) {
  return(
    <div className="form-control w-full max-w-lg">
      <label className="label">
        {label && (
          <span className="label-text-alt">{label}</span>
        )}

        {icon && (
          <span className="label-text-alt">{icon}</span>
        )}
      </label>

      <input 
        type={type}
        placeholder={label} 
        value={`${value}`} 
        readOnly={readonly} 
        disabled={disabled} 
        className="input input-sm input-bordered w-full max-w-lg" 
      />

      {children && (
        <label className="label">
          {children}
        </label>
      )}
    </div>
  );
}