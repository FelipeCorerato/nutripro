"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

import { Modal, openModal } from "@/app/components/Modal";

import { chickenWithPotatoAndAspargusRecipe, chickenWrapRecipe, omeletWithCheeseRecipe, proteinShakeRecipe, quinoaSaladRecipe, salmonPokeRecipe, salmonWithQuinoaAndVegetablesRecipe, smoothieDetoxRecipe } from "../../templates/recipes";
import { Box } from "../Box";

export function RecipesSection() {
  const [recipeModalData, setRecipeModalData] = useState<{ title: string; content: string; }>({ title: "", content: "" });

  const handleRecipeBoxClick = async ({ title, content}: { title: string; content: string; }) => {
    setRecipeModalData({ title, content });
    openModal({ id: "recipes-modal" })
  }

  return(
    <>
      <section className="mt-10 border p-6 rounded-lg">
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

      <Modal id="recipes-modal">
        <div className="modal-action flex items-center justify-between mt-0">
          <h3 className="font-bold text-lg">{recipeModalData.title}</h3>
          <button className="btn btn-square btn-ghost">
            <FiX size={20} />
          </button>
        </div>
        
        <p className="py-2">{recipeModalData.content}</p>
      </Modal>
    </>
  );
}