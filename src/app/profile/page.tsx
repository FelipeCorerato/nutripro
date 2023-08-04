import { getServerSession } from "next-auth";
import Image from "next/image";

import { Page } from "@/app/components/Page";
import { loginIsRequiredServer } from "@/utils/auth";

import { UserDataSection } from "./components/UserDataSection";

export default async function ProfilePage() {
  await loginIsRequiredServer();

  const session = await getServerSession();

  if (!session || !session.user) return null;

  return (
    <Page className="grid grid-cols-4 grid-rows-3 gap-4 mobile:flex tablet:flex mobile:flex-col tablet:flex-col">
      <UserDataSection userData={session.user} />

      <section className="border p-6 rounded-lg flex items-center flex-col justify-center">
        <span className="text-2xl font-bold">70kg</span>
        <span className="text-gray-400 text-lg">Meta de peso</span>
      </section>

      <section className="border p-6 rounded-lg flex items-center flex-col justify-center">
        <span className="text-2xl font-bold">3000ml</span>
        <span className="text-gray-400 text-lg">Meta de consumo de água</span>
      </section>

      <section className="border p-6 rounded-lg flex items-center flex-col justify-center">
        <span className="text-2xl font-bold">3000ml</span>
        <span className="text-gray-400 text-lg">Meta de atividade semanal</span>
      </section>

      <section className="border p-6 rounded-lg col-span-3 row-span-2 flex flex-col items-center justify-center">
        <Image src="/images/healthy-meal.svg" alt="nutripro-logo" width={350} height={350} className="rounded-full" />
        <span className='text-6xl font-extrabold text-green-600 transition-all hover:animate-pulse duration-[10]'>NutriPro</span>
      </section>
    </Page>
  );
}
