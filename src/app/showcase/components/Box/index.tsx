interface BoxProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
}

export const Box = ({ title, onClick, className = "" }: BoxProps) => {
  const cn = `shadow flex border border-solid border-slate-200 p-4 rounded-md items-center justify-center cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-100 duration-200 ${className}`;
  return(
    <div onClick={onClick} className={cn}>
      <span className="font-poppins text-center">{title}</span>
    </div>
  );
}
