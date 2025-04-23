import Whatsapp from "./svgs/Whatsapp";
import Email from "./svgs/Email";
import Telephone from "./svgs/Telephone";
import Instagram from "./svgs/Instagram";
import Facebook from "./svgs/Facebook";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-white text-center px-4 md:px-[40px] lg:px-[60px] py-8">
      <h2 className="text-[#17AAE1] text-[36px] md:text-[80px] mb-8 md:mb-[86px]">
        Medios de contacto
      </h2>
      <div className="gap-8 mb-8 flex flex-wrap justify-center  md:gap-12 md:mb-[75px]">
        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[22px]">
          <Link
            href="mailto:atencionalcliente@argenpesos.com.ar"
            target="_blank"
            aria-label="Enviar correo a Atención al cliente"
          >
            <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px] ">
              <Email
                className={
                  "w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
                }
              />
            </div>
          </Link>
          <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
            Mail
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[22px]">
          <div className="relative group">
            <Link
              href="tel:0800-220-2743"
              target="_blank"
              aria-label="Llamar a ArgenPesos"
            >
              <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px]">
                <Telephone className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]" />
              </div>
            </Link>
            {/* Tooltip */}
            <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              0800-220-2743
            </div>
          </div>
          <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
            Teléfono
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[22px]">
          <Link
            href="https://api.whatsapp.com/send?phone=541168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar"
            target="_blank"
            aria-label="Contactar a ArgenPesos por WhatsApp"
          >
            <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px] ">
              <Whatsapp
                className={
                  "w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
                }
              />
            </div>
          </Link>
          <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
            Whatsapp
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[22px] justify-self-center col-span-1">
          <Link
            href="https://www.instagram.com/argenpesos"
            target="_blank"
            aria-label="Visitar el Instagram de ArgenPesos"
          >
            <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px] ">
              <Instagram
                className={
                  "w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
                }
              />
            </div>
          </Link>
          <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
            Instagram
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[28px] justify-self-center col-span-1">
          <Link
            href="https://www.facebook.com/argenpesos"
            target="_blank"
            aria-label="Visitar el Facebook de ArgenPesos"
          >
            <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px] ">
              <Facebook
                className={
                  "w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
                }
              />
            </div>
          </Link>
          <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
            Facebook
          </p>
        </div>
      </div>
      <div className="bg-[#EC5647] text-white text-[12px] md:text-[24px] py-2 px-4 md:py-[27px] md:px-[16px] rounded-lg mx-auto w-full md:w-3/4">
        <p>
          Horarios de atención: Lunes a viernes de 8:00 a 20:00 Hs. - Sábados:
          de 9:00 a 13:00 Hs.
        </p>
      </div>
    </section>
  );
}
