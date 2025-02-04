import { useContext } from "react";
import { AppContextProps, AppContext } from "./AppContext";

export default function useApp(): AppContextProps {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}