import ChatSVG from "./svgs/Chat";
import PhoneSVG from "./svgs/Phone";
import WalletSVG from "./svgs/Wallet";

export default function Actions() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-[31px] mb-[50px] mt-[22px] w-full'>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[26px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <ChatSVG className="w-[95px] h-[95px]"/>
                <p className='font-bold text-lightblue-primary text-[20px] text-center text-wrap px-8 max-w-[250px]'>Chateá con Tina</p>
            </div>
            <div className="h-[3px] w-[200px] md:w-[3px] md:h-[200px] rounded bg-[#00ADEE]"></div>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[26px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <PhoneSVG className="w-[95px] h-[95px] "/>
                <p className='font-bold text-lightblue-primary text-[20px] text-center text-wrap px-8 max-w-[250px]'>Te contactamos en el día</p>
            </div>
            <div className="h-[3px] w-[200px] md:w-[3px] md:h-[200px] rounded bg-[#00ADEE]"></div>
            <div className='bg-transparent flex flex-col items-center gap-[25px] px-[26px] pt-2.5 justify-center rounded-[15px] h-[220px]'>
                <WalletSVG className="w-[95px] h-[95px]"/>
                <p className='font-bold text-lightblue-primary text-[20px] text-center text-wrap px-8 max-w-[250px]'>Firmas y te acreditamos el dinero</p>
            </div>
        </div>
    )
}