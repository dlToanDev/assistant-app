"use client";
import { useState } from "react";
import { sendMessage } from "../services/assistantApi";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, "👤 " + input]);
    const res = await sendMessage(input);
    setMessages((prev) => [...prev, "🤖 " + res]);
    setInput("");
  };

  return (
    <div className="p-4">
      <div className="border h-64 overflow-y-scroll mb-4 p-2">
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border p-2"
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4">
          Gửi
        </button>
      </div>
    </div>
  );
}
