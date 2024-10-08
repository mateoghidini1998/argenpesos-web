import React from 'react'
import BotonBajaForm from '../components/forms/BotonBajaForm'

export default function BotonBaja() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center mt-[132px]'>
        <div className='boton_arrepentimiento flex items-center justify-center w-full'>
            <h1 className='text-white text-center w-[450px] my-[50px] tracking-widest-[2px] text-[50px]'>BAJA DE TU PRÉSTAMO POR PRECANCELACIÓN</h1>
        </div>
        <div className='w-full'>
            <div className='px-20 my-[50px]'>
                <p className='text-center text-base text-[#333]'>En el caso de solicitar la baja de su préstamo, deberá precancelarlo totalmente. No se cobrarán comisiones cuando al momento de efectuar la precancelación, haya transcurrido al menos la cuarta parte del plazo original de la financiación, o 180 (ciento ochenta) días corridos desde su otorgamiento, de ambos el mayor. ARGENCRED S.A (ARGENPESOS) se compromete a aceptar la cancelación anticipada de acuerdo a las condiciones establecidas en la cláusula de “Precancelación.” de la Solicitud de Préstamo respectiva, la que comprenderá a capital adeudado más los intereses devengados hasta la fecha de cancelación efectiva. </p>
            </div>
        </div>
        <BotonBajaForm title={'Precancelar Préstamo'}/>
        <div className='w-full flex flex-col gap-[20px] container my-[50px]'>
            <b>PROCEDIMIENTO DE BAJA DE PRÉSTAMO (PRECANCELACION)</b>
            <ol className='list-decimal'>
                <li>Enviar e-mail a info@argenpesos.com.ar indicando en el asunto “SOLICITUD DE PRECANCELACIÓN DE PRÉSTAMO” e indicando, también en el asunto, su nombre completo y su DNI. </li>
                <li>En respuesta a su e-mail, ARGENCRED S.A (ARGENPESOS) le enviará un certificado de pre cancelación en el que indicará el número de trámite / gestión con el que se registró su pedido, el importe a por precancelación, el importe a pagar en concepto de comisión por precancelación y las instrucciones para transferir a una cuenta bancaria que la entidad le indique en el presente email junto con el importe que corresponda a la pre cancelación y los gastos asociados a la misma. </li>
                <li>Enviar e-mail a indicando en el asunto “COMPROBANTE DE PAGO DE PRECANCELACIÓN” e indicando, también en el asunto, su nombre completo y su DNI y adjuntando a dicho mail el comprobante de la transferencia realizada a favor de ARGENCRED S.A (ARGENPESOS) </li>
                <li>En respuesta a su e-mail ARGENCRED S.A (ARGENPESOS) le enviará un mail confirmando la concreción de la baja por precancelación, haciendo referencia al numero de trámite / gestión comunicado originalmente. <b>IMPORTANTE:</b> La precancelación del préstamo estará sujeto a la comprobación por parte de ARGENCRED S.A (ARGENPESOS) del ingreso efectivo de los fondos en la cuenta que la entidad le haya informado, por el importe correcto, y se realizará dentro de las 48hs de corroborada la acreditación. </li>
                <li>En aquellos casos en que el pago del préstamo se realice a través de débito en cuenta, en el eventual supuesto que por razones operativas se produzcan débitos posteriores a la precancelación efectuada, los importes debitados serán reintegrados en el plazo de 24 hs. </li>
            </ol>
        </div>
    </section>
  )
}
