"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send } from "lucide-react"
import BANCOS from '../../data/bancos.json'


interface Message {
  text: string
  isUser: boolean
}

export default function Chatbot({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Soy Tina, la asistente virtual de Argenpesos.' },
    { from: 'bot', text: 'Te voy a estar guiando en tu consulta de préstamos.' },
  ]);
  const [input, setInput] = useState('');
  const [showSexoDropdown, setShowSexoDropdown] = useState(false);
  const [selectedSexo, setSelectedSexo] = useState('');
  const [showAreaCodeDropdown, setShowAreaCodeDropdown] = useState(false);
  const [identidades, setIdentidades] = useState([]);
  const [showIdentidadesOptions, setShowIdentidadesOptions] = useState(false);
  const [userData, setUserData] = useState({
    sexo: '',
    dni: '',
    bankCodigo: '',
    telefono: '',
    areaCode: '',
    ingresos: ''
  });

  const [step, setStep] = useState(0);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prevMessages => [...prevMessages, { from: 'user', text: input.trim() }]);
      processInput(input.trim());
      setInput('');
    }
  };

  const processInput = (inputText: string) => {
    switch (step) {
      case 0:
        setMessages(prevMessages => [
          ...prevMessages,
          { from: 'bot', text: 'Por favor, ingresá tu DNI.' }
        ]);
        setStep(1);
        break;
      case 1:
        setUserData(prevData => ({ ...prevData, dni: inputText }));
        setMessages(prevMessages => [
          ...prevMessages,
          { from: 'bot', text: 'Por favor, selecciona tu sexo: M o F' }
        ]);
        setShowSexoDropdown(true);
        setStep(2);
        break;
      case 2:
        // Now sexo selection will be handled through the dropdown
        break;
      case 3:
        setUserData(prevData => ({ ...prevData, areaCode: inputText }));
        setMessages(prevMessages => [
          ...prevMessages,
          { from: 'bot', text: 'Ingresá tu número de teléfono. (Sin 0 y sin 15)' }
        ]);
        setStep(4);
        break;
      // Remaining cases...
      default:
        break;
    }
  };

  const sendSexoMessage = async () => {
    if (selectedSexo) {
      const sexoNumerico = selectedSexo === 'M' ? 1 : 2;
      setUserData(prevData => ({ ...prevData, sexo: sexoNumerico }));
      setMessages(prevMessages => [
        ...prevMessages,
        { from: 'user', text: selectedSexo },
      ]);
      setShowSexoDropdown(false);

      const dni = userData.dni;
      try {
        const response = await fetch(
          `http://smarter.argenpesos.com.ar:30002/External/validacionidentidad?ticket=EB56789C-B3B9-4D4A-A6C8-98235B1179C8&documento=${dni}&sexo=${sexoNumerico}`
        );
        const data = await response.json();

        if (data.statusCode === 201 && data.result.length === 1) {
          const identidad = data.result[0];
          setMessages(prevMessages => [
            ...prevMessages,
            { from: 'bot', text: `Identidad validada: ${identidad.nombre} (CUIL: ${identidad.cuil})` },
            { from: 'bot', text: 'Ahora te pedimos los datos de tu teléfono celular para contactarnos en el caso que lo necesitemos 📱' },
            { from: 'bot', text: '¿Cuál es tu código de área?' }
          ]);
          setShowAreaCodeDropdown(true);
          setStep(3);
        } else if (data.statusCode === 201 && data.result.length > 1) {
          setMessages(prevMessages => [
            ...prevMessages,
            { from: 'bot', text: 'Se encontraron múltiples identidades. Por favor, selecciona la tuya:' }
          ]);
          setIdentidades(data.result);
          setShowIdentidadesOptions(true);
        } else {
          setMessages(prevMessages => [
            ...prevMessages,
            { from: 'bot', text: 'No se pudo validar la identidad. Por favor, inténtalo nuevamente.' }
          ]);
          setStep(1);
        }
      } catch (error) {
        setMessages(prevMessages => [
          ...prevMessages,
          { from: 'bot', text: 'Ocurrió un error al validar tu identidad. Inténtalo de nuevo más tarde.' }
        ]);
        setStep(1);
      }
    }
  };

  const handleSexoSelect = (sexo: string) => {
    setSelectedSexo(sexo);
    sendSexoMessage(); 
  };

    if (!isOpen) return null
  
    return (
        <div className="fixed bottom-1/3 right-1/2 w-80 h-96 bg-background border border-border rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between bg-[#00ADEE] items-center text-white p-4 border-0 rounded-b-lg">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chatbot">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  message.from === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-secondary text-secondary-foreground'
                } max-w-[80%] ${message.from === 'user' ? 'ml-auto' : 'mr-auto'}`}
              >
                {message.text}
              </div>
            ))}
            {showSexoDropdown && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Selecciona tu sexo:
                </label>
                <select
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2"
                  onChange={(e) => handleSexoSelect(e.target.value)}
                >
                  <option value="">Selecciona sexo</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
            )}
          </ScrollArea>
          {step === 0 && (
            <div className="p-4">
              <Button className="w-full bg-blue-500 text-white" onClick={() => processInput('')}>
                Iniciar Chat
              </Button>
            </div>
          )}
          {step > 0 && !showSexoDropdown && (
            <div className="p-4 border-t border-border flex">
              <Input
                type="text"
                placeholder="Escribe un mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow mr-2"
              />
              <Button onClick={handleSend} size="icon" aria-label="Send message" className="bg-[#00ADEE]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      );
    }
