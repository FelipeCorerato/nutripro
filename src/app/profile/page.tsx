import { Page } from "@/app/components/Page";
import Image from "next/image";
import { UserDataSection } from "./components/UserDataSection";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession();

  if (!session || !session.user) return null;

  return (
    <Page className="grid grid-cols-4 grid-rows-3 gap-4">
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
        <Image src="/images/healthy-meal.svg" alt="" width={300} height={300} className="rounded-full" />
        <span className="text-lg font-semibold">NutriPro</span>
      </section>
    </Page>
  );
}