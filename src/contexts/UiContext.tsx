import React, { FC, ReactNode, useState } from "react";
import { useMemo } from "react";

type UiContextType = {
  isModalOpened?: boolean;
  setIsModalOpened?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UiContext = React.createContext<UiContextType>({});

type UiProviderType = {
  children: ReactNode;
};

export const UiProvider: FC<UiProviderType> = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const value: any = useMemo(
    () => ({
      isModalOpened,
      setIsModalOpened,
    }),
    [isModalOpened, setIsModalOpened]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
