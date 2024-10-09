"use client";
import { useState } from "react";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (e) => {
      e.preventDefault();
      router.push('/?openChat=true');
  };
  const faqs = [
    {
      category: {
        title: "CÓMO FUNCIONA ARGENPESOS",
        questions: [
          {
            text: "¿QUÉ ES ARGENPESOS Y CÓMO FUNCIONA? ",
            content: (
              <>
              <p>Somos una entidad de préstamos personales de dinero. Podés realizar el trámite online en: <Link href="/" onClick={handleClick} className="text-lightblue-primary font-bold">https://argenpesos.com.ar/saca_tu_prestamo</Link> o a través de cualquiera de nuestros canales de contacto: </p>
              <ul>
                  <li>-Tel: 0800-220-2743</li>
                  <li>-WhatsApp: 
                    <Link href="https://api.whatsapp.com/send?phone=01168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">+54 9 11 6816-4074</Link>
                  </li>
                  <li>-Mail: 
                    <Link href="mailto:info@argenpesos.com.ar?subject=MAIL%20DESDE%20WEB" target="__blank" className="text-lightblue-primary underline">info@argenpesos.com.ar</Link>
                  </li>
                  <li>-Facebook: 
                    <Link href="https://www.facebook.com/argenpesos" target="__blank" className="text-lightblue-primary underline">Argenpesos</Link>
                  </li>
                  <li>-También podés realizarlo de manera presencial en cualquiera de nuestras sucursales. </li>
                  <li><Link href="/sucursales" className="text-lightblue-primary underline">-Sucursales de Argenpesos</Link></li>
              </ul>
              </>
            )
          },
          {
            text: "¿CUÁNTO SE PUEDE PEDIR Y EN CUÁNTAS CUOTAS? ",
            content: (
              <p>En ARGENPESOS ofrecemos préstamos desde $3.000 a $250.000 y hasta en 24 cuotas. El monto final a otorgar, dependerá del análisis crediticio que la empresa realiza con los datos ingresados por el cliente en el formulario web o enviado a través de alguno de nuestros canales de comunicación.</p>
              )
            },
          {
            text: "¿CUÁL ES LA TASA DE INTERÉS? ",
            content: (
              <p>La tasa de interés varía según el tipo de préstamo y la cantidad de cuotas a la que haya accedido el cliente. Para conocer esto, podés ingresar a <a href="www.argenpesos.com.ar/solicitarprestamo/" className="text-lightblue-primary underline">http://www.argenpesos.com.ar/solicitarprestamo/</a></p>
            )
          },
        ],
      },
    },
    {
      category: {
        title: "ARGENPESOS SUCURSALES",
        questions: [
          {
            text: "¿CUÁLES SON LOS PASOS PARA EL OTORGAMIENTO DEL PRÉSTAMO? ",
            content: (
              <ul>
                  <li>1º Acercate a nuestra sucursal con: DNI, último recibo de haberes, servicio, movimientos y cbu.</li>
                  <li>2° Aprobamos o rechazamos tu solicitud</li>
                  <li>3° Te llevás el dinero en el acto.</li>
              </ul>
            )
          },
          {
            text: "¿CUÁNDO Y CÓMO SE PAGAN LAS CUOTAS? ",
            content: (
              <p>Las cuotas vencen el 1 de cada mes y se puede abonar sin recargo hasta el día 10. Dependiendo el plan otorgado, pueden debitarse de la cuenta bancaria o pueden abonarse través de cualquiera de nuestros <Link href="/medios-de-pago " className="text-lightblue-primary underline" target="__blank">medios de pago</Link>. </p>
            )
          },
          {
            text: "¿CÓMO HAGO PARA RENOVAR MI PRÉSTAMO?",
            content: (
              <p>Podés consultar tu renovación al <Link href="https://api.whatsapp.com/send?phone=01168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">+54 9 11 6816-4074</Link> y/o a <Link href="mailto:info@argenpesos.com.ar?subject=MAIL%20DESDE%20WEB" target="__blank" className="text-lightblue-primary underline">info@argenpesos.com.ar</Link> o acercarte a nuestras sucursales.</p>
            )
          },    
        ],
      }, 

    },
    {
      category: {
        title: "ARGENPESOS ONLINE",
        questions: [
          {
            text: "¿CUÁLES SON LOS PASOS PARA EL OTORGAMIENTO DEL PRÉSTAMO? ",
            content: (
            <ul>
                  <li>1º - Envianos tu solicitud: Se puede solicitar en <Link href="/" onClick={handleClick} target="__blank" className="text-lightblue-primary font-bold">https://argenpesos.com.ar/saca_tu_prestamo</Link> o enviando los datos a través de alguno de nuestros canales de comunicación. </li>
                  <li>2º - Aprobación: Analizaremos los datos ingresados y se pre-aprueba o rechaza la solicitud. </li>
                  <li>3º - Contacto con el cliente: todos los clientes cuya solicitud fue preaprobada, reciben una llamada, whatsapp o mail de alguno de nuestros asesores de venta, quien realizará una verificación de identidad y completa los datos del cliente. </li>
                  <li>4º - Confirmación del otorgamiento: una vez confirmado el préstamo, te enviamos la documentación necesaria para que seas nuestro cliente.</li>
                  <li>5°- Transferencia: se realiza la transferencia del valor acordado a la cuenta bancaria del cliente.</li>
                  <li>6º - Acreditación: el cliente recibe en su cuenta bancaria el dinero del préstamo otorgado.</li>
              </ul>
            )
          },
          {
            text: "¿CUÁNDO Y CÓMO RECIBO EL PRÉSTAMO? ",
            content: (
              <p className="font-bold">Una vez que el otorgamiento del préstamo fue confirmado, la acreditación (ver el dinero en la cuenta) demora hasta 48 horas hábiles. El tiempo de acreditación depende del banco del cliente. El dinero es depositado en la cuenta bancaria tipo sueldo que ingresaste en el formulario y confirmaste con el asesor de Ventas.</p>
            )
          },
          {
            text: "¿CUÁNDO Y CÓMO SE PAGAN LAS CUOTAS? ",
            content: (
              <p>
              Las cuotas se debitan de mensualmente de la cuenta bancaria del cliente.
              </p>
            )
          },
          {
            text: "¿CÓMO HAGO PARA RENOVAR MI PRÉSTAMO? ",
            content: (
              <p>Podés consultar tu renovación al <Link href="https://api.whatsapp.com/send?phone=01168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">+54 9 11 6816-4074</Link> y/o a <Link href="mailto:info@argenpesos.com.ar?subject=MAIL%20DESDE%20WEB" target="__blank" className="text-lightblue-primary underline">info@argenpesos.com.ar</Link> o acercarte a nuestras sucursales.</p>
            )
          },
        ]
      },
    },
    {
      category: {
        title: "QUIERO SOLICITAR UN PRÉSTAMO ONLINE",
        questions: [
          {
            text: "¿QUÉ REQUISITOS NECESITO? ",
            content: (
            <ul>
                  <li>Ser mayor de 18 años </li>
                  <li>DNI</li>
                  <li>Poseer recibo de haberes</li>
                  <li>Ser titular de una cuenta bancaria de tipo sueldo </li>
              </ul>
            )
          },
          {
            text: "ESTOY EN EL VERAZ… ¿PUEDO ACCEDER A UN PRÉSTAMO? ",
            content: (
            <p>Si, dependiendo del banco por el cual percibas tus haberes. </p>
            )
          },
          {
            text: "¿CÓMO SÉ SI MI SOLICITUD FUE APROBADA O RECHAZADA?",
            content: (
              <p>En ambas ocasiones, recibirás un correo electrónico o llamada telefónica en la que se te informará. </p>
            )
          },
          {
            text: "¿QUÉ SIGNIFICA QUE MI SOLICITUD ESTÁ EN 'ANÁLISIS'?",
            content: (
            <p>Si tu solicitud está “en análisis”, significa que se está realizando la evaluación de los datos que nos brindaste para ver si es posible que accedas en este momento a algún préstamo. Deberás esperar la confirmación final en tu casilla de mail, vía telefónica, o Whatsapp. </p>
            )
          },
          {
            text: "¿POR QUÉ MI SOLICITUD FUE RECHAZADA? ",
            content:(
            <p>Hay diversos motivos por los cuales tu solicitud pudo haber sido rechazada. Una de ellas puede ser que no cumplas con todos o alguno de los requisitos antes mencionados. Otra razón puede ser que, por tu situación actual crediticia, el sector de Análisis de ARGENPESOS considere que por el momento no estamos en condiciones de otorgarte un préstamo. </p>
            )
          },
          {
            text: "MI SOLICITUD FUE APROBADA, ¿Y AHORA?",
            content:(
            <p>Si tu solicitud fue aprobada, deberás esperar que un asesor de ventas se contacte con vos para contarte las opciones de préstamos disponibles que tenés y para combinar con vos el otorgamiento. Para ese momento, te recomendamos tener a mano tu DNI, CBU y movimientos*.
      
              *¿Qué es el CBU?: Es un número de 22 dígitos, que identifica una cuenta bancaria de manera única en todo el sistema financiero argentino.
              
              *¿Cómo me entero del CBU de mi Cuenta Sueldo?:Podés obtener tu número de CBU desde el cajero automático, ingresando en “Consultas” → Número de CBU. También podés consultarlo desde la página web de Home Banking de tu banco. </p>
              )
          },
        ]
      },
    },
    {
      category: {
        title: "SOBRE MI PRÉSTAMO APROBADO ONLINE",
        questions: [
          {
            text: "¿EN CUÁNTO TIEMPO PUEDO VER EL DINERO ACREDITADO EN MI CUENTA?",
            content: (
            <p>
            Una vez que el otorgamiento del préstamo fue confirmado, la acreditación (ver el dinero en la cuenta) demora hasta 48 horas hábiles.
            </p>
            )
          },
          {
            text: "YA PASARON 48 HORAS HÁBILES Y AÚN NO RECIBÍ EL DINERO EN MI CUENTA, ¿QUÉ HAGO? ",
            content: (
            <p>
            Si ya transcurrió el tiempo máximo de espera para la acreditación, comunicate a la brevedad con nosotros al 0800-345-2733 o via mail a info@argenpesos.com.ar informando esta situación, para que podamos revisar qué sucedió y para que podamos ayudarte a resolverlo cuanto antes.
            </p>
            )
          },
        ]
      },
    },
    {
      category: {
        title: "ACERCA DE CONSULTÁ TU CUENTA",
        questions: [
          {
            text: "¿POR QUÉ DEJAR DE SER DEUDOR? ",
            content: (
            <p>
            La mora financiera ocasiona pérdida del crédito personal, intimaciones permanentes y problemas jurídicos. Diversas situaciones pueden conducirnos al incumplimiento a pesar de que tengamos el deseo de pagar. 
            Por eso creamos <strong>ArgenPagos</strong>, para facilitarte la consulta de tu cuenta <strong>más rápido y fácil que nunca.</strong>
            </p>
            )
          },
          {
            text: "¿CÓMO SE COMPONE UNA DEUDA ACTUALIZADA? ",
            content:(
              <p>
            A la deuda inicial se le suma:
      
            El interés compensatorio <strong>"compensa"</strong> al acreedor por el tiempo en que éste <strong>"cede"</strong> su dinero al deudor. Este interés sólo se debe si se ha pactado previamente, con excepción de los <strong>"compensatorios legales"</strong> (Artículos 466, 1950 y 2298 del Código Civil) y sólo es aplicable a la obligación contractual, a diferencia del Moratorio que es aplicable a todas las obligaciones.
      
            Es el interés que se produce ante la falta de pago del capital en la fecha estipulada. En este caso el Acreedor (prestamista) tiene derecho <strong>"a penar"</strong> al deudor por no haberle abonado en término. Estos intereses aplican una tasa mayor que los intereses compensatorios. Es decir, es el interés causado por incumplimiento de la obligación pactada. 
            </p>
            )
          },
        ]
      },
    },
    {
      category: {
        title: "¿CÓMO PAGO MI PRÉSTAMO? ONLINE Y SUCURSALES",
        questions: [
          {
            text: "¿CUÁNDO Y CÓMO PAGO LAS CUOTAS DE MI PRÉSTAMO? ",
            content: (
            <p>
            Dependiendo el plan otorgado, las cuotas de tu préstamo serán debitadas de forma automática de la misma cuenta bancaria en la que te depositamos el dinero o deberás abonar a través de cualquier de nuestros <Link href="/medios-de-pago" target="__blank" className="text-lightblue-primary underline">medios de pago</Link>. Las cuotas vencen el 1 de cada mes y se puede abonar sin recargo hasta el día 10. Si te olvidaste el valor de las cuotas podrás consultar al 0800-345-2733 o por mail a <Link href="mailto:cobranzas@argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">cobranzas@argenpesos.com.ar</Link>
            </p>
            )
          },
          {
            text: "¿QUÉ VENTAJAS TENGO AL PAGAR LAS CUOTAS A TÉRMINO? ",
            content:(
              <p><strong>Teniendo tus cuotas al día participás automáticamente de diferentes sorteos y premios.</strong> Podés conocer más en <Link href="https://www.instagram.com/argenpesos/" target="__blank" className="text-lightblue-primary underline">https://www.instagram.com/argenpesos/</Link>
            </p>
            )
          },
          {
            text: "¿CÓMO SÉ SI LA CUOTA FUE DEBITADA CORRECTAMENTE DE MI CUENTA?",
            content: (
            <p>La forma más fácil y segura de confirmar si la cuota fue debitada correctamente de tu cuenta es revisar los movimientos bancarios a través del cajero o del home banking de tu banco. Si llegaras a identificar alguna irregularidad con el débito de tu cuota, por favor comunicate a la brevedad con nosotros al 0800-220-2743 o vía mail a <Link href="mailto:cobranzas@argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">cobranzas@argenpesos.com.ar</Link>
            </p>
            )
          },
          {
            text: "¿QUÉ PASA SI LA CUOTA NO FUE DEBITADA EN TIEMPO Y FORMA DE MI CUENTA?",
            content: (
            <p>Una de las razones para que la cuota no haya podido ser debitada en tiempo y forma es la falta de fondos. Si estás seguro de contar con el dinero suficiente en tu cuenta para pagar la cuota y aun así ésta no fue debitada, por favor entrá en contacto a la brevedad con el sector de Cobranzas Argenpesos al 0800-220-2743 o vía mail a <Link href="mailto:cobranzas@argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">cobranzas@argenpesos.com.ar</Link>
            </p>
            )
          },
          {
            text: "CREO QUE SE ME HICIERON DÉBITOS INCORRECTOS EN MI CUENTA, ¿QUÉ HAGO?",
            content: (
            <p>Si creés que hubo algún error en los débitos realizados por ARGENPESOS en tu cuenta bancaria, por favor mandanos un mail <Link href="mailto:cobranzas@argenpesos.com.ar" target="__blank" className="text-lightblue-primary underline">cobranzas@argenpesos.com.ar</Link> con tu nombre y apellido, DNI y los comprobantes de esos débitos. Es importante que sea una imagen clara y nítida, donde se pueda ver: fecha, nombre de quien realiza el débito, valor, saldo y datos de la cuenta. El sector de Reclamos analizará tu situación y se pondrá en contacto con vos en cuanto tengan una respuesta para darte. 
            </p>
            )
          },
        ]
      }
    }, 
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="w-full h-full mt-[140px] md:mt-[140px] lg:mt-[180px]" >
      <section className="w-full h-full px-10 md:px-52 flex flex-col jusitfy-center items-center mb-[50px]">
        <h1 className="text-lightblue-primary text-center text-[38px] md:text-heading mb-10 md:mb-[160px]">
          Preguntas Frecuentes
        </h1>
        <div className="flex flex-col gap-4">
        {faqs.map((faqCategory, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col gap-6 mb-4 md:mb-8">
              {/* Mostramos el título de la categoría */}
              <h3 className="text-[24px] md:text-[40px] font-bold text-center text-orange-primary mb-4">
                {faqCategory.category.title}
              </h3>
              {/* Mapeamos sobre las preguntas de la categoría */}
              {faqCategory.category.questions.map((faq, index) => (
                <FAQ
                  key={index}
                  text={faq.text}
                  content={faq.content}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
