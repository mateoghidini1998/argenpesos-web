import React from 'react'
import { Separator } from "@/components/ui/separator";
import Facil from './svgs/Facil';
import Rapido from './svgs/Rapido';
import Seguro from './svgs/Seguro';


export default function ChatBanner() {
  return (
    <div className='flex flex-col gap-8 items-center justify-apart p-8'>
        <h3 className='font-bold text-2xl lg:text-5xl text-nowrap'>TE PRESTAMOS HASTA</h3>
        <div className='bg-[#00adee] px-8 py-4 rounded-xl'>
            <span className='text-white font-bold text-[20px] md:text-[30px] lg:text-[44px] 2xl:text-[72px]'>$3.000.000</span>
        </div>
        <div className='flex items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Facil/>
                <span className='font-medium text-lightblue-primary'>Fácil</span>
            </div>
            <Separator orientation='vertical' className='text-lightblue-primary w-[3px] h-[100px] bg-[#00adee]'/>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Rapido/>
                <span className='font-medium text-lightblue-primary'>Rápido</span>
            </div>
            <Separator orientation='vertical' className='text-lightblue-primary w-[3px] h-[100px] bg-[#00adee]'/>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Seguro/>
                <span className='font-medium text-lightblue-primary'>Seguro</span>
            </div>
        </div>
        <p className='font-bold text-[#969696] text-[10px] sm:text-xs lg:text-base text-center text-wrap sm:text-nowrap'>*La otorgación del préstamo esta sujeta a analisis de riesgo crediticio</p>
    </div>
  )
}
