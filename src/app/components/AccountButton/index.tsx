'use client';

import { Session } from "next-auth";
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from "next/image";
import { FaGoogle } from 'react-icons/fa';

export async function AccountButtonLoading() {
  return(
    <div className="animate-pulse flex items-center h-12 border border-gray-300 shadow rounded-3xl px-6 w-60 ml-auto">
      <div className="rounded-full bg-slate-400 h-8 w-8" />
      <div className="h-2 bg-slate-400 rounded flex-1 mx-4" />
    </div>
  );
}

export async function AccountButton({ session }: { session: Session | null }) {
  const buttonClassName = "h-12 shadow flex justify-center ml-auto items-center border-gray-300 border rounded-3xl px-6 font-medium";

  return session && session.user ? (
    <Link
      type="button" 
      className={buttonClassName}
      href="/profile"
    >
      {session.user.image && (
        <Image alt="" src={session.user.image} height={32} width={32} className="rounded-full" />
      )}
      
      <span className='ml-4'>{session.user.name}</span>
    </Link>
  ):(
    <button 
      type="button" 
      className={buttonClassName}
      onClick={() => signIn('google')}
    >
      <FaGoogle color="#3e3e3e" />
      <span className='ml-4'>Entrar com Google</span>
    </button>
  );
}