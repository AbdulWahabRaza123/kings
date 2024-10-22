"use client";

import { Spinner } from "@/components/spinner";
import { LanguageDetails } from "@/interface/language-interface";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  lng: string;
  setLng: (lng: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [lng, setLng] = useState<string>("english");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const chkLng = localStorage.getItem("kings-lng");
    if (chkLng) {
      setLng(chkLng);
    }
    setLoading(false);
  }, [lng]);
  if (!lng || loading) {
    return (
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        lng,
        setLng,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be used within an AuthContextProvider");
  }
  return context;
};
