import logo from "../../../public/logo-argenpesos-white.png"
import appImg from "../../../public/app.png"
import Image from "next/image"
import DownloadSVG from "./svgs/Download"

export default function AppPublicidad () {
    return (
        <>
            <section className="w-full h-[800px] px-[16px]  mb-[53px] md:px-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-around w-full h-full bg-gradient-to-t pt-8 from-[#5AD2F7] to-[#4DC4F1] rounded-[30px]">
                    <div className="h-full w-[45%] flex flex-col  items-center  md:px-12 pb-0 md:py-14 ">
                        <div className="flex flex-col items-start justify-center">
                            <Image src={logo} alt="Argenpesos Logo" className="mb-[45px]"/>
                            <h2 className="text-white text-center md:text-start w-auto text-[18px] md:text-[22px] xl:text-[32px] mb-[20px]">¿Todavía no descargaste la app de ArgenPesos?</h2>
                            <p className="text-white text-center md:text-start w-auto text-base md:text-[16px] xl:text-[24px] mb-[55px]">Recibe préstamos, compra productos, obtén descuentos y más beneficios.</p>
                        </div>
                        <div className="flex flex-col items-center w-[80px] md:w-[120px] md:h-[180px] lg:w-[175px] h-[90px] lg:h-[200px] md:gap-[12px] p-1 md:p-2.5 bg-white rounded-[18px]">
                            <div className="w-[70px] md:w-[100px] lg:w-[150px] h-[70px] md:h-[140px] mb-[5px] md:mb-2.5 rounded-[8px] md:rounded-[14px] border-solid border-[2px] md:border-[4px] border-[#4DC4F1]"></div>
                            <div className="w-full flex items-center justify-center gap-0.5 md:gap-[6px]">
                                <DownloadSVG className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]" />
                                <p className="text-lightblue-primary text-[8px] md:text-xs lg:text-sm font-bold">Descarga la app</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[35%] h-[350px] sm:h-[450px] sm:w-[40%] md:h-full lg:w-[25%] flex justify-center items-end relative">
                        <Image src={appImg} alt="Application Argenpesos" className="absolute h-full"/>
                    </div>
                </div>
            </section>
        </>
    )
}