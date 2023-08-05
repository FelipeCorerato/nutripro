import dynamic from "next/dynamic";
import { FiSettings } from "react-icons/fi";

import { CircularLoading } from "@/app/components/CircularLoading";

const DynamicLineChart = dynamic(() => import("@/app/components/LineChart"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center mobile:mt-8 tablet:mt-8">
      <CircularLoading />
    </div>
  ),
});

export function WeightSection() {
  return(
    <section className="mt-10 border p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Histórico de peso</h1>
        <FiSettings color="#737380" size={20} />
      </div>
      <p className="mt-4">
        <span className="text-gray-500">Acompanhe suas mudanças ao longo do tempo e mantenha-se motivado para alcançar seus objetivos de saúde e bem-estar. Registre seu peso regularmente, visualize gráficos de progresso e ajuste suas metas conforme necessário. Cuide de si mesmo com nosso acompanhamento de peso prático e intuitivo.</span>
      </p>

      <div className="mt-10 grid grid-cols-2 gap-x-8 mobile:flex tablet:flex mobile:flex-col tablet:flex-col">
        <div className="grid gap-6 grid-cols-2 grid-rows-2">
          <div className="border rounded-lg flex flex-col items-center justify-center">
              <span className="font-semibold text-xl">62.3kg</span>
              <span className="text-gray-400 mobile:hidden tablet:hidden">Peso atual (2 ago.)</span>
              <span className="text-gray-400 laptop:hidden desktop:hidden wide:hidden">2 ago.</span>
          </div>
          <div className="border rounded-lg flex flex-col items-center justify-center">
              <span className="font-semibold text-xl">70kg</span>
              <span className="text-gray-400">Meta (2 dez.)</span>
          </div>
          <div className="border rounded-lg col-span-2 flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-xl">20.24</span>
              <span className="text-gray-400">IMC calculado</span>
            </div>

            <div className="flex justify-center flex-col">
              <span className="text-gray-400">Classificação</span>
              <span className="font-semibold text-xl">Normal</span>
            </div>
          </div>
        </div>

        <DynamicLineChart chartName="weight-history" className="mobile:mt-8 tablet:mt-8" />
      </div>
    </section>
  );
}
