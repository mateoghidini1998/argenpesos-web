'use client'
import { Dialog, DialogTrigger, DialogContent, DialogPortal, DialogTitle } from '@/components/ui/dialog'; 
import { Button } from '@/components/ui/button';
import Chatbot from './Chatbot';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MainBanner() {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (new URLSearchParams(window.location.search).get('openChat') === 'true') {
            setIsChatOpen(true);
        }
    }, []);

    return (
        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
            <div className={`mt-[105px] md:mt-[100px] lg:mt-[152px]`}>
                <section className="flex relative w-full h-[250px] md:h-[400px] lg:h-[550px] bg-white hero-background mb-[75px] rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[70px] lg:rounded-b-[100px]">
                    <div className='w-full'>
                        <div className="w-4/5 flex flex-nowrap flex-col justify-center items-start h-[250px] md:h-[400px] lg:h-[550px] px-2 sm:px-8 md:px-12 lgx:p-14 xl:px-20">
                            <h1 className="w-auto max-w-1/2 min-h-[auto] items-center justify-center text-3xl md:text-[50px] lg:text-[64px] xl:text-[80px] font-bold  text-white text-start leading-[1.5rem] md:leading-[2rem] lg:leading-[4rem]">
                                Préstamos <br/>personales<br/> en minutos
                            </h1>
                            <DialogTrigger asChild>
                                <Button 
                                    className='mt-8 bg-[#17AAE1] hover:bg-[#2799c2] text-white text-[16px] md:text-base lg:text-[32px] font-bold py-2 px-4 rounded-full w-[160px] h-[50px] md:w-[170px] md:h-[50px] lg:w-[250px] lg:h-[80px]'
                                    onClick={() => setIsChatOpen(true)}
                                >
                                    Pedilo acá
                                </Button>
                            </DialogTrigger> 
                            <p className='flex flex-nowrap text-white font-medium text-sm mt-[15px]'>*La otorgación del préstamo esta sujeta a análisis de riesgo crediticio</p>
                        </div>
                    </div>
                </section>
            </div>

            <DialogPortal>
                <DialogContent className="h-[600px] overflow-y-auto overscroll-y-contain touch-scroll">
                    <Chatbot />
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
