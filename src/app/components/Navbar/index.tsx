import Link from 'next/link';
import { NavLink } from '../NavLink';
import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { AccountButton, AccountButtonLoading } from '../AccountButton';

export async function Navbar() {
  const session = await getServerSession();
  const shouldSeePersonalTabs = session && session.user;

  return(
    <header className="h-20 border-b border-solid border-slate-300 shadow">
      <div className='h-20 flex items-center px-8 max-w-6xl m-auto'>
        <Link href='/' className='font-extrabold text-2xl hover:text-3xl transition-all'>NutriPro</Link>

        <nav className='h-20 ml-20'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/showcase' className="ml-8">Showcase</NavLink>
          <NavLink href='/nutriai' className="ml-8 indicator">
            <span className="indicator-item badge bottom-10 top-auto font-normal">Beta</span>
            NutriAI
          </NavLink>

          {shouldSeePersonalTabs && (
            <>
              <NavLink href='/diary' className="ml-8">Meu diário</NavLink>
              <NavLink href='/profile' className="ml-8">Perfil</NavLink>
            </>
          )}
        </nav>

        <Suspense fallback={<AccountButtonLoading />}>
          <AccountButton session={session} />
        </Suspense>
      </div>
    </header>
  );
}
