import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import lupa from "../../../public/lupa.png";
import valores from "../../../public/valores.png";
import manos from "../../../public/manos.png";

import Image from "next/image";

const institucionalData = [
  {
    title: "Visión",
    image: lupa,
    text: "Queremos consolidar nuestra posición de liderazgo dentro de ésta comunidad, fortaleciendo el vinculo con nuestros clientes, siendo la compañía en la que confíen siempre para cubrir sus necesidades.Queremos que cada miembro de Argenpesos se sienta orgulloso de contribuir día a día a cumplir con nuestra misión.",
  },
  {
    title: "Misión",
    image: manos,
    text: "Brindar soluciones crediticias rápidas y fáciles a las necesidades de nuestros clientes basándonos en una relación de confianza para acompañarlos en la realización de sus proyectos.",
  },
  {
    title: "Valores",
    image: valores,
    text: "Nuestra prioridad es preservar a nuestros clientes brindándoles calidez y respeto para crear un vínculo duradero porque creemos firmemente que cada uno de ellos es único para nosotros. La proactividad, eficacia y eficiencia en nuestros procesos nos acercan a nuestra principal preocupación: acompañar a nuestros clientes en cada proyecto. El trabajo en equipo es fundamental para alcanzar nuestros objetivos: consideramos que cada integrante de Argenpesos es protagonista activo en el crecimiento de la compañía. La proximidad y empatía con nuestra comunidad, se ven reflejados en el trabajo de cada una de las personas que integran Argenpesos para hacer que cada cliente se sienta conforme con nuestros servicios.",
  },
];

export function AccordionInstitucional() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      {institucionalData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="py-8">
            <h3 className="text-orange-primary font-bold text-2xl md:text-[32px] ">
              {item.title}
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <Image
                alt={item.title}
                src={item.image}
                className="w-[38px] h-[38px] md:w-[58px] md:h-[58px]"
              />
              <Separator
                orientation="horizontal"
                className="bg-[#e84729] w-full h-[2px] sm:orientation-vertical sm:w-[2px] sm:h-[58px]"
              />
              <p className="text-base">
                {typeof item.text === "string" ? item.text : ""}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
