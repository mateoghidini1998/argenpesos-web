import React from 'react'
import BotonArrepentimientoForm from '../components/forms/BotonArrepentimientoForm'

export default function BotonArrepentimiento() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center mt-[152px]'>
        <div className='boton_arrepentimiento flex items-center justify-center w-full'>
            <h1 className='text-white text-center w-[360px] my-[50px] tracking-widest-[2px] text-[50px]'>DEVOLUCIÓN DE TU PRÉSTAMO</h1>
        </div>
        <div className='w-full'>
            <div className='px-20 my-[50px]'>
                <p className='text-center text-base text-[#333]'>Usted tiene derecho a revocar la contratación del Préstamo dentro del plazo de diez (10) días corridos contados a partir de que el mismo fue puesto a su disposición en su cuenta bancaria o abonado al comercio, según corresponda. Dicha revocación será sin costo ni responsabilidad alguna para usted. </p>
            </div>
        </div>
        <BotonArrepentimientoForm title={'Devolvé tu préstamo'}/>
        <div className='w-full flex flex-col gap-[20px] container my-[50px]'>
            <b>PROCEDIMIENTO DE REVOCACIÓN</b>
            <b>A) Prestamos en efectivo.</b>
            <ol className='list-decimal'>
                <li>Enviar e-mail a info@argenpesos.com.ar indicando en el asunto “SOLICITUD DE REVOCACIÓN DE PRÉSTAMO” e indicando, también en el asunto, su nombre completo, su DNI y adjuntando a dicho mail el comprobante de la transferencia realizada a favor de ARGENCRED S.A (ARGENPESOS). </li>
                <li>En respuesta a su email, ARGENCRED S.A (ARGENPESOS) le indicará el número de cuenta a donde debe realizarse la transferencia. </li>
                <li>Una vez realizada dicha transferencia deberá remitir el comprobante al siguiente correo info@argenpesos.com.ar. 
                <b> IMPORTANTE:</b> La cancelación del préstamo estará sujeta a la comprobación por parte de ARGENCRED S.A (ARGENPESOS) del ingreso de los fondos en la cuenta suministrada por la ENTIDAD para tal fin y se realizará dentro de las 48hs de comprobada la acreditación. </li>
            </ol>
            <b>B) Prestamos dirigido a financiar la adquisición de un bien determinado.</b>
            <ol className='list-decimal'>
                <li>Proceder a rescindir la operación de compra venta del bien y a reintegrar éste al vendedor obteniendo del mismo comprobante de su conformidad. </li>
                <li>Enviar e-mail a info@argenpesos.com.ar indicando en el asunto “SOLICITUD DE REVOCACIÓN DE PRÉSTAMO” e indicando, también en el asunto, su nombre completo, su DNI y adjuntando en el cuerpo del mail el comprobante de rescisión de la operación de compra venta del bien y de reintegro del mismo al comercio vendedor involucrado.  </li>
                <li>En respuesta a su e-mail ARGENCRED S.A. (ARGENPESOS) le enviará un mail confirmando la concreción de la revocación del crédito e informado número de tramite o gestión con el que se registró su pedido.
                <b> IMPORTANTE:</b> En estos supuestos, sin perjuicio del envío de la documentación respectiva por su parte indicada en el Punto 2, la revocación estará sujeta a la efectiva comprobación por parte de ARGENCRED S.A (ARGENPESOS) ante el comercio involucrado, que la rescisión de la operación de compra venta ha sido efectivamente realizada. </li>
            </ol>
        </div>
    </section>
  )
}
