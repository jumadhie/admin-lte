"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  firstName: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  collapse: boolean;
  setCollapse: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): DataType[] => [],
  collapse: true,
  setCollapse: (): boolean => true,
});

type LayoutProps = { children?: React.ReactNode };

export const GlobalContextProvider = ({ children }: LayoutProps) => {
  const [userId, setUserId] = useState("ddd");
  const [collapse, setCollapse] = useState(false);
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider
      value={{ userId, setUserId, data, setData, collapse, setCollapse }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
