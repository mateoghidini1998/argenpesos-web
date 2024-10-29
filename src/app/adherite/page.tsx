"use client"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogPortal } from '@/components/ui/dialog'; 
import Fideliza from "../components/svgs/Fideliza"
import Financiacion from "../components/svgs/Financiacion"
import Ventas from "../components/svgs/Ventas"
import AdheriTuComercioForm from "../components/forms/AdheriTuComercioForm"
import ConvertiteEnComercializadorForm from "../components/forms/ConvertiteEnComercializadorForm"

export default function Adherite() {
    const [ modalContent, setModalContent ] = useState("")



    return (
        <Dialog>
            <section className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
                <h1 className="text-lightblue-primary text-center text-[24px] md:text-[80px] font-bold mb-16 lg:mb-28">Trabajá con nosotros</h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:w-[1000px] gap-8 md:gap-[100px] mb-[50px] md:mb-32">
                <DialogTrigger asChild>
                    <button 
                        onClick={() => setModalContent("Adherí tu comercio")}
                        className="flex w-[228px] h-[50px] text-base  md:w-[450px] md:h-[140px] items-center md:py-5 md:px-10 rounded-[8px] py-[20px] px-[40px] md:rounded-[38px] border-[#00ADEE] border-[1px] md:border-[3px] border-solid text-lightblue-primary md:text-[40px] text-center"
                    >
                        Adherí tu comercio
                    </button>
                </DialogTrigger>
                <DialogTrigger asChild>
                    <button
                        onClick={() => setModalContent("Convertite en comercializador")} 
                        className="flex w-[228px] h-[50px] leading-normal text-base  md:w-[450px] md:h-[140px] items-center md:py-5 md:px-10 rounded-[8px] py-[20px] px-[40px] md:rounded-[38px] border-[#00ADEE] border-[1px] md:border-[3px] border-solid text-lightblue-primary md:text-[40px] text-center">
                        Convertite en comercializador
                    </button>
                </DialogTrigger>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:px-24 gap-[42px] md:gap-[248px] mb-32">
                    <div className="flex flex-col items-center justify-center ">
                         <Fideliza className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="font-bold text-lightblue-primary leading-normal  text-base md:text-[32px] mt-[40px] text-center">Fidelizá a tus clientes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Ventas className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="font-bold text-lightblue-primary leading-normal text-base md:text-[32px] mt-[40px] text-center">Aumentá tus ventas</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Financiacion className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="font-bold text-lightblue-primary leading-normal text-base md:text-[32px] mt-[40px] text-center">Ofrecé nuestra financiación</p>
                    </div>
                </div>
            </section>

            <DialogPortal>
                <DialogContent className="w-[90%] h-[90%] md:h-auto sm:w-full overflow-scroll">
                    <form className="w-full max-w-[20rem] sm:max-w-lg mx-auto relative">
                        {modalContent === "Adherí tu comercio" && (
                            <AdheriTuComercioForm/>   
                        )}
                        {modalContent === "Convertite en comercializador" && (
                            <ConvertiteEnComercializadorForm/>
                        )}
                    </form>    
                </DialogContent> 
            </DialogPortal>
        </Dialog>
    )
}