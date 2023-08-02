import { getServerSession } from "next-auth";

import { Page } from "@/app/components/Page";

import { NutriAIContent } from "./components/NutriAIContent";

export default async function Home() {
  const session = await getServerSession();
  const canAccessNutriAI = session && session.user;

  return (
    <Page>
      {canAccessNutriAI ? (
        <NutriAIContent />
      ) : (
        <section>
          <h1 className="text-2xl font-bold">Login necessário</h1>
          <p className="mt-4">
            <span className="text-gray-500">Para acessar este recurso exclusivo, por favor, faça login em sua conta. O login permitirá que você desfrute de uma experiência personalizada e tenha acesso a funcionalidades adicionais. Se você ainda não tem uma conta, registre-se agora mesmo para aproveitar ao máximo nossos serviços e conteúdos. Estamos ansiosos para tê-lo(a) conosco!</span>
          </p>
          <p className="mt-2">
            <span className="text-gray-500">Conecte-se pelo Google no botão do menu de navegação e comece a user este recurso.</span>
          </p>
        </section>
      )}
    </Page>
  );
}
