"use client";
import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import ChatBanner from "./ChatBanner";

export default function MainBanner() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openedFromQR, setOpenedFromQR] = useState(false);

  useEffect(() => {
    if (
      new URLSearchParams(window.location.search).get("openChat") === "true"
    ) {
      setIsChatOpen(true);
      setOpenedFromQR(true);
    }
  }, []);

  return (
    <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
      <div className={`mt-[105px] md:mt-[100px] lg:mt-[152px]`}>
        <section className="flex flex-col md:flex-row items-stretch justify-between w-full h-auto md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[#0093ee] to-[#00adee] mb-[75px] rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[70px] lg:rounded-b-[100px] px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* TEXTO */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white text-center md:text-left py-14 md:py-0">
            {/* <p className="text-xl md:text-[32px] lg:text-[48px] font-bold leading-snug whitespace-nowrap">
              ¡EMPEZÁ EL MES CON EFECTIVO!
            </p> */}
            <p className="text-[60px] md:text-[72px] lg:text-[90px] font-bold leading-[1.1]">
              ¡EMPEZÁ EL MES CON EFECTIVO!
            </p>

            <p className="text-2xl md:text-[28px] lg:text-[50px] font-medium leading-[1.1]">
              Llevate hasta <span className="font-bold">$1.000.000</span> fácil
              y en minutos
            </p>
            {/* <p className="text-xl md:text-[22px] lg:text-[36px] leading-snug mt-2">
              accedé a tu <span className="font-bold">préstamo</span> en cuotas
              fijas y en pesos
            </p> */}

            {/* Botón desktop */}
            <button
              className="mt-6 hidden md:block bg-[#f75333] hover:bg-[#d94428] text-white text-[16px] md:text-base lg:text-[28px] font-bold py-2 px-6 rounded-full w-[200px] h-[50px] md:w-[220px] lg:w-[250px] lg:h-[70px] transition-colors duration-200"
              onClick={() => {
                setIsChatOpen(true);
                setOpenedFromQR(false);
              }}
            >
              Pedilo acá
            </button>
          </div>

          {/* IMAGEN CON BOTÓN ABSOLUTO EN MOBILE */}
          <div className="relative w-full md:w-1/2 flex justify-center items-end h-[400px] md:h-full">
            {/* Botón mobile */}
            <button
              className="absolute bottom-[80px] md:hidden block bg-[#f75333] hover:bg-[#d94428] text-white text-[16px] font-bold py-2 px-6 rounded-full w-[200px] h-[50px] transition-colors duration-200 z-10 shadow-lg"
              onClick={() => {
                setIsChatOpen(true);
                setOpenedFromQR(false);
              }}
            >
              Pedilo acá
            </button>

            <img
              src="/mujer-banner.png"
              alt="Mujer Banner"
              className="object-contain md:object-cover w-auto h-full max-h-[400px] md:max-h-[450px] lg:max-h-[700px]"
            />
          </div>
        </section>
      </div>

      <DialogPortal>
        <DialogContent className="flex flex-col lg:flex-row items-center justify-start lg:justify-center p-8 lg:h-auto min-h-[600px] h-[600px] w-full overflow-y-auto overflow-x-hidden">
          <ChatBanner />
          <Chatbot openedFromQR={openedFromQR} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
