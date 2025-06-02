import React from 'react'
import { AccordionInstitucional } from '../components/Accordion'


export default function Institucional() {
  return (
    <>
    <main className='w-full h-full mt-[80px] md:mt-[100px] lg:mt-[152px] p-8 sm:p-12 md:p-20 lg:p-32'>
        <h1 className="text-lightblue-primary text-center text-2xl md:text-heading mb-10">
          <b>¿QUIÉNES</b> SOMOS?
        </h1>
        <p className='text-center mb-10'>
        Somos <b>una empresa que opera desde el 2005 en el Mercado de Créditos para trabajadores, jubilados y
        pensionados.</b> Contamos con 19 sucursales y operamos con más de 400 comercializadores de nuestros productos en todo el país para satisfacer las necesidades de nuestros clientes. Estamos convencidos que con nuestras acciones le damos continuidad a la idea que nos dio origen: <b>dar soluciones crediticias rápidas y fáciles</b> a las necesidades actuales de nuestra comunidad.
        </p>
        <AccordionInstitucional/>
    </main>
    </>
  )
}
