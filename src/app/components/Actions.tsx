import { Separator } from "@/components/ui/separator";
import ChatSVG from "./svgs/Chat";
import PhoneSVG from "./svgs/Phone";
import WalletSVG from "./svgs/Wallet";

export default function Actions() {
    return (
        <>
        <h2 className="text-center text-[36px] md:text-[40px] lg:text-[48px] font-semibold text-lightblue-primary">Préstamos Online en 3 simples pasos</h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-[5px] mb-[50px] mt-[22px] w-full'>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[20px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <ChatSVG className="w-[95px] h-[95px]"/>
                <div className="flex items-start min-h-[60px]">
                    <div className="flex items-center justify-center text-white font-bold rounded-full w-8 h-7 bg-[#00AEE1]">1</div>
                    <p className='font-bold text-lightblue-primary text-[20px] text-center text-nowrap px-4 max-w-[250px]'>Chateá con ArgenBot</p>
                </div>
            </div>
            <Separator className="h-[3px] w-[200px] md:w-[3px] md:h-[200px] rounded bg-[#00ADEE]"/>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[20px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <PhoneSVG className="w-[95px] h-[95px] "/>
                <div className="flex items-start min-h-[60px]">
                    <div className="flex items-center justify-center text-white font-bold rounded-full w-8 h-7 bg-[#00AEE1]">2</div>
                    <p className='font-bold text-lightblue-primary text-[20px] text-center text-wrap px-4 max-w-[250px]'>Te contactamos en el día</p>
                </div>
            </div>
            <Separator className="h-[3px] w-[200px] md:w-[3px] md:h-[200px] rounded bg-[#00ADEE]"/>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[20px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <WalletSVG className="w-[95px] h-[95px]"/>
                <div className="flex items-start min-h-[60px]">
                    <div className="flex items-center justify-center text-white font-bold rounded-full w-8 h-7 bg-[#00AEE1]">3</div>
                    <p className='font-bold text-lightblue-primary text-[20px] text-center text-wrap px-4 max-w-[290px]'>Firmas y te acreditamos el dinero</p>
                </div>
            </div>
        </div>
    </>
    )
}