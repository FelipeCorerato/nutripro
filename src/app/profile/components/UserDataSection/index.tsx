'use client';

import Image from "next/image";
import { signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

import { Input } from "../Input";

interface UserDataSectionProps {
  userData: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export function UserDataSection({ userData }: UserDataSectionProps) {
  const imageSrc = userData.image || "/images/logo.svg";

  return(
    <section className="border p-6 rounded-lg row-span-3 flex flex-col justify-around">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Image src={imageSrc} alt="profile-picture" width={120} height={120} className="rounded-full" />
          <span className="text-lg font-semibold mt-4">{userData.name}</span>
        </div>
      </div>

      <div className="mt-8">
        <Input label="Email" value={userData.email} icon={<FaGoogle color="#3e3e3e" />} disabled />
        <Input label="Altura" value="1,75m" readonly />
        <Input label="Peso" value="65kg" readonly />
        <Input label="Data de nascimento" value="20/03/2003" readonly />
        <Input label="Gênero" value="Homem" readonly />
      </div>

      <button className="btn btn-outline btn-error mt-8" onClick={() => signOut()}>Deslogar</button>
    </section>
  );
}