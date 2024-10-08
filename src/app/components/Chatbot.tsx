"use client";
import React, { useEffect, useRef, useState } from "react";
import BANCOS from "../../data/bancos.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send } from "lucide-react";
import DynamicSelector from "./ComboBox";
import Loader from "./Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Bot from "./svgs/Bot";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Soy Tina, la asistente virtual de Argenpesos." },
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

  // 1. Crear una referencia para el contenedor de mensajes
  const messagesEndRef = useRef(null);

  // 2. Usar useEffect para hacer scroll al último mensaje cuando cambien los mensajes
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
      { from: "bot", text: "Por favor, ingresá tu DNI." },
    ]);
    setStep(0); // Step 0 is the DNI input step
  };

  const validateIdentidad = async (dni, sexoNumerico) => {
    try {
      const response = await fetch(
        `/api/validacionidentidad?ticket=EB56789C-B3B9-4D4A-A6C8-98235B1179C8&documento=${dni}&sexo=${sexoNumerico}`
      );
      const data = await response.json();

      if (data.statusCode === 201 && data.result.length === 1) {
        const identidad = data.result[0];
        setMessages([
          ...messages,
          { from: "bot", text: `Identidad validada: ${identidad.nombre}` },
        ]);
        setStep(2);
      } else {
        setMessages([
          ...messages,
          { from: "bot", text: "No se pudo validar la identidad." },
        ]);
        setStep(0);
      }
    } catch (error) {
      setMessages([
        ...messages,
        { from: "bot", text: "Error al validar identidad." },
      ]);
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
        // Handling sexo selection with dropdown
        if (selectedSexo) {
          setIsLoading(true); // Comienza la carga

          // Encontrar el label correspondiente en genderOptions
          const selectedOption = genderOptions.find(
            (option) => option.value === selectedSexo
          );

          // Convertir "M" o "F" en 1 o 2
          const sexoNumerico = selectedSexo === "M" ? 1 : 2;
          setUserData((prevData) => ({ ...prevData, sexo: sexoNumerico }));

          // Mostrar la selección en el chat con el label ("Masculino" o "Femenino")
          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "user", text: selectedOption?.label || selectedSexo },
          ]);

          const dni = userData.dni;
          try {
            const response = await fetch(
              `/api/validacionidentidad?ticket=EB56789C-B3B9-4D4A-A6C8-98235B1179C8&documento=${dni}&sexo=${sexoNumerico}`
            );
            const data = await response.json();

            if (data.statusCode === 201 && data.result.length === 1) {
              const identidad = data.result[0];
              setMessages((prevMessages) => [
                ...prevMessages,
                {
                  from: "bot",
                  text: `Identidad validada: ${identidad.nombre} (CUIL: ${identidad.cuil})`,
                },
                { from: "bot", text: "¿Cuál es tu código de área?" },
              ]);
              setStep(2);
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
            console.error("Error al validar identidad:", error);
          } finally {
            setIsLoading(false);
          }
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
        // Handling area code selection with dropdown
        if (selectedAreaCode) {
          setUserData((prevData) => ({
            ...prevData,
            areaCode: selectedAreaCode,
          }));

          // Display the selected area code in the chat as a user message
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
        // Handle bank selection from dropdown
        if (selectedBank) {
          const bancoSeleccionado = BANCOS.find(
            (banco) => banco.Codigo === Number(selectedBank)
          );
          if (bancoSeleccionado) {
            setUserData((prevData) => ({
              ...prevData,
              bankCodigo: bancoSeleccionado.Codigo,
            }));

            // Display the selected bank in the chat as a user message
            setMessages((prevMessages) => [
              ...prevMessages,
              { from: "user", text: bancoSeleccionado.Descripcion },
            ]);

            setMessages((prevMessages) => [
              ...prevMessages,
              {
                from: "bot",
                text: "Por favor, coloque su ingreso mensual neto.",
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
        // Actualizamos el ingreso del usuario
        setUserData((prevData) => ({ ...prevData, ingresos: inputText }));

        // Actualiza los mensajes
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            from: "bot",
            text: "Gracias por proporcionar tu información. Procesando la consulta de cupo...",
          },
        ]);

        // Llama a la función después de actualizar el estado, usando setTimeout para garantizar que el estado se haya actualizado
        setTimeout(() => {
          sendConsultaCupo({
            ...userData,
            ingresos: inputText, // Asegura que se está pasando el valor actualizado
          });
        }, 0);

        break;
      case 6:
        // Verificar si se ha seleccionado una identidad
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
              text: "Por favor, selecciona una identidad válida.",
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
      sexo: sexo, // 1 para Masculino, 2 para Femenino
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
        const { resultado } = data.result;
        let finalMessage =
          resultado === "RECHAZADO"
            ? "Ups....por el momento no sería posible acceder a un préstamo. De todas formas puede volver a consultarlo en 30 días."
            : "¡Excelente! Tenes un préstamo pre-aprobado, sujeto a un análisis crediticio. Para más información, comunícate al 11 2678-5266 o al 11 6123-1754. ";
        setMessages([...messages, { from: "bot", text: finalMessage }]);
        setIsFlowComplete(true);
      } else {
        setMessages([
          ...messages,
          { from: "bot", text: `Error: ${data.message}` },
        ]);
      }
    } catch (error) {
      setMessages([...messages, { from: "bot", text: "Ocurrió un error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative h-[600px]">
        <div className="flex justify-center  h-[60px] items-center text-white  border border-border rounded-lg ">
          <h2 className="text-lg font-semibold text-lightblue-primary">
            Chatea con Tina
          </h2>
        </div>
        <ScrollArea
          className={`${
            isFlowComplete || isLoading
              ? "h-[calc(100% - 60px)] max-h-[535px]"
              : "h-[calc(100% - 60px)] max-h-[450px]"
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
                  <AvatarImage src="/ai-avatar.png" alt="BOT" />
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
                  <AvatarImage src="/user-avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
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
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-hidden"
              selectedValue={selectedSexo}
              setSelectedValue={setSelectedSexo}
              options={genderOptions}
              placeholder={"Seleccione su sexo"}
            />
            <Button
              onClick={() => processInput(selectedSexo)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[48px]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && !isLoading && (
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-hidden"
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
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 overflow-hidden"
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
          <div className="dynamicselector p-4 border-t border-border flex gap-2 absolute bottom-0 left-0 right-0">
            <DynamicSelector
              className="border border-gray-300 rounded-md px-4 py-2 mb-2"
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

        {!isFlowComplete &&
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
                    ? "Ingrese su DNI..."
                    : step === 3
                    ? "Ingrese su número de teléfono..."
                    : step === 5
                    ? "Inserte su ingreso neto..."
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
