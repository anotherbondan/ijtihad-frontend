// app/chat/page.tsx (atau pages/chat.tsx jika pakai Pages Router)
"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/sidebar";
import ReactMarkdown from "react-markdown";

export default function ChatbotModule() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const addMessage = (text: string, sender: "user" | "bot") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input.trim();
    addMessage(userMessage, "user");
    setInput("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chatbot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || "Gagal mendapatkan respons dari server."
        );
      }

      const data = await response.json();
      addMessage(data.response, "bot");
    } catch (error: any) {
      console.error("Chatbot error:", error);
      addMessage("Terjadi kesalahan saat memproses pesan Anda.", "bot");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <main className="min-h-screen pt-18">
      <div className="flex min-h-[90vh]">
        {sidebarOpen && <Sidebar />}

        <main className="flex-1 flex flex-col bg-transparent max-h-[90vh]">
          <header className="flex relative items-center z-10 px-0 py-4 w-fit bg-transparent">
            <button
              onClick={toggleSidebar}
              className="py-[1px] pr-[1px] rounded-r-md bg-gradient-primary"
            >
              <div className="bg-white w-full h-full rounded-r-md p-2">
                <img
                  src="/list.svg"
                  alt="Toggle Sidebar"
                  className="w-6 h-auto"
                />
              </div>
            </button>
          </header>

          <div
            ref={chatContainerRef}
            className="flex-1 p-14 overflow-y-auto space-y-6"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                } items-start gap-3`}
              >
                <div
                  className={`p-4 rounded-3xl ${
                    msg.sender === "user"
                      ? "bg-[#D1F7E8] text-Text rounded-br-lg"
                      : "bg-gray-100 text-Text rounded-bl-lg"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          <div className="px-14 py-2 bg-white">
            <div className="w-full mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Ketik pesan Anda di sini..."
                  autoComplete="off"
                  className="w-full py-4 pl-6 pr-16 bg-gray-100 border-2 border-black rounded-lg transition"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-black rounded-full focus:outline-none transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
