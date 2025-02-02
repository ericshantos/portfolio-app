import { useReducer, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { AppContext, AppContextType, AppState } from "./AppContext";

interface AppProviderProps {
    children: React.ReactNode;
}

type Action =
    | { type: "TOGGLE_VISIBILITY" }
    | { type: "CHANGE_COLOR"; payload: string }
    | { type: "CHANGE_OPACITY" }
    | { type: "SET_SIZE"; payload: string }
    | { type: "CHANGE_WIDTH"; payload: string }
    | { type: "SET_KEY"; payload: number }
    | { type: "TOGGLE_CHECKBOX" };

const initialState: AppState = {
    isVisible: false,
    bgColor: "#fce38f",
    opacity: "0",
    isMobile: false,
    size: "100%",
    width: "100%",
    key: 0,
    isChecked: false,
};

const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "TOGGLE_VISIBILITY":
            return { ...state, isVisible: !state.isVisible };
        case "CHANGE_COLOR":
            return { ...state, bgColor: action.payload };
        case "CHANGE_OPACITY":
            return { ...state, opacity: "1" };
        case "SET_SIZE":
            return { ...state, size: action.payload };
        case "CHANGE_WIDTH":
            return { ...state, width: action.payload };
        case "SET_KEY":
            return { ...state, key: action.payload };
        case "TOGGLE_CHECKBOX":
            return { ...state, isChecked: !state.isChecked };
        default:
            return state;
    }
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useEffect(() => {
        dispatch({ type: "CHANGE_OPACITY" });
    }, []);

    useEffect(() => {
        dispatch({ type: "SET_SIZE", payload: isMobile ? "100%" : "50%" });
    }, [isMobile]);

    const handleClick = useCallback(() => {
        dispatch({ type: "TOGGLE_VISIBILITY" });
    }, []);

    const value: AppContextType = {
        ...state,
        toggleVisibility: () => dispatch({ type: "TOGGLE_VISIBILITY" }),
        changeColor: (newColor) => dispatch({ type: "CHANGE_COLOR", payload: newColor }),
        changeOpacity: () => dispatch({ type: "CHANGE_OPACITY" }),
        setSize: (size) => dispatch({ type: "SET_SIZE", payload: size }),
        changeWidth: (newWidth) => dispatch({ type: "CHANGE_WIDTH", payload: newWidth }),
        setKey: (key) => dispatch({ type: "SET_KEY", payload: key }),
        handleCheckboxChange: () => dispatch({ type: "TOGGLE_CHECKBOX" }),
        handleClick,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};