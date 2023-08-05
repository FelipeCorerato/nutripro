import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaBars } from 'react-icons/fa';

import { AccountButton, AccountButtonLoading } from '../AccountButton';
import { NavLink } from '../NavLink';

export async function Navbar() {
  const session = await getServerSession();
  const shouldSeePersonalTabs = session && session.user;

  return(
    <header className="h-20 border-b border-solid border-slate-300 shadow">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className='h-20 flex items-center px-8 max-w-6xl m-auto mobile:px-2 tablet:px-2'>
        <div className="flex-none lg:hidden mr-2">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <FaBars color='#3e3e3e' size="20" />
          </label>
        </div>

        <Link href='/' className='font-extrabold text-2xl hover:text-3xl transition-all'>NutriPro</Link>

        <nav className='h-20 ml-20 mobile:hidden tablet:hidden'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/showcase' className="ml-8">Showcase</NavLink>
          <NavLink href='/nutriai' className="ml-8">
            <div className='indicator px-2'>
              <span className="indicator-item badge bottom-10 top-auto font-normal">Beta</span>
              <span>NutriAI</span>
            </div>
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

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />

        <nav className='menu p-4 w-96 h-full bg-base-200 mobile:w-2/3 tablet:w-2/3'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/showcase'>Showcase</NavLink>
          <NavLink href='/nutriai'>
            <div className='indicator pr-2'>
              <span className="indicator-item badge bottom-10 top-auto font-normal">Beta</span>
              <span>NutriAI</span>
            </div>
          </NavLink>
          

          {shouldSeePersonalTabs && (
            <>
              <NavLink href='/diary'>Meu diário</NavLink>
              <NavLink href='/profile'>Perfil</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
