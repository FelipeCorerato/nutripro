'use client';

import { signOut } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const DynamicInput = dynamic(() => import("@/app/components/Input"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

interface UserDataSectionProps {
  userData: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export function UserDataSection({ userData }: UserDataSectionProps) {
  const { push } = useRouter();

  const handleLogout = () => {
    signOut();
    push('/');
  }

  const imageSrc = userData.image || "/images/logo.svg";

  return(
    <section className="border p-6 rounded-lg row-span-3 flex flex-col justify-around">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Image src={imageSrc} alt="" width={120} height={120} className="rounded-full" />
          <span className="text-lg font-semibold mt-4">{userData.name}</span>
        </div>
      </div>

      <div className="mt-8">
        <DynamicInput inputName="name" readOnly value={`${userData.email}`} title="Email" />
        <DynamicInput inputName="weight" value="" title="Peso" />
        <DynamicInput inputName="height" value="" title="Altura" />
        <DynamicInput inputName="dateOfBirth" value="" title="Data de nascimento" />
        <DynamicInput inputName="gender" value="" title="Gênero" />
      </div>

      <button className="btn btn-outline btn-error mt-8" onClick={handleLogout}>Deslogar</button>
    </section>
  );
}