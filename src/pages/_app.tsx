import type { AppProps } from "next/app";
import GlobalContext from "@/contexts/GlobalContext";

import "@/styles/globals.css";
import '@/styles/AppContent.scss';
import '@/styles/ContactEmail.scss';
import '@/styles/Header.scss';
import '@/styles/Main.scss';
import '@/styles/Presentation.scss';
import '@/styles/UiItem.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
        <Component {...pageProps} />
    </GlobalContext>
  );
}