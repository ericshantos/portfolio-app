import Header from "./components/layouts/Header";
import Presentation from "./components/layouts/Presentation";
import Main from "./components/layouts/Main";
import ContactEmail from "./components/layouts/ContactEmail";
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