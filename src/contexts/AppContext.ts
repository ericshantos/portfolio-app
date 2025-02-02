import { createContext } from "react";

export interface AppState {
    isVisible: boolean;
    bgColor: string;
    opacity: string;
    isMobile: boolean;
    size: string;
    width: string;
    key: number;
    isChecked: boolean;
}

export interface AppContextType extends AppState {
    toggleVisibility: () => void;
    changeColor: (newColor: string) => void;
    changeOpacity: () => void;
    setSize: (size: string) => void;
    changeWidth: (newWidth: string) => void;
    setKey: (key: number) => void;
    handleCheckboxChange: () => void;
    handleClick: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
