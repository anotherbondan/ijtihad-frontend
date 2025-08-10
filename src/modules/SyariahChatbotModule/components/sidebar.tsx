"use client"
import { useSession } from "@/hooks/useSession";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [chatTitles, setChatTitles] = useState([]);
  const { user } = useSession();

  useEffect(() => {
    if (!user?.id) return;

    const fetchChatTitles = async () => {
      try {
        const userId = user?.id;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/rooms/user/${userId}`
        );
        const data = await res.json();
        setChatTitles(data.room_name);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChatTitles();
  }, [user]);
  return (
    <aside className="w-64 min-h-full px-4 py-8 flex flex-col bg-white transition-all duration-300 ease-in-out relative z-10 shadow-xl">
      <nav className="flex-grow overflow-y-auto space-y-9">
        {chatTitles.map((text, idx) => (
          <Link
            key={idx}
            href="/chatbot"
            className="flex w-full h-8 items-center justify-center p-[1px] rounded-lg bg-gradient-primary mb-3"
          >
            <div className="flex w-full h-full items-center justify-center bg-white hover:bg-gray-100 px-3 rounded-lg">
              <h1 className="text-center">{text}</h1>
            </div>
          </Link>
        ))}
      </nav>
      <button className="flex items-center justify-center w-full bg-[#72d3bd] active:bg-[#1a6e6a] rounded-lg px-3 py-2 mb-4 transition-colors">
        <span className="sidebar-text text-center">New Chat</span>
      </button>
    </aside>
  );
}
