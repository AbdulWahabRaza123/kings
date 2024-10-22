"use client";
import { getDictionary } from "@/helpers/dictionaries";
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import { UserAuthContext } from "./auth-context";
import { LanguageDetails } from "@/interface/language-interface";

interface AuthContextType {
  dictionaries: any;
}

const DictionaryContext = createContext<AuthContextType | undefined>(undefined);

export const DictionaryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { lng } = UserAuthContext();
  const [dictionaries, setDictionaries] = useState({});

  const fetchedDictionaries = useMemo(async () => {
    const createDictionary = await getDictionary(lng as LanguageDetails);

    return {
      createDictionary,
    };
  }, [lng]);

  useEffect(() => {
    fetchedDictionaries.then(({ createDictionary }) => {
      setDictionaries(createDictionary);
    });
  }, [fetchedDictionaries]);

  return (
    <DictionaryContext.Provider
      value={{
        dictionaries,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export const DictionariesContext = () => {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error(
      "DictionariesContext must be used within a DictionaryContext Provider"
    );
  }
  return context;
};
