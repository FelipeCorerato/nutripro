import dynamic from "next/dynamic";
import Image from "next/image";

import { CircularLoading } from "@/app/components/CircularLoading";
import { WaterSettings } from "@/app/components/WaterSettings";

const DynamicBarChart = dynamic(() => import("@/app/components/BarChart"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center mobile:mt-8 tablet:mt-8">
      <CircularLoading color="text-blue-300" />
    </div>
  ),
});

export function WaterSection() {
  return(
    <>
      <section className="border p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Consumo de água</h1>
          <WaterSettings />
        </div>
        <p className="mt-4">
          <span className="text-gray-500">Acompanhe sua hidratação diária de forma simples e motivadora. Registre o consumo de água, defina metas, receba lembretes e visualize seu progresso. Cuide da sua saúde com facilidade!</span>
        </p>

        <div className="grid grid-cols-2 mt-10 gap-x-8 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse">
          <DynamicBarChart chartName="water-consumption" className="mobile:mt-8 tablet:mt-8" />

          <div className="flex flex-col justify-evenly">
            <div className="flex justify-evenly items-center">
              <span className="text-5xl font-bold cursor-pointer text-blue-300">-</span>
              <Image alt="water-glass" src="/images/water-glass.png" width={70} height={70} />
              <span className="text-5xl font-bold cursor-pointer text-blue-300">+</span>
            </div>

            <div className="border grid grid-cols-2 p-4 rounded-lg mt-10">
              <div className="flex flex-col border-r-2 items-center">
                <span className="text-md">Consumido</span>
                <span className="text-lg font-medium">1000ml</span>
              </div>

              <div className="flex flex-col border-l-2 items-center">
                <span className="text-md">Meta</span>
                <span className="text-lg font-medium">3000ml</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}