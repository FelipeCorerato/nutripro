"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

import { MacrosSection } from "@/app/components/MacrosSection";
import { Modal, openModal } from "@/app/components/Modal";
import { MealsResponseEnhancedWithTotalizers } from "@/types/types";

import { cheaperMenu, cholesterolMenu, diabetesMenu, lowCarboMenu, lowSugarMenu, veganMenu, vegetarianMenu } from "../../templates/meal-plans";
import { ModalContentType } from "../../types";
import { Box } from "../Box";

export function PlansSection() {
  const [planModalData, setPlanModalData] = useState<ModalContentType>({ title: "", menu: cheaperMenu });

  const handlePlanBoxClick = (title: string, menu: MealsResponseEnhancedWithTotalizers) => {
    setPlanModalData({title, menu});
    openModal({ id: "plains-modal" });
  }

  return(
    <>
      <section className="border p-6 rounded-lg">
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

      <Modal id="plains-modal">
        <div className="modal-action flex items-center justify-between mt-0">
          <h3 className="font-bold text-lg">{planModalData.title}</h3>
          <button className="btn btn-square btn-ghost">
            <FiX size={20} />
          </button>
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
    </>
  );
}