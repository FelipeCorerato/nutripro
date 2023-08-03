import { Page } from "@/app/components/Page";
import { WaterSection } from "./components/WaterSection";
import { WeightSection } from "./components/WeightSection";
import { loginIsRequiredServer } from "@/utils/auth";

export default async function DiaryPage() {
  await loginIsRequiredServer();

  return (
    <Page>
      <WaterSection />
      
      <WeightSection />

      <section className="mt-10 border p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Acompanhamento de atividade física</h1>
        <p className="mt-4">
          <span className="text-gray-500">Visualize seu progresso em gráficos interativos, defina metas desafiadoras e acompanhe suas conquistas ao longo do tempo. Com nosso acompanhamento de atividades físicas, você estará mais próximo de alcançar seus objetivos de saúde e forma física. Vamos começar a se movimentar!</span>
        </p>
      </section>
    </Page>
  );
}
