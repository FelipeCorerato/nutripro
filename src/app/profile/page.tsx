import { getServerSession } from "next-auth";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

import { Page } from "@/app/components/Page";
import { WaterSettings } from "@/app/components/WaterSettings";
import { loginIsRequiredServer } from "@/utils/auth";

import { UserDataSection } from "./components/UserDataSection";

export default async function ProfilePage() {
  await loginIsRequiredServer();

  const session = await getServerSession();

  if (!session || !session.user) return null;

  return (
    <Page className="grid grid-cols-4 grid-rows-3 gap-4 mobile:flex tablet:flex mobile:flex-col tablet:flex-col">
      <UserDataSection userData={session.user} />

      <section className="border p-6 rounded-lg flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Meta de peso</span>
          <FiSettings color="#737380" size={20} className="cursor-pointer" />
        </div>
        
        <div className="flex items-center flex-col flex-1 justify-center mobile:mt-4 tablet:mt-4">
          <span className="text-2xl font-semibold">70kg</span>
        </div>
      </section>

      <section className="border p-6 rounded-lg flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Consumo de água</span>
          <WaterSettings />
        </div>

        <div className="flex items-center flex-col flex-1 justify-center mobile:mt-4 tablet:mt-4">
          <span className="text-2xl font-semibold">3000ml</span>
          <span className="text-gray-400">Meta diária</span>
        </div>
      </section>

      <section className="border p-6 rounded-lg flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Atividade semanal</span>
          <FiSettings color="#737380" size={18} className="cursor-pointer" />
        </div>

        <div className="flex items-center flex-col flex-1 justify-center mobile:mt-4 tablet:mt-4">
          <span className="text-2xl font-semibold">3000ml</span>
        </div>
      </section>

      <section className="border p-6 rounded-lg col-span-3 row-span-2 flex flex-col items-center justify-center">
        <Image src="/images/healthy-meal.svg" alt="nutripro-logo" width={350} height={350} className="rounded-full" />
        <span className='text-6xl font-extrabold text-green-600 transition-all hover:animate-pulse duration-[10]'>NutriPro</span>
      </section>
    </Page>
  );
}
