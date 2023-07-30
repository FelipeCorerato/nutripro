import Link, { LinkProps } from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FiX } from 'react-icons/fi';

interface NavProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ children, className = "", ...props }: NavProps) => {
  const pathname = usePathname();

  const defaultClassName = "leading-20 inline-block relative h-20 px-2 hover:text-black";
  const activeClassName = "font-bold after:content-[''] after:h-[3px] after:w-[100%] after:absolute after:bottom-[1px] after:left-0 after:bg-green-500 after:rounded-t-[3px]";

  const cn = [
    className,
    defaultClassName,
    pathname === props.href ? activeClassName : 'text-gray-400'
  ].join(" ");

  return(
    <Link className={cn} {...props}>
      {children}
    </Link>
  );
}

const SignInButton = () => {
  // const { data: session } = useSession();
  
  return false ? (
    <button 
      type="button" 
      className="h-12 flex justify-center ml-auto items-center"
      // onClick={() => signOut()}
    >
      <FaGoogle color="#22c55e" /> 
      {/* <span>{session?.user?.name}</span> */}
      <FiX color="#737380" className="ml-4" />
    </button>
  ):(
    <button 
      type="button" 
      className="h-12 flex justify-center ml-auto items-center"
      // onClick={() => signIn('google')}
    >
      <FaGoogle color="#3e3e3e" />
      <span className='ml-4'>Entrar com Google</span>
    </button>
  );
}

export const Navbar = () => {
  return(
    <header className="h-20 border-b border-solid border-slate-400">
      <div className='h-20 flex items-center px-8 max-w-6xl m-auto'>
        <Link href='/' className='font-extrabold text-2xl hover:text-3xl transition-all'>NutriPro</Link>

        <nav className='h-20 ml-20'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/showcase' className="ml-8">Showcase</NavLink>
          <NavLink href='/nutriai' className="ml-8">NutriAI</NavLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
