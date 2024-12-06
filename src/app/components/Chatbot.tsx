"use client";
import React, { useEffect, useRef, useState } from "react";
import BANCOS from "../../data/bancos.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import DynamicSelector from "./ComboBox";
import Loader from "./Loader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Bot from "./svgs/Bot";
import User from "./svgs/User";
import Link from "next/link";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Soy Argento, el asistente virtual de Argenpesos." },
    {
      from: "bot",
      text: "Te voy a estar guiando en tu consulta de préstamos.",
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFlowComplete, setIsFlowComplete] = useState(false);
  const [selectedSexo, setSelectedSexo] = useState("");
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [identidades, setIdentidades] = useState([]);
  const [selectedIdentidad, setSelectedIdentidad] = useState("");
  const [isConsultaStatus, setIsConsultaStatus] = useState(null);
  const [userData, setUserData] = useState({
    sexo: "",
    dni: "",
    bankCodigo: "",
    telefono: "",
    areaCode: "",
    ingresos: "",
  });

  const genderOptions = [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Femenino" },
  ];

  const phoneAreaOptions = [
    { value: "11", label: "11" },
    { value: "351", label: "351" },
    { value: "3543", label: "3543" },
    { value: "379", label: "379" },
    { value: "370", label: "370" },
    { value: "221", label: "221" },
    { value: "380", label: "380" },
    { value: "261", label: "261" },
    { value: "299", label: "299" },
    { value: "343", label: "343" },
    { value: "376", label: "376" },
    { value: "2804", label: "2804" },
    { value: "362", label: "362" },
    { value: "2966", label: "2966" },
    { value: "387", label: "387" },
    { value: "383", label: "383" },
    { value: "264", label: "264" },
    { value: "266", label: "266" },
    { value: "381", label: "381" },
    { value: "388", label: "388" },
    { value: "342", label: "342" },
    { value: "2954", label: "2954" },
    { value: "385", label: "385" },
    { value: "2920", label: "2920" },
    { value: "2901", label: "2901" },
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input.trim() }]);
      processInput(input.trim());
      setInput("");
    }
  };

  const startChat = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        from: "bot",
        text: "Por favor, ingresá tu DNI (Sin espacios ni puntos).",
      },
    ]);
    setStep(0);
  };

  const validateIdentidad = async (dni: string, sexoNumerico: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/validacionidentidad?ticket=EB56789C-B3B9-4D4A-A6C8-98235B1179C8&documento=${dni}&sexo=${sexoNumerico}`
      );
      const data = await response.json();

      if (data.statusCode === 201 && data.result.length === 1) {
        const identidad = data.result[0];
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: "bot", text: `Identidad validada: ${identidad.nombre}` },
        ]);
        setUserData((prevData) => ({
          ...prevData,
          cuil: identidad.cuil,
        }));
        setStep(2);
      } else if (data.statusCode === 201 && data.result.length > 1) {
        setIdentidades(data.result);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            from: "bot",
            text: "Se encontraron múltiples identidades. Por favor selecciona la correcta:",
          },
        ]);
        setStep(6);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            from: "bot",
            text: "No se pudo validar la identidad. Inténtalo nuevamente.",
          },
        ]);
        setStep(0);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: "Error al validar identidad." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const processInput = async (inputText: string) => {
    switch (step) {
      case 0:
        setUserData((prevData) => ({ ...prevData, dni: inputText }));
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: "bot", text: "Por favor, selecciona tu sexo:" },
        ]);
        setStep(1);
        break;
      case 1:
        if (selectedSexo) {
          setIsLoading(true);

          const selectedOption = genderOptions.find(
            (option) => option.value === selectedSexo
          );

          const sexoNumerico = selectedSexo === "M" ? 1 : 2;
          setUserData((prevData) => ({ ...prevData, sexo: sexoNumerico }));

          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "user", text: selectedOption?.label || selectedSexo },
          ]);

          validateIdentidad(userData.dni, sexoNumerico);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              from: "bot",
              text: "Por favor, selecciona un sexo válido: M o F",
            },
          ]);
        }
        break;

      case 2:
        if (selectedAreaCode) {
          setUserData((prevData) => ({
            ...prevData,
            areaCode: selectedAreaCode,
          }));

          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "user", text: selectedAreaCode },
          ]);

          setMessages((prevMessages) => [
            ...prevMessages,
            {
              from: "bot",
              text: "Ingresá tu número de teléfono. (Sin 0 y sin 15)",
            },
          ]);
          setStep(3);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              from: "bot",
              text: "Por favor, selecciona un código de área válido.",
            },
          ]);
        }
        break;
      case 3:
        setUserData((prevData) => ({ ...prevData, telefono: inputText }));
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            from: "bot",
            text: "Seleccioná el banco donde depositan tu sueldo:",
          },
        ]);
        setStep(4);
        break;
      case 4:
        if (selectedBank) {
          const bancoSeleccionado = BANCOS.find(
            (banco) => banco.Codigo === Number(selectedBank)
          );
          if (bancoSeleccionado) {
            setUserData((prevData) => ({
              ...prevData,
              bankCodigo: bancoSeleccionado.Codigo,
            }));

            setMessages((prevMessages) => [
              ...prevMessages,
              { from: "user", text: bancoSeleccionado.Descripcion },
            ]);

            setMessages((prevMessages) => [
              ...prevMessages,
              {
                from: "bot",
                text: "Por favor, coloca tu ingreso mensual neto.",
              },
            ]);
            setStep(5);
          }
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: "Por favor, selecciona un banco válido." },
          ]);
        }
        break;
      case 5:
        if (!userData.ingresos) {
          setUserData((prevData) => ({ ...prevData, ingresos: inputText }));

          setMessages((prevMessages) => [
            ...prevMessages,
            {
              from: "bot",
              text: "Gracias por proporcionar tu información. El sistema se encuentra procesando la consulta de cupo..",
            },
          ]);

          setTimeout(() => {
            sendConsultaCupo({
              ...userData,
              ingresos: inputText,
            });
          }, 0);
        }
        break;

      case 6:
        if (selectedIdentidad) {
          const identidadSeleccionada = identidades.find(
            (identidad) => identidad.cuil === Number(selectedIdentidad)
          );

          if (identidadSeleccionada) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { from: "user", text: identidadSeleccionada.nombre },
              { from: "bot", text: "Identidad seleccionada correctamente." },
              { from: "bot", text: "¿Cuál es tu código de área?" },
            ]);

            setUserData((prevData) => ({
              ...prevData,
              cuil: identidadSeleccionada.cuil,
            }));
            setStep(2);
          }
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              from: "bot",
              text: "Por favor, seleccione una identidad válida.",
            },
          ]);
        }
        break;
    }
  };

  const sendConsultaCupo = async (userData) => {
    setIsLoading(true);
    const { dni, cuil, sexo, bankCodigo, ingresos } = userData;

    const requestBody = {
      ticket: "EB56789C-B3B9-4D4A-A6C8-98235B1179C8",
      usuario: "PRUEBAWEB",
      sexo: sexo,
      productoId: 10,
      entidadFinancieraCodigo: bankCodigo,
      ingresos: ingresos,
    };

    if (cuil) {
      requestBody.cuil = cuil;
    } else {
      requestBody.documento = dni;
    }

    try {
      const response = await fetch("/api/consultacupo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        const { resultado, maximoCapital, maximoCuota } = data.result;

        let finalMessage = "";
        if (resultado === "RECHAZADO") {
          setIsConsultaStatus("REJECTED");
          const messagePart1 =
            "Ups....por el momento no sería posible acceder a un préstamo. De todas formas puede volver a consultarlo en 30 días.";
          const messagePart2 =
            "Descárgate la app... para obtener más información y aprovechar todos nuestros beneficios";

          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: messagePart1 },
          ]);

          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: messagePart2 },
          ]);
        } else if (resultado === "APROBADO SIN CUPO") {
          setIsConsultaStatus("PENDING");
          finalMessage = ` ¡Excelente! Tenes un préstamo pre-aprobado, sujeto a un análisis crediticio.`;
          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: finalMessage },
          ]);
        } else if (resultado === "APROBADO CON CUPO") {
          finalMessage = ` ¡Excelente! Tenes un préstamo aprobado por $${maximoCapital} en 12 cuotas de $${maximoCuota}. Sujeto a un análisis crediticio.`;
          setIsConsultaStatus("APPROVED");
          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: finalMessage },
          ]);
        }

        setIsFlowComplete(true);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: "bot", text: `Error: ${data.message}` },
        ]);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: "Ocurrió un error." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="chatbot relative min-h-[500px] lg:w-[330px] xl:w-[550px] border-[#00adee] border-[5px] rounded-xl overflow-hidden lg:overflow-auto">
        <div className="flex justify-center w-full h-[60px] items-center bg-[#00adee] text-white border-b-[#00adee] rounded-b-[12px] ">
          <h2 className="text-lg font-semibold text-white">
            Chatea con ArgenBot
          </h2>
        </div>
        <ScrollArea
          className={`${
            (isFlowComplete && !isConsultaStatus) || isLoading
              ? "h-[calc(100% - 70px)] max-h-[465px]"
              : "h-[calc(100% - 70px)] max-h-[380px]"
          } flex-grow p-4 overflow-y-auto`}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex items-start ${
                message.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.from === "bot" && (
                <Avatar className="mr-2 h-10 w-10 ">
                  <AvatarFallback>
                    <Bot />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-2  ${
                  message.from === "user"
                    ? "text-white font-bold bg-[#17AAE1] rounded-bl-lg rounded-t-lg"
                    : "bg-[#EEE] text-[#505050] rounded-b-lg rounded-tr-lg mt-[15px]"
                } max-w-[55%]`}
              >
                {message.text}
              </div>
              {message.from === "user" && (
                <Avatar className="ml-1 h-10 w-10 mt-[20px]">
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="mt-2">
              <Loader />
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>

        {step === -1 && !isLoading && (
          <div className="p-4 h-auto border-t border-border flex items-center justify-center absolute bottom-0 left-0 right-0">
            <Button
              onClick={startChat}
              className="bg-[#17AEE1] text-white px-4 py-2 rounded-lg"
            >
              Comenzar Chat
            </Button>
          </div>
        )}

        {step === 1 && !isLoading && (
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0 bg-white z-50">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 flex-grow"
              selectedValue={selectedSexo}
              setSelectedValue={setSelectedSexo}
              options={genderOptions}
              placeholder={"Selecciona tu sexo"}
            />
            <Button
              onClick={() => processInput(selectedSexo)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && !isLoading && (
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0 bg-white z-50">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-y-scroll flex-grow"
              selectedValue={selectedAreaCode}
              setSelectedValue={setSelectedAreaCode}
              options={phoneAreaOptions}
              placeholder={"Seleccione el código de área"}
            />
            <Button
              onClick={() => processInput(selectedAreaCode)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 4 && !isLoading && (
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0 bg-white z-50">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-y-auto"
              selectedValue={selectedBank}
              setSelectedValue={setSelectedBank}
              options={BANCOS.map((banco) => ({
                value: banco.Codigo,
                label: banco.Descripcion,
              }))}
              placeholder={"Selecciona tu banco"}
            />
            <Button
              onClick={() => processInput(selectedBank)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 6 && !isLoading && (
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0 bg-white z-50">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-y-scroll touch-auto"
              selectedValue={selectedIdentidad}
              setSelectedValue={setSelectedIdentidad}
              options={identidades.map((identidad) => ({
                value: identidad.cuil,
                label: `${identidad.nombre} (CUIL: ${identidad.cuil})`,
              }))}
              placeholder={"Seleccione su identidad"}
            />
            <Button
              onClick={() => processInput(selectedIdentidad)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}

        {!isLoading && isConsultaStatus == "APPROVED" && (
          <div className="p-4 h-auto border-t border-border flex items-center justify-center absolute bottom-0 left-0 right-0">
            <Link
              href={`https://wa.me/541126785266?text=${encodeURIComponent(
                "¡Hola! Argento me confirmó que mi préstamo fue aprobado. ¿Podrían indicarme los próximos pasos?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#17AEE1] text-white px-4 py-2 rounded-lg">
                LO QUIERO
              </Button>
            </Link>
          </div>
        )}

        {!isLoading && isConsultaStatus == "PENDING" && (
          <div className="p-4 h-auto border-t border-border flex items-center justify-center absolute bottom-0 left-0 right-0">
            <Link
              href={`https://wa.me/541126785266?text=${encodeURIComponent(
                "¡Hola! Argento me confirmó que mi préstamo fue pre-aprobado. ¿Podrían indicarme los próximos pasos?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#17AEE1] text-white px-4 py-2 rounded-lg">
                ME INTERESA
              </Button>
            </Link>
          </div>
        )}

        {!isFlowComplete &&
          !isConsultaStatus &&
          !isLoading &&
          step !== -1 &&
          step !== 1 &&
          step !== 2 &&
          step !== 4 &&
          step !== 6 && (
            <div className="p-4 border-t border-border flex absolute bottom-0 left-0 right-0">
              <Input
                type="text"
                placeholder={
                  step === 0
                    ? "Ingresá tu DNI..."
                    : step === 3
                    ? "Ingresá tu número de teléfono..."
                    : step === 5
                    ? "Inserta tu ingreso neto..."
                    : "Escribe un mensaje..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow mr-2"
              />
              <Button
                onClick={handleSend}
                size="icon"
                aria-label="Send message"
                className="bg-[#00ADEE]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}
      </div>
    </>
  );
}
