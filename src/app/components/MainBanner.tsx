"use client";
import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { IoIosArrowForward } from "react-icons/io";
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
        <section className="relative flex flex-col md:flex-row items-stretch justify-between w-full h-auto md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[#3e9ce8] to-[#1e88e5] mb-[75px] rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[70px] lg:rounded-b-[100px] px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute right-0 top-0 text-transparent hidden md:block md:text-[45px] lg:text-[100px] font-bold leading-none tracking-wider rotate-0 whitespace-nowrap" style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)'
            }}>
              {Array.from({ length: Math.ceil(700 / (window.innerWidth >= 1024 ? 100 : 45)) }, (_, i) => (
                <div key={i}>PRESTAMOS<br/></div>
              ))}
            </div>
          </div>

          {/* TEXTO */}
          <div className="relative z-10 w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-white text-center md:text-left py-14 md:py-0">
            
            <h1 className="text-[48px] md:text-[40px] lg:text-[70px] font-bold leading-[1.1] mb-6">
              <span className="text-nowrap">ACCEDÉ A TU</span><br/>
              <span className="text-[52px] md:text-[44px] lg:text-[76px]">PRÉSTAMO</span>
            </h1>

              <div className="space-y-3 mb-8">
              <div className="flex items-center justify-start">
                <span className="rounded-full w-8 h-8 border-none flex items-center justify-center text-white text-2xl mr-3"><IoIosArrowForward className="fill-white rounded-full bg-[#f75333]" /></span>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                  Cuotas fijas en pesos
                </p>
              </div>
              <div className="flex items-center justify-start">
                <span className="rounded-full w-8 h-8 border-none flex items-center justify-center text-white text-2xl mr-3"><IoIosArrowForward className="fill-white rounded-full bg-[#f75333]" /></span>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                  Con o sin veraz
                </p>
              </div>
              <div className="flex items-center justify-start">
                <span className="rounded-full w-8 h-8 border-none flex items-center justify-center text-white text-2xl mr-3"><IoIosArrowForward className="fill-white rounded-full bg-[#f75333]" /></span>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                  Solo con DNI
                </p>
              </div>
            </div>
            
            <button
              className="mt-6 hidden md:block bg-[#f75333] hover:bg-[#d94428] text-white text-[16px] md:text-base lg:text-[28px] font-bold py-3 px-8 rounded-full w-[200px] h-[50px] md:w-[220px] lg:w-[250px] lg:h-[70px] transition-colors duration-200 shadow-lg"
              onClick={() => {
                setIsChatOpen(true);
                setOpenedFromQR(false);
              }}
            >
              Pedilo acá
            </button>
          </div>

          <div className="relative w-full md:w-3/4 mt-auto flex justify-between items-center md:items-end gap-4 h-[280px] md:h-full z-10 md:px-4">
            <button
              className="w-auto text-nowrap md:hidden block shrink-0 bg-[#f75333] hover:bg-[#d94428] text-white text-[16px] font-bold py-2 px-4 md:py-3 md:px-8 rounded-md md:rounded-full md:w-[200px] md:h-[50px] transition-colors duration-200 z-10 shadow-lg"
              onClick={() => {
                setIsChatOpen(true);
                setOpenedFromQR(false);
              }}
            >
              Pedilo acá
            </button>

            <img
              src="/banner-agosto.png"
              alt="Préstamo Banner"
              className="object-contain object-bottom md:object-cover w-auto h-full self-end md:self-auto max-h-[400px] md:max-h-[450px] lg:max-h-[700px]"
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
