"use client";
import { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

interface SessionData {
  token: string;
  expires: string;
}

interface Session {
  user: User;
  session: SessionData;
}

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSession = () => {
      try {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
          const parsed = JSON.parse(storedSession) as Session;
          setSession(parsed);
        } else {
          setSession(null);
        }
      } catch (error) {
        console.error("Failed to get session:", error);
        setSession(null);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();
  }, []);

  const signOut = () => {
    try {
      localStorage.removeItem("session");
      setSession(null);
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return {
    user: session?.user || null,
    isLoading,
    signOut,
  };
}
