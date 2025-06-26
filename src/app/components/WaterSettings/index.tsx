'use client';

import { FiSettings, FiX } from "react-icons/fi";

import { Input } from "@/app/components/Input";
import { Modal, openModal } from "@/app/components/Modal";

export function WaterSettings() {
  return(
    <>
      <FiSettings color="#737380" size={20} onClick={() => openModal({ id: "water-settings-modal" })} className="cursor-pointer" />

      <Modal id="water-settings-modal">
        <div className="modal-action flex items-center justify-between mt-0">
          <h3 className="font-bold text-lg">Configurações do consumo de água</h3>
          <button className="btn btn-square btn-ghost">
            <FiX size={20} />
          </button>
        </div>

        <div className="py-2">
          <p>A configuração recomendada é de 50ml por kg corporal. Nesse caso, utilizaremos seus dados para determinar a meta.</p>

          <div className="form-control mt-6">
            <label className="cursor-pointer label">
              <span className="label-text">Usar recomendação</span>
              <input type="checkbox" checked readOnly className="checkbox checkbox-success" />
            </label>
          </div>

          <Input type="number" value="3000" label="50ml x 62kg" disabled>
            <span className="label-text-alt">Mililitros</span>
          </Input>
        </div>
      </Modal>
    </>
  );
}