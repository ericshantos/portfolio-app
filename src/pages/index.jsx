import { Header, Presentation, Main, ContactEmail } from "./components";
import '@/styles/Content.scss';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Eric Santos</title>
        <meta name="description" content="Portfólio profissional de Eric dos Santos" />
        <meta name="author" content="Eric dos Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" defer></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>
      </Head>
      <section className="Content">
        <Header />
        <Presentation />
        <Main />
        <ContactEmail />
      </section>
    </>
  );
}