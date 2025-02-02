import { AppProvider } from "./AppProvider";

interface GlobalContextType {
    children: React.ReactNode;
}

const GlobalContext = ({ children }: GlobalContextType) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    );
}

export default GlobalContext;