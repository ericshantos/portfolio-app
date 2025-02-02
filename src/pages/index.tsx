import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Main from "./components/Main";
import ContactEmail from "./components/ContactEmail";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Eric Santos</title>
        <meta name="description" content="Portfólio profissional de Eric dos Santos" />
        <meta name="author" content="Eric dos Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="AppContent">
        <Header />
        <Presentation />
        <Main />
        <ContactEmail />
      </section>
    </>
  );
}