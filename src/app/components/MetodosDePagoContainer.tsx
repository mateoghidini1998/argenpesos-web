"use client"

import { useState } from 'react';
import Image from 'next/image';
import BilleteraVirtual from '../../../public/billetera_virtual.png';
import Debito from '../../../public/debito.png';
import PagoFacil from '../../../public/pagofacil.png';
import RapiPago from '../../../public/rapipago.png';
import MercadoPago from '../../../public/mercadopago.png';
import MetodoDePago from './MetodoDePago';
import QR from './svgs/QR';
import Tarjeta from './svgs/Tarjeta';
import Banco from './svgs/Banco';
import PC from './svgs/PC';
import Market from './svgs/Market';
import { useMediaQuery } from 'react-responsive'

const METODOS_DE_PAGO = [
    { 
      title: "Pago Facil",
       image: PagoFacil,
       description1: "Para abonar la cuota de tu préstamo en efectivo deberás asistir de manera presencial a cualquier sucursal de Pago Fácil y realizar un pago abierto a empresa sin factura a nombre de Argencred S.A o Argenpesos indicando tu DNI.", 
       description2:  <>Ingresá a <a href="https://www.pagofacil.com.ar/" target="_blank" rel="noopener noreferrer">https://www.pagofacil.com.ar/</a> para encontrar la sucursal más cercana.</>,  
       description3: <>Para abonar la cuota de tu préstamo de manera online deberás ingresar a <a href="https://www.e-pagofacil.com/" target="_blank" rel="noopener noreferrer">https://www.e-pagofacil.com/</a></>, 
       description4: "Luego deberás enviar un comprobante con tu número de DNI a atencionalcliente@argenpesos.com.ar o por WhatsApp al 011-6816-4074", 
    },
    { 
      title: "Rapi Pago",
       image: RapiPago,
       description1: <>Para abonar la cuota de tu préstamo por Rapipago deberás asistir de manera presencial a cualquier sucursal (ingresá a <a href="https://rapipago.com.ar" target="_blank" rel="noopener noreferrer">https://rapipago.com.ar</a> para encontrar la sucursal más cercana). Deberás realizar un pago abierto a empresa sin factura a nombre de Argencred S.A o Argenpesos.</>,
       description2: "Indicar CUIL (titular del préstamo) y monto a abonar. ", 
       description3: "", 
       description4: "Luego deberás enviar un comprobante con tu número de DNI a atencionalcliente@argenpesos.com.ar o por whatsapp al 011-6816-4074", 
    },
    { 
      title: "Mercado Pago",
       image: MercadoPago,
       description1: "Para abonar la cuota de tu préstamo por Mercado Pago debes comunicarte por WhatsApp con el sector de cobranzas. Ahí te enviaremos un link de pago con el importe de la cuota para que puedas pagar", 
       description2: "El pago puede hacerse con dinero en cuenta, tarjeta de débito o crédito (este último posee interés).", 
       description3: "", 
       description4: "Luego deberás enviar un comprobante con tu número de DNI a cobranzas@argenpesos.com.ar o por WhatsApp al 011-5022-5639", 
    },
    { 
      title: "Billetera Virtual",
       image: <QR/>,
       description1: "Para abonar la cuota de tu préstamo escanea el QR desde tu billetera virtual favorita y luego ingresá el monto a pagar", 
       description2: "", 
       description3: BilleteraVirtual, 
       description4: "Luego deberás enviar un comprobante con tu número de DNI a atencionalcliente@argenpesos.com.ar o por WhatsApp al 011-6816-4074", 
    },
    { 
      title: "Tarjeta de débito",
       image: <Tarjeta/>,
       description1: "Para abonar la cuota de tu préstamo escanea el QR desde tu billetera virtual favorita y luego ingresá el monto a pagar",
       description2: "", 
       description3: "Paga directamente con tu tarjeta de débito.", 
       description4: "Paga directamente con tu tarjeta de débito.", 
    },
    { 
      title: "Sucursal Argenpesos",
       image: <Market/>,
       description1: "Para abonar la cuota de tu préstamo en una de nuestras sucursales, solamente tenés que acercarte a la más cercana con tu DNI.", 
       description2: <>Consulta tu sucursal más cercana aquí <a href="https://www.argenpesos.com.ar/sucursales" target="_blank" rel="noopener noreferrer">https://www.argenpesos.com.ar/sucursales</a></>, 
       description3: "", 
       description4: "", 
    },
    { 
      title: "Argenpesos.com.ar Consultá tu cuenta",
       image: <PC/>,
       description1: "Para abonar la cuota de tu préstamo ingresa a nuestra página y selecciona “Iniciar Sesión” ", 
       description2: "Si no tenés usuario ingresá a “Aún no tengo usuario” y generá uno solo con tu DNI y una clave.", 
       description3: "Ahí podrás abonar la cuota de tu préstamo y ver tu estado de cuenta", 
       description4: "", 
    },
    { 
      title: "Transferencia Deposito Bancario",
       image: <Banco/>,
       description1: " Para abonar la cuota de tu préstamo por este medio deberás realizar una transferencia / depósito a una de las siguientes cuentas: ", 
       description2: "BANCO GALICIA\nCuenta Corriente en Pesos 3424/1 068/6\nTransferencia CBU 0070068920000003424164\nBBVA FRANCES\nCuenta Corriente en Pesos 039/2222/2\n   Transferencia CBU 01700398-20000000222228", 
       description3: "", 
       description4: "Luego deberás enviar el comprobante con tu número de DNI a atencionalcliente@argenpesos.com.ar o por whatsapp al 011-6816-4074", 
    },
];




export default function MetodosDePagoContainer() {
    const [selectedMethod, setSelectedMethod] = useState(METODOS_DE_PAGO[0]);
    const [trianglePosition, setTrianglePosition] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleClick = (metodo, index) => {
      setSelectedMethod(metodo);
      setTrianglePosition(0);

      if (isMobile) {
        setIsModalOpen(true); 
      }
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="w-full">
        <div className="relative flex flex-wrap items-flex-start justify-evenly gap-8 mb-12">
          {METODOS_DE_PAGO.map((metodo, index) => (
            <div
              key={metodo.title}
              onClick={() => handleClick(metodo, index)}
              className="cursor-pointer"
            >
              <MetodoDePago title={metodo.title} image={metodo.image} />
            </div>
          ))}
        </div>
  
        {isMobile && isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-lg max-w-lg w-full mx-4">
              {/* Botón de cerrar (X) */}
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-[24px] font-bold text-[#00ADEE] mb-4">
                {selectedMethod.title}
              </h2>
              <div className='flex flex-col items-center gap-4'>
                {selectedMethod.description1 && (
                  <p className="text-base text-[#888]">{selectedMethod.description1}</p>
                )}
                {selectedMethod.description2 && (
                  <div className='flex items-center justify-center text-center text-white w-auto p-4 bg-[#00ADEE] rounded-[10px]'>
                    <p className="text-base whitespace-pre-line">
                      {selectedMethod.description2}
                    </p>
                  </div>
                )}
                {selectedMethod.description3 && (
                  <div className='flex items-center justify-center'>
                    {typeof selectedMethod.description3 === 'string' ? (
                        <p className="text-base text-[#888]">{selectedMethod.description3}</p>
                    ) : (
                        <Image src={selectedMethod.description3} alt={selectedMethod.title} width={100} height={100} />
                    )}
                  </div>
                )}
                {selectedMethod.description4 && (
                  <div className='flex items-center justify-center text-center text-white w-auto p-4 bg-[#00ADEE] rounded-[10px]'>
                    <p className="text-base">{selectedMethod.description4}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

  
        {/* Contenido original para desktop */}
        {!isMobile && (
          <div className="relative flex flex-col items-center text-center p-6 border-[2px] border-[#00ADEE] rounded-lg bg-white">
            <div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white z-10"
              style={{
                left: `calc(${trianglePosition} * (150px + 32px) + 50px)`,
              }}
            />
            <div 
              className="absolute -top-[0.8rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-sky-500"
              style={{
                left: `calc(${trianglePosition} * (150px + 32px) + 50px)`,
              }}
            />
        
            <h2 className="text-[64px] font-bold text-[#00ADEE] mb-4">
              {selectedMethod.title}
            </h2>
            <div className='flex flex-col items-center gap-[20px] px-[160px]'>
              {selectedMethod.description1 && (
                <p className="text-lg text-[#888]">{selectedMethod.description1}</p>
              )}
              {selectedMethod.description2 && (
                <div className='flex items-center justify-center text-center text-white w-auto max-w-[1000px] md:px-[80px] py-7 min-h-[80px] md:h-auto bg-[#00ADEE] md:rounded-[20px]'>
                  <p className="text-lg whitespace-pre-line">
                    {selectedMethod.description2}
                  </p>
                </div>
              )}
              {selectedMethod.description3 && (
                <div className='flex items-center justify-center'>
                  {typeof selectedMethod.description3 === 'string' ? (
                      <p className="text-lg text-[#888]">{selectedMethod.description3}</p>
                  ) : (
                      <Image src={selectedMethod.description3} alt={selectedMethod.title} width={100} height={100} />
                  )}
                </div>
              )}
              {selectedMethod.description4 && (
                <div className='flex items-center justify-center text-center text-white w-auto md:px-[80px] py-7 md:h-[100px] bg-[#00ADEE] md:rounded-[20px]'>
                  <p className="text-lg">{selectedMethod.description4}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
      
}

