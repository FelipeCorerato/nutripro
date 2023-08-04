import { Navbar } from "../Navbar";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Page = ({ children, className = "" }: Props) => {
  const cn = `mobile:px-16 tablet:px-16 px-24 pb-8 mt-10 ${className}`;
  return (
    <main className="flex flex-col pb-24 h-[100vh]">
      <Navbar />

      <span className={cn}>
        {children}
      </span>
    </main>
  );
}