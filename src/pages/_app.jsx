import "@/styles/globals.css";
import { AppProvider } from "./components/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
