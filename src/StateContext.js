import { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ isVisible, setIsVisible ] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    const [ bgColor, setColor ] = useState('#fce38f');

    const changeColor = (newColor) => {
        setColor(newColor);
    };

    const [ opacity, setOpacity ] = useState('0');

    const changeOpacity = () => {
        setOpacity('1');
    };

    const [width, setWidth] = useState("100%");

    const changeWidth = (newWidth) => {
        setWidth(newWidth);
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };    

    const [key, setKey] = useState(0);
    
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [size, setSize] = useState('100%');

    useEffect(() => {
        setSize(isMobile ? '100%' : '50%');
    }, [isMobile]);

    useEffect(() => {
        changeOpacity();
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
            handleCheckboxChange
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default function useAppContext() {
    return useContext(AppContext);
};