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

interface AuthContextType {
  dictionaries: any;
}

const DictionaryContext = createContext<AuthContextType | undefined>(undefined);

export const DictionaryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //   const { lng } = UserAuthandSimulationContext();
  const lng = "english";
  const [dictionaries, setDictionaries] = useState({});

  const fetchedDictionaries = useMemo(async () => {
    const createDictionary = await getDictionary(lng);

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
