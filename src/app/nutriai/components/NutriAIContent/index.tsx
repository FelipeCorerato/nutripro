'use client';

import { useState } from "react";

import { MacrosSection } from "@/app/components/MacrosSection";
import { Modal, toggleModal } from "@/app/components/Modal";
import { sendChatMessage, sendChatMessageV2 } from "@/services/chatgpt";
import { enhanceWithTotalizers } from "@/utils/totalizers";
import { removeUnity, toCalories, toGrams } from "@/utils/unities";

import { GtpData } from "../../types";
import { vegetarianMenu as template } from '../../../showcase/templates/meal-plans';

export function NutriAIContent() {
  const [gptData, setGptData] = useState<GtpData>({ data: enhanceWithTotalizers(template) });
  const [modalData, setModalData] = useState<{ title: string; content: string; }>({ title: "", content: "" });

  const handleGenerateMenuClick = async () => {
    const message = "Monte uma dieta para ganho de massa para um homem de 21 anos que pesa 65kg e tem uma rotina consistente de atividades físicas. As unidades da resposta devem ser gramas e calorias e ela deve ser dada neste formato (JSON): { refeições: [{refeição: ,alimentos: [{alimento: ,quantidade: ,proteína: ,carboidrato: ,gordura: ,calorias: }]}]}";
    const { response, chatHistory } = await sendChatMessage({ message });

    setGptData({ data: enhanceWithTotalizers(response), chatHistory });
  }

  const handleChangeClick = async (food: string, meal: string) => {
    const message = `Troque o item ${food} da refeição ${meal} por algo equivalente. As unidades da resposta devem ser gramas e calorias e ela deve ser apenas esse alimento neste formato (JSON): {alimento: ,quantidade: ,proteina: ,carboidrato: ,gordura: ,calorias: }.`;
    const { response, chatHistory } = await sendChatMessage({ message, previousDialog: gptData?.chatHistory });

    const selectedMealIndex = gptData.data.refeicoes.findIndex((m) => m.refeicao === meal);
    const selectedFoodIndex = gptData.data.refeicoes[selectedMealIndex].alimentos.findIndex((f) => f.alimento === food);

    gptData.data.refeicoes[selectedMealIndex].alimentos[selectedFoodIndex] = {
      alimento: response.alimento,
      calorias: toCalories(removeUnity(response.calorias)),
      carboidrato: toGrams(removeUnity(response.carboidrato)),
      gordura: toGrams(removeUnity(response.gordura)),
      proteina: toGrams(removeUnity(response.proteina)),
      quantidade: response.quantidade,
    };
    gptData.data = enhanceWithTotalizers(gptData.data);
    
    setGptData({ data: gptData.data, chatHistory });
  }

  const handleDetailClick = async (food: string, meal: string) => {
    const message = `Como essa comida "${food}" da refeição ${meal} deve ser preparada?`;
    const { response } = await sendChatMessageV2({ message, previousDialog: gptData?.chatHistory });

    setModalData({ title: food, content: response });
    toggleModal({ id: "details-modal" });
  }

  return(
    <section className="border p-6 rounded-lg">
      <span className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerar cardápio do dia</h1>
        <button className="btn" onClick={handleGenerateMenuClick}>Gerar cardápio</button>
      </span>
      <p className="mt-4">
        <span className="text-gray-500">Deixe a tecnologia trabalhar a seu favor para criar cardápios personalizados e equilibrados para as suas necessidades únicas. Nosso sistema inteligente utiliza algoritmos avançados para analisar suas preferências, metas de saúde e restrições alimentares, entregando cardápios deliciosos e nutricionalmente adequados. Simplifique o planejamento de refeições com nossa IA e descubra uma maneira inovadora de manter uma alimentação saudável e saborosa todos os dias. Experimente agora e alcance uma jornada de bem-estar guiada pela tecnologia!</span>
      </p>

      <div className="my-10">
        <div>
          <h1 className="text-lg font-bold">Macros do dia</h1>
          <span>Proteínas: {toGrams(gptData.data.totalizers.proteina)} </span>
          <span>Carboidratos: {toGrams(gptData.data.totalizers.carboidrato)} </span>
          <span>Gorduras: {toGrams(gptData.data.totalizers.gordura)} </span>
          <span>Calorias: {toCalories(gptData.data.totalizers.calorias)} </span>
        </div>

        <>
          {gptData.data.refeicoes.map((meal, index) => (
            <div key={index} className="mt-8">
              <h1 className="text-lg font-bold">{meal.refeicao}</h1>
              {meal.alimentos.map((item, i) => (
                <div key={i} className="mt-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.alimento} - {item.quantidade}</h3>
                    
                    <div>
                      <button className="btn btn-outline btn-success btn-xs" onClick={() => handleChangeClick(item.alimento, meal.refeicao)}>Trocar</button>
                      <button className="btn btn-outline btn-info ml-4 btn-xs" onClick={() => handleDetailClick(item.alimento, meal.refeicao)}>Detalhar</button>
                    </div>
                  </div>

                  <MacrosSection className="mt-1" macros={item} />
                </div>
              ))}
            </div>
          ))}
        </>

        <Modal id="details-modal">
          <div className="modal-action flex items-center justify-between mt-0">
            <h3 className="font-bold text-lg">{modalData.title}</h3>
            <button className="btn">Fechar</button>
          </div>

          <p className="py-2">{modalData.content}</p>
        </Modal>
      </div>
    </section>
  );
}