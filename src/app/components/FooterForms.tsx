"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
} from "@/components/ui/dialog";
import ConvertiteEnComercializadorForm from "./forms/ConvertiteEnComercializadorForm";
import TrabajaConNosotros from "./forms/TrabajaConNosotros";
import SolicitarContratoSuscripto from "./forms/SolicitarContratoSuscripto";
import Link from "next/link";

export default function FooterForms() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <Dialog>
      <div className="flex flex-col text-[10px] md:text-[12px] xl:text-sm items-center text-center lg:text-start lg:items-start max-[260px]">
        <ul className="space-y-1">
          <li className="text-[#888] whitespace-nowrap">
            <DialogTrigger asChild>
              <button
                onClick={() => setModalContent("Convertite en comercializador")}
              >
                Convertite en comercializador
              </button>
            </DialogTrigger>
          </li>
          <li className="text-[#888]">
            <DialogTrigger asChild>
              <button onClick={() => setModalContent("Trabaja con nosotros")}>
                Trabajá con nosotros
              </button>
            </DialogTrigger>
          </li>
          <li className="text-[#888]">
            <a href="./Modo-de-Rescision.docx" download>
              Modo de Recisión
            </a>
          </li>
          <li className="text-[#888] whitespace-nowrap">
            <DialogTrigger asChild>
              <button
                onClick={() => setModalContent("Solicitar contrato suscripto")}
              >
                Solicitar Contrato Suscripto
              </button>
            </DialogTrigger>
          </li>
          <li className="text-[#888] whitespace-nowrap relative group">
            Información para el usuario financiero
            <ul className="hidden lg:group-hover:block absolute bg-white space-y-1 border-gray-300 rounded">
              <li className="text-[#888] text-wrap">
                <Link
                  href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                  target="__blank"
                >
                  Info BCRA
                </Link>
              </li>
              <li className="text-[#888]">
                <Link href="/usuario_financiero" target="__blank">
                  Info usuarios
                </Link>
              </li>
            </ul>
          </li>
          <li className="lg:hidden text-[#888] text-wrap">
            <Link
              href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
              target="__blank"
            >
              Info BCRA
            </Link>
          </li>
          <li className="lg:hidden text-[#888]">
            <Link href="/usuario_financiero" target="__blank">
              Info usuarios
            </Link>
          </li>
        </ul>
      </div>
      <DialogPortal>
        <DialogContent className="w-[90%] h-[90%] sm:h-full sm:w-full overflow-scroll">
          <form className="max-w-[20rem] sm:max-w-lg mx-auto relative">
            {modalContent === "Trabaja con nosotros" && <TrabajaConNosotros />}
            {modalContent === "Convertite en comercializador" && (
              <ConvertiteEnComercializadorForm />
            )}
            {modalContent === "Solicitar contrato suscripto" && (
              <SolicitarContratoSuscripto />
            )}
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
