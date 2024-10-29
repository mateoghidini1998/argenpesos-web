import React from 'react'
import UsuarioFinancieroCard from '../components/UsuarioFinancieroCard'
import Link from 'next/link'
import Image from 'next/image'
import ContactoBCRA from "../../../public/Afiche-A3-BCRA-Normas-CONTACTATE-Diciembre-2017.jpg"
import BajaProducto from "../../../public/Afiche-A3-BCRA_Normas-BAJA-DE-PRODUCTOS-Junio_2019.jpg"

export default function UsuarioFinanciero() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center mt-[80px] md:mt-[100px] lg:mt-[132px]'>
        <div className='boton_arrepentimiento flex items-center justify-center w-full'>
            <h1 className='text-white text-center w-[600px] my-[50px] tracking-widest-[2px] text-[40px] md:text-[50px]'>
            INFORMACIÓN PARA
            EL USUARIO DE SERVICIOS
            FINANCIEROS
            </h1>
        </div>
        <div className='w-full flex flex-col gap-[20px] p-4 md:p-8 lg:p-12 xl:p-20 container my-[50px]'>
            <UsuarioFinancieroCard>
              <div className='flex items-center justify-center text-white font-bold rounded-full bg-[#E84729] h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-sm md:text-lg'>
                  1
              </div>
              <div className='flex flex-col flex-1 text-[10px] sm:text-base'>
                  <b>Medios para comunicarse con Argenpesos para consultas y/o reclamos:</b>
                  <ul>
                      <li>Mail: info@argenpesos.com.ar </li>
                      <li>Teléfono: (011) 7078-6500 interno 2 </li>
                      <li>Domicilio: Reconquista 660, CABA.</li>
                  </ul>
              </div>
            </UsuarioFinancieroCard>
            <UsuarioFinancieroCard>
              <div className='flex items-center justify-center text-white font-bold rounded-full bg-[#E84729] h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-sm md:text-lg'>
                  2
              </div>
              <div className='flex flex-col flex-1 text-[10px] sm:text-base'>
                  <ul>
                      <li><b>Responsable de Atención al usuario:</b> Betina Herrera</li>
                      <li><b>Responsable suplente: </b> María José Castro Almeyra</li>
                      <li><b>Domicilio Laboral:</b> Reconquista 660, CABA</li>
                      <li><b>Teléfono:</b> (011) 7078-6500 interno 2</li>
                  </ul>
              </div>
            </UsuarioFinancieroCard>
            <UsuarioFinancieroCard>
              <div className='flex items-center justify-center text-white font-bold rounded-full bg-[#E84729] h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-sm md:text-lg'>
                  3
              </div>
              <div className='flex flex-col flex-1 text-[10px] sm:text-base'>
                <p>Toda consulta y/o recalamo será respondido dentro de un plazo máximo de diez (10) días hábiles. En caso de que este plazo, no fuese contestado o se encuentre disconforme con la respuesta brindada por el Proveedor podrá informar tal situación al Banco Central de la República Argentina. El Banco Central de la República Argentina dispone de un área de Protección al Usuario de Servicios Financieros que podrá contactar ingresando a: <Link className='text-lightblue-primary font-bold underline' href='www.usuariosfinanciero.gob.ar'>www.usuariosfinanciero.gob.ar</Link></p>
              </div>
            </UsuarioFinancieroCard>
        </div>
        <div className='flex flex-col sm:flex-row p-4 sm:p-6 md:p-8'>
          <Link href="http://www.bcra.gob.ar/Imagenes/BCRAyVos/Usuario_Financiero/01-Afiche-A3-BCRA-Normas-CONTACTATE-Diciembre-2017.jpg" target='__blank'>
            <Image alt='Contacto BCRA' src={ContactoBCRA} className='w-[300px] h-[430px]'/>
          </Link>
          <Link href="http://www.bcra.gob.ar/Imagenes/BCRAyVos/Usuario_Financiero/05%20Afiche%20A3%20BCRA_Normas%20BAJA%20DE%20PRODUCTOS%20Junio_2019.jpg" target='__blank'>
            <Image alt='Baja BCRA' src={BajaProducto} className='w-[300px] h-[430px]'/>
          </Link>
        </div>
    </section>
  )
}
