import { AppProvider } from "../StateContext";
import "@/styles/globals.css";
import '@/styles/AppContent.scss';
import '@/styles/ContactEmail.scss';
import '@/styles/Header.scss';
import '@/styles/Main.scss';
import '@/styles/Presentation.scss';
import '@/styles/UtilItem.scss';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
