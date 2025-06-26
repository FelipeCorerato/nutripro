interface InputProps {
  readonly value?: string | null;
  readonly readonly?: boolean;
  readonly disabled?: boolean;
  readonly label?: string;
  readonly icon?: React.ReactNode;
  readonly className?: string;
  readonly type?: React.HTMLInputTypeAttribute;
  readonly children?: React.ReactNode;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ value, readonly, label, icon, disabled, className, type, children, onChange }: InputProps) {
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
        onChange={onChange}
      />

      {children && (
        <label className="label">
          {children}
        </label>
      )}
    </div>
  );
}