'use client'
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogPortal } from '@/components/ui/dialog'; 
import ConvertiteEnComercializadorForm from "./forms/ConvertiteEnComercializadorForm";
import TrabajaConNosotros from "./forms/TrabajaConNosotros";
import SolicitarContratoSuscripto from "./forms/SolicitarContratoSuscripto";
import Link from "next/link";

export default function FooterForms() {
    const [modalContent, setModalContent] = useState<string | null>(null);

    return (
        <Dialog >
        <div className="flex flex-col text-[10px] md:text-[12px] xl:text-sm items-center text-center lg:text-start lg:items-start max-[260px]">
            <ul className="space-y-1">
                <DialogTrigger asChild>
                    <li className="text-[#888] whitespace-nowrap">
                        <button onClick={() => setModalContent("Convertite en comercializador")}>
                        Convertite en comercializador
                        </button>
                    </li>
                </DialogTrigger> 
                <DialogTrigger asChild>
                    <li className="text-[#888]">
                        <button onClick={() => setModalContent("Trabaja con nosotros")}>
                            Trabajá con nosotros
                        </button>
                    </li>
                </DialogTrigger> 
                <a href='./Modo-de-Rescision.docx' download><li className="text-[#888]">Modo de Recisión</li></a>
                <DialogTrigger asChild>
                    <li className="text-[#888] whitespace-nowrap">
                        <button onClick={() => setModalContent("Solicitar contrato suscripto")}>
                            Solicitar Contrato Suscripto
                        </button>
                    </li>
                </DialogTrigger>
                <li className="text-[#888] whitespace-nowrap relative group">Información para el usuario financiero
                    <ul className="hidden group-hover:block absolute bg-white space-y-1  border-gray-300 rounded">
                        <Link href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp" target='__blank'>
                            <li className="text-[#888] text-wrap">Info BCRA</li>
                        </Link>
                        <Link href="/usuario_financiero" target='__blank'>
                            <li className="text-[#888]">Info usuarios</li>
                        </Link>
                    </ul>
                </li>
            </ul>
            </div>
            <DialogPortal>
                <DialogContent>
                    <form className="w-full max-w-lg mx-auto relative">
                        {modalContent === "Trabaja con nosotros" && (
                            <TrabajaConNosotros/>   
                        )}
                        {modalContent === "Convertite en comercializador" && (
                            <ConvertiteEnComercializadorForm/>
                        )}
                        {modalContent === "Solicitar contrato suscripto" && (
                            <SolicitarContratoSuscripto/>
                        )}
                    </form> 
                </DialogContent>   
            </DialogPortal>
        </Dialog>

    )
}