"use client";

import { useState } from "react";

import { MacrosSection } from "@/app/components/MacrosSection";
import { Modal, toggleModal } from "@/app/components/Modal";
import { Page } from "@/app/components/Page";
import { MealsResponseEnhancedWithTotalizers } from "@/types/types";

import { Box } from "./components/Box";
import { cheaperMenu, cholesterolMenu, diabetesMenu, lowCarboMenu, lowSugarMenu, veganMenu, vegetarianMenu } from "./templates/meal-plans";
import { chickenWithPotatoAndAspargusRecipe, chickenWrapRecipe, omeletWithCheeseRecipe, proteinShakeRecipe, quinoaSaladRecipe, salmonPokeRecipe, salmonWithQuinoaAndVegetablesRecipe, smoothieDetoxRecipe } from "./templates/recipes";
import { ModalContentType } from "./types";

export default function Showcase() {
  const [planModalData, setPlanModalData] = useState<ModalContentType>({ title: "", menu: cheaperMenu });
  const [recipeModalData, setRecipeModalData] = useState<{ title: string; content: string; }>({ title: "", content: "" });

  const handlePlanBoxClick = (title: string, menu: MealsResponseEnhancedWithTotalizers) => {
    setPlanModalData({title, menu});
    toggleModal({ id: "plains-modal" });
  }

  const handleRecipeBoxClick = async ({ title, content}: { title: string; content: string; }) => {
    setRecipeModalData({ title, content });
    toggleModal({ id: "recipes-modal" })
  }

  return (
    <Page>
      <section>
        <h1 className="text-2xl font-bold">Planos de alimentação</h1>
        <p className="mt-4">
          <span className="text-gray-500">Aqui você encontrará um conjunto de planos cuidadosamente elaborados por nutricionistas, personalizados para atender às suas necessidades específicas. Alcance seus objetivos de saúde com orientações alimentares balanceadas e deliciosas, criadas para proporcionar uma jornada nutricional positiva e sustentável. Escolha o plano perfeito para você e embarque em uma jornada rumo a uma vida mais saudável e plena.</span>
        </p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <Box title="Pequenos preços" onClick={() => handlePlanBoxClick("Pequenos preços", cheaperMenu)} />
          <Box title="Low-carb" onClick={() => handlePlanBoxClick("Low-carb", lowCarboMenu)} />
          <Box title="Low-sugar" onClick={() => handlePlanBoxClick("Low-sugar", lowSugarMenu)} />
          <Box title="Vegetariano" onClick={() => handlePlanBoxClick("Vegetariano", vegetarianMenu)} />
          <Box title="Vegano" onClick={() => handlePlanBoxClick("Vegano", veganMenu)} />
          <Box title="Diabetes" onClick={() => handlePlanBoxClick("Diabetes", diabetesMenu)} />
          <Box title="Controle de colesterol" onClick={() => handlePlanBoxClick("Controle de colesterol", cholesterolMenu)} />
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-2xl font-bold">Receitas</h1>
        <p className="mt-4">
          <span className="text-gray-500">Descubra uma coleção irresistível de Receitas Saudáveis, especialmente desenvolvidas por nutricionistas especializados. De pratos principais a sobremesas deliciosas, encontre opções para todos os gostos e restrições alimentares. Cozinhe com facilidade e aproveite uma alimentação equilibrada, saborosa e nutritiva em cada mordida!</span>
        </p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <Box title="Incremente seu shake proteico" onClick={() => handleRecipeBoxClick(proteinShakeRecipe)} />
          <Box title="Salada de Quinoa com Legumes" onClick={() => handleRecipeBoxClick(quinoaSaladRecipe)} />
          <Box title="Frango Grelhado com Batata Doce e Aspargos" onClick={() => handleRecipeBoxClick(chickenWithPotatoAndAspargusRecipe)} />
          <Box title="Omelete de Espinafre e Queijo Cottage" onClick={() => handleRecipeBoxClick(omeletWithCheeseRecipe)} />
          <Box title="Salmão Assado com Quinoa e Legumes no Vapor" onClick={() => handleRecipeBoxClick(salmonWithQuinoaAndVegetablesRecipe)} />
          <Box title="Smoothie Verde Detox" onClick={() => handleRecipeBoxClick(smoothieDetoxRecipe)} />
          <Box title="Poke Bowl de Salmão" onClick={() => handleRecipeBoxClick(salmonPokeRecipe)} />
          <Box title="Wrap de Frango com Vegetais" onClick={() => handleRecipeBoxClick(chickenWrapRecipe)} />
        </div>
      </section>

      <Modal id="plains-modal">
        <div className="modal-action flex items-center justify-between mt-0">
          <h3 className="font-bold text-lg">{planModalData.title}</h3>
          <button className="btn">Close</button>
        </div>
        
        <p className="py-2">
          {planModalData.menu.refeicoes.map((meal, index) => (
            <div key={index} className="mt-4">
              <h4 className="text-lg font-bold">{meal.refeicao}</h4>
              {meal.alimentos.map((item, i) => (
                <div key={i} className="mt-2">
                  <h5 className="font-semibold">{item.alimento} - {item.quantidade}</h5>
                  <MacrosSection className="mt-1" macros={item} />
                </div>
              ))}
            </div>
          ))}
        </p>
      </Modal>

      <Modal id="recipes-modal">
        <div className="modal-action flex items-center justify-between mt-0">
          <h3 className="font-bold text-lg">{recipeModalData.title}</h3>
          <button className="btn">Close</button>
        </div>
        
        <p className="py-2">{recipeModalData.content}</p>
      </Modal>
    </Page>
  );
}