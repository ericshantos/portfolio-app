import { createContext } from "react";

export interface AppContextProps {
    isVisible: boolean;
    toggleVisibility: () => void;
    bgColor: string;
    changeColor: (newColor: string) => void;
    opacity: string;
    changeOpacity: () => void;
    isMobile: boolean;
    size: string;
    setSize: (size: string) => void;
    width: string;
    changeWidth: (newWidth: string) => void;
    key: number;
    setKey: (key: number) => void;
    isChecked: boolean;
    handleCheckboxChange: () => void;
    handleClick: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);