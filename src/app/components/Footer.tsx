import logo from '../../../public/logo.png'
import QR from '../../../public/DATAWEB.jpg'
import usuariofinanciero from '../../../public/usuariofinanciero.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import FooterForms from './FooterForms'

export default function Footer() {
    return (
        <footer className="max-w-full flex flex-col gap-[50px] md:gap-[106px] p-4 md:p-[40px] 2xl:p-20  lg:py-[74px] lg:px-[40px] border-t-[1px] border-t-[#BEBEBE]">
            <div className="w-full flex flex-col md:flex-row  justify-between lg:items-start">
                <div className="flex flex-col items-center justify-center mb-[20px] gap-2">
                    <Link href="/" passHref>
                            <Image 
                                src={logo} 
                                alt="ArgenPesos Logo" 
                                className="mb-4 md:mr-[80px] w-[110px] h-[52px] xl:w-[150px] xl:h-[65px] 2xl:w-[190px] 2xl:h-[80px]" 
                            />
                    </Link>                    <Link href="http://qr.afip.gob.ar/?qr=h7BGKxDe84z8C41OZoy9tQ,," target='__blank'>
                        <Image src={QR} alt='QR_AFIP' width={80} height={90}/>
                    </Link>
                    <Link href="http://usuariosfinancieros.gob.ar/" target='__blank'>
                        <Image src={usuariofinanciero} alt='usuariofinanciero' width={200} height={60}/>
                    </Link>
                </div>
                <div className='flex flex-col w-full lg:flex-row lg:text-start text-center items-center justify-evenly 2xl:justify-center 2xl:px-8 lg:items-start gap-[14px] md:gap-[28px] xl:gap-[30px]'>
                    <div className="flex flex-col text-[10px] md:text-[12px] xl:text-sm items-center lg:items-start">
                        <p className="text-[#888] font-bold mb-2 text-center md:text-left">NUESTROS SERVICIOS</p>
                        <ul className="space-y-1">
                        <li className="text-[#17AAE1] font-bold whitespace-nowrap">- PRÉSTAMOS</li>
                        <li className="text-[#EC5647] font-bold whitespace-nowrap overflow-hidden">
                            <Link href="https://www.argencompras.ar" target='_blank'>
                            - ARGENCOMPRAS
                            </Link>
                        </li>
                        <li className="text-[#6104EE] font-bold whitespace-nowrap overflow-hidden">
                            <Link href="https://www.cuponizate.com.ar" target='_blank'>
                            - CUPONIZATE
                            </Link>
                        </li>
                        <li className="text-[#888] font-bold whitespace-nowrap">
                            <Link href="/micuenta">
                            - CONSULTÁ TU CUENTA
                            </Link>
                        </li>
                        <li className="text-[#888] font-bold whitespace-nowrap">
                            <Link href="https://api.whatsapp.com/send?phone=541168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar" target='__blank'>
                            - DUDAS O RECLAMOS
                            </Link>
                        </li>
                        </ul>
                    </div>

                    <div className="flex flex-col text-[10px] md:text-[12px] xl:text-sm items-center lg:items-start w-[206px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                        <p className="text-[#888] font-bold mb-2">SOBRE NOSOTROS</p>
                        <ul className="space-y-1">
                            <li className="text-[#888]">
                                <Link href="/institucional">
                                Quienes somos
                                </Link>
                            </li>
                            <li className="text-[#888]">
                            <Link href="/responsabilidad-social">
                            Responsabilidad social
                            </Link>
                        </li>
                        <li className="text-[#888]">
                            <Link href="/sucursales" target='_blank'>
                            Nuestras sucursales
                            </Link>
                        </li>
                        <li className="text-[#888]">
                            <Link href="/medios-de-pago" target='_blank'>
                            Medios de Pago
                            </Link>
                        </li>
                        <li className="text-[#888]">
                            <Link href="/preguntas-frecuentes" target='_blank'>
                            Preguntas frecuentes
                            </Link>
                        </li>
                        <li className="text-[#888]">
                            <Link href="./TERMINOS-Y-CONDICIONES-2024.docx" download>
                            Términos y condiciones
                            </Link>
                        </li>
                        <li className="text-[#888]">
                            <a href="./POLITICAS_DE_PRIVACIDAD 2024.docx" download>
                            Políticas de privacidad
                            </a>
                        </li>
                        <li className="text-[#888]">
                            <a href="./Comisiones-Cargos-y-Tasas.docx" download>
                            Información de tasas
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-[10px] md:text-[12px] xl:text-sm text-center lg:text-start items-center lg:items-start lg:max-w-[320px]  text-wrap">
                    <ul className="space-y-1 w-full">
                        <li className="text-[#EC5647]">
                            <Link href="boton_arrepentimiento">
                            Botón de arrepentimiento
                            </Link>
                        </li>
                        <li className="text-[#17AAE1]">
                            <Link href="boton_baja">
                            Botón de Baja
                            </Link>
                        </li>
                        <li className="text-[#888] font-bold text-wrap">
                            <Link href="./SOLICITUD-MANUAL-ARGEN.docx" download>
                            Contratos de adhesión - Ley 24.240 de Defensa del Consumidor
                            </Link>
                        </li>
                        <li className="text-[#888] relative group">
                            Defensa del Consumidor
                            <ul className="hidden lg:group-hover:block absolute bg-white space-y-1 border-gray-300 rounded">
                            <li className="text-[#888] text-wrap">
                                <Link href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/leyes-proteccion-consumidor" target='__blank'>
                                Legislación Derecho de los Consumidores
                                </Link>
                            </li>
                            <li className="text-[#888]">
                                <Link href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor" target='__blank'>
                                Dónde y cómo reclamar
                                </Link>
                            </li>
                            <li className="text-[#888]">
                                <Link href="https://autogestion.produccion.gob.ar/consumidores" target='__blank'>
                                Defensa de las y los consumidores
                                </Link>
                            </li>
                            <li className="text-[#888]">
                                <Link href="https://www.argenpesos.com.ar/public/storage/pdf/Jurisdiccion%20en%20caso%20de%20litigio.pdf" target='__blank'>
                                Jurisdicción en caso de litigio
                                </Link>
                            </li>
                            <li className="text-[#888]">
                                <Link href="https://www.argenpesos.com.ar/public/storage/pdf/Protecion%20de%20Datos%20Personales.pdf" target='__blank'>
                                Protección de datos personales
                                </Link>
                            </li>
                            </ul>
                        </li>
                        <li className="lg:hidden text-[#888] text-wrap">
                                <Link href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/leyes-proteccion-consumidor" target='__blank'>
                                Legislación Derecho de los Consumidores
                                </Link>
                            </li>
                            <li className="lg:hidden text-[#888]">
                                <Link href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor" target='__blank'>
                                Dónde y cómo reclamar
                                </Link>
                            </li>
                            <li className="lg:hidden text-[#888]">
                                <Link href="https://autogestion.produccion.gob.ar/consumidores" target='__blank'>
                                Defensa de las y los consumidores
                                </Link>
                            </li>
                            <li className="lg:hidden text-[#888]">
                                <Link href="https://www.argenpesos.com.ar/public/storage/pdf/Jurisdiccion%20en%20caso%20de%20litigio.pdf" target='__blank'>
                                Jurisdicción en caso de litigio
                                </Link>
                            </li>
                            <li className="lg:hidden text-[#888]">
                                <Link href="https://www.argenpesos.com.ar/public/storage/pdf/Protecion%20de%20Datos%20Personales.pdf" target='__blank'>
                                Protección de datos personales
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <FooterForms/>
                </div>
            </div>
            <div className="w-full text-[#888] text-[10px] md:text-[12px] xl:text-md text-center break-words overflow-hidden">
                <p className='mb-[40px]'>Préstamos personales con cuotas fijas y en pesos. Otorgamos máximo $1.000.000 y mínimo $30.000 en un plazo máximo de 15 meses y un mínimo de 6 meses. El efectivo otorgamiento del préstamo y sus condiciones se encuentran sujetos a verificación del departamento de análisis de riesgo crediticio. Tasa nominal anual (TNA): mínima 381,59%, máxima 458,40%. Ejemplo de préstamo: Cliente nuevo, te prestamos $10.000 en 12 cuotas y nos devolvés $3.300 por mes.
                Cliente renovador, te prestamos $10.000 en 12 cuotas y nos devolvés $2.900 por mes. Préstamo destinado a consumo, te prestamos $10.000 en 12 cuotas y nos devolvés $2.600 por mes. Tasa efectiva anual (TEA): mínima: 381,59%, máxima: 458,40%. 
                <span className='font-bold'>COSTO FINANCIERO TOTAL NOMINAL ANUAL</span> (CFTNA): mínima:381,59%, máxima: 458,40%</p>
                <p>Argencred S. A. CUIT 30-70910041-2 - Reconquista 660 CABA - <Link href="mailto:info@argenpesos.com.ar" target='__blank'><span className='font-bold'>info@argenpesos.com.ar</span></Link></p>
            </div>
        </footer>
    )
}