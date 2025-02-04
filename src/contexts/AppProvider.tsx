import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "./AppContext";

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(prev => !prev);

    const [bgColor, setColor] = useState<string>('#fce38f');
    const changeColor = (newColor: string) => setColor(newColor);

    const [opacity, setOpacity] = useState<string>('0');
    const changeOpacity = () => setOpacity('1');

    const [width, setWidth] = useState<string>("100%");
    const changeWidth = (newWidth: string) => setWidth(newWidth);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleCheckboxChange = () => setIsChecked(prev => !prev);

    const [key, setKey] = useState<number>(0);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [size, setSize] = useState<string>('100%');
    useEffect(() => {
        setSize(isMobile ? '100%' : '50%');
    }, [isMobile]);

    useEffect(() => {
        changeOpacity();
    }, []);

    const handleClick = useCallback(() => {
        toggleVisibility();
    }, []);

    return (
        <AppContext.Provider value={{
            isVisible,
            toggleVisibility,
            bgColor,
            changeColor,
            opacity,
            changeOpacity,
            isMobile,
            size,
            setSize,
            width,
            changeWidth,
            key,
            setKey,
            isChecked,
            handleCheckboxChange,
            handleClick
        }}>
            {children}
        </AppContext.Provider>
    );
};