import logo from "../../../public/logo-blanco-slogan.png"
import appstore from "../../../public/appstore.png"
import googleplay from "../../../public/googleplay.png"
import appImg from "../../../public/app.png"
import Image from "next/image"
import DownloadSVG from "./svgs/Download"
import Link from "next/link"

export default function AppPublicidad () {
    return (
        <>
            <section className="w-full h-[850px] px-[16px]  mb-[53px] md:px-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-around w-full h-full bg-gradient-to-t pt-8 px-6 sm:px-10 md:px-0 from-[#5AD2F7] to-[#4DC4F1] rounded-[30px]">
                    <div className="h-full sm:w-full sm:px-20  md:w-[45%] lg:w-[55%] flex flex-col sm:gap-[30px] justify-around items-center  md:px-12 pb-0 md:py-14 ">
                        <div className="flex flex-col items-start justify-center">
                            {/* <Image src={logo} alt="Argenpesos Logo" className="mb-[45px] w-[310px] h-[75px]"/> */}
                            <h2 className="text-white text-center md:text-start w-auto text-[28px] sm:text-[34px] md:text-[46px] xl:text-[60px] mb-[20px] sm:leading-[2rem] md:leading-[2.5rem] xl:leading-[4rem]">¿Todavía no descargaste la app de ArgenPesos?</h2>
                            <p className="text-white text-center md:text-start w-auto text-[18px] sm:text-[24px] md:text-[18px] lg:text-[24px] xl:text-[32px] mb-[10px] md:mb-[30px] font-medium leading-[1.5rem]">Recibe préstamos, compra productos, obtén descuentos y más beneficios.</p>
                        </div>
                        <div className="flex flex-col md:flex-row w-full items-center justify-start gap-[20px] xl:gap-[30px]">
                            <div className="flex flex-col items-center w-[150px] md:w-[120px] md:h-[180px] lg:w-[175px] h-[160px] lg:h-[200px] xl:w-[205px] xl:h-[230px] md:gap-[12px] p-1 md:p-2.5 bg-white rounded-[18px]">
                                <div className="w-[130px] md:w-[100px] lg:w-[150px] xl:w-[180px] xl:h-[160px] h-[130px] md:h-[140px] mb-[5px] md:mb-2.5 rounded-[8px] md:rounded-[14px] border-solid border-[2px] md:border-[4px] border-[#4DC4F1]"></div>
                                <div className="w-full flex items-center justify-center gap-0.5 md:gap-[6px]">
                                    <DownloadSVG className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]" />
                                    <p className="text-lightblue-primary text-[14px] md:text-xs lg:text-sm xl:text-base font-bold">Descarga la app</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                                <Link href="">
                                    <Image src={appstore} alt="appstore" className="h-[40px] w-[120px] sm:h-[52px] sm:w-[180px]"/>
                                </Link>
                                    <Image src={googleplay} alt="google-play"  className=" h-[40px] w-[120px] sm:h-[52px] sm:w-[180px] "/>
                                <Link href="">
                                </Link>
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