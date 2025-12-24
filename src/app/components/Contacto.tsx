import Whatsapp from "./svgs/Whatsapp";
import Email from "./svgs/Email";
import Telephone from "./svgs/Telephone";
import Instagram from "./svgs/Instagram";
import Facebook from "./svgs/Facebook";
import Link from "next/link";

function ContactItem({ href, ariaLabel, icon: Icon, label, tooltip }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[10px] md:gap-[22px]">
      <div className="relative group">
        <Link href={href} target="_blank" aria-label={ariaLabel}>
          <div className="flex justify-center items-center bg-[#17AAE1] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] mb-[10px]">
            <Icon className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]" />
          </div>
        </Link>
        <div
          className="
    absolute
    bottom-full       
    mb-2                
    left-1/2
    -translate-x-1/2
    bg-[#17AAE1] text-white font-bold text-sm md:text-base
    px-3 py-2 rounded-lg
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300 pointer-events-none z-10
    whitespace-nowrap
  "
        >
          {tooltip}
          <div
            className="
      absolute
      top-full
      left-1/2
      -translate-x-1/2
      w-0 h-0
      border-l-[6px] border-r-[6px] border-t-[6px]
      border-l-transparent border-r-transparent border-t-[#17AAE1]
    "
          />
        </div>
      </div>
      <p className="text-[14px] md:text-lg lg:text-[28px] text-[#1E1E1E]">
        {label}
      </p>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="bg-white text-center px-4 md:px-[40px] lg:px-[60px] py-8">
      <h2 className="text-[#17AAE1] text-[36px] md:text-[80px] mb-8 md:mb-[86px]">
        Medios de contacto
      </h2>
      <div className="gap-8 mb-8 flex flex-wrap justify-center md:gap-12 md:mb-[75px]">
        <ContactItem
          href="mailto:atencionalcliente@argenpesos.com.ar"
          ariaLabel="Enviar correo a Atención al cliente"
          icon={Email}
          label="Mail"
          tooltip="atencionalcliente@argenpesos.com.ar"
        />

        <ContactItem
          href="tel:0800-220-2743"
          ariaLabel="Llamar a ArgenPesos"
          icon={Telephone}
          label="Teléfono"
          tooltip="0800-220-2743"
        />

        <ContactItem
          href="https://api.whatsapp.com/send?phone=541168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar"
          ariaLabel="Contactar a ArgenPesos por WhatsApp"
          icon={Whatsapp}
          label="Whatsapp"
          tooltip="+54 11 6816-4074"
        />

        <ContactItem
          href="https://www.instagram.com/argenpesos"
          ariaLabel="Visitar el Instagram de ArgenPesos"
          icon={Instagram}
          label="Instagram"
          tooltip="@argenpesos"
        />

        <ContactItem
          href="https://www.facebook.com/p/ArgenPesos-61577080799765/"
          ariaLabel="Visitar el Facebook de ArgenPesos"
          icon={Facebook}
          label="Facebook"
          tooltip="facebook.com/argenpesos"
        />
      </div>

      <div className="bg-[#EC5647] text-white text-[12px] md:text-[24px] py-2 px-4 md:py-[27px] md:px-[16px] rounded-lg mx-auto w-full md:w-3/4">
        <p>
          Horarios de atención: Lunes a viernes de 8:00 a 20:00 Hs. – Sábados:
          de 9:00 a 13:00 Hs.
        </p>
      </div>
    </section>
  );
}
