"use client"
import { useState } from "react"
import Registrarse from "../components/svgs/Registrarse"
import Ingresa from "../components/svgs/Ingresa"
import PagaTusCuotas from "../components/svgs/PagaTusCuotas"
import MiraTusCreditos from "../components/svgs/MiraTusCreditos"
import Link from "next/link"


export default function MiCuenta() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ modalContent, setModalContent ] = useState("")

    const openModal = (content: string) => {
        setModalContent(content);
        setIsModalOpen(true);
        console.log(isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
            <section className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
                <h2 className="text-lightblue-primary text-center text-2xl md:text-[80px] font-bold mb-10 md:mb-20 h-auto ">Bienvenido Cliente</h2>
                <div className="flex flex-col md:flex-row items-center justify-center md:w-[800px] gap-8 md:gap-[100px] mb-[50px] md:mb-32">
                    <Link href="http://clientes.argenpesos.com.ar:5003/registration" target="__blank"
                        className="flex w-[200px] h-[40px] text-base  md:w-[450px] md:h-[100px] justify-center items-center md:py-5 md:px-6 rounded-[8px] py-[20px] px-[40px] md:rounded-[38px] border-[#00ADEE] border-[1px] md:border-[3px] border-solid text-lightblue-primary md:text-[32px] text-center"
                    >
                        Registrarme
                    </Link>
                    <Link href="http://clientes.argenpesos.com.ar:5003/login" target="__blank"
                        className="flex w-[200px] h-[40px] leading-normal text-base  md:w-[450px] md:h-[100px] justify-center items-center md:py-3 md:px-6 rounded-[8px] py-[20px] px-[40px] md:rounded-[38px] border-[#00ADEE] border-[1px] md:border-[3px] border-solid text-lightblue-primary md:text-[32px] text-center">
                        Iniciar Sesión
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center md:px-24 gap-[42px] md:gap-[160px] mb-32">
                    <div className="flex flex-col items-center justify-center ">
                         <Registrarse className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="text-lightblue-primary leading-normal  text-base md:text-[32px] mt-[40px] text-center">Registrate</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Ingresa className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="text-lightblue-primary leading-normal text-base md:text-[32px] mt-[40px] text-center">Ingresa</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <MiraTusCreditos className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="text-lightblue-primary leading-normal text-base md:text-[32px] mt-[40px] text-center">Mira tus créditos</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <PagaTusCuotas className="md:w-[152px] md:h-[152px] w-[86px] h-[86px]" />
                        <p className="text-lightblue-primary leading-normal text-base md:text-[32px] mt-[40px] text-center">Paga tus cuotas</p>
                    </div>
                </div>
            </section>

    )
}