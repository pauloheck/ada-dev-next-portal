"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "Você", text: input }]);
      setInput("");

      // Simula uma resposta automática
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "IA", text: "Esta é uma resposta automática." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 space-y-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-4">
        <div className="flex-grow overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 ${message.user === "Você" ? "text-right" : "text-left"}`}>
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md"
            placeholder="Digite sua mensagem..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
