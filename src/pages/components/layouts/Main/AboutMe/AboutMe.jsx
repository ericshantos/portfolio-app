import { InformationConteiner } from ".";

const AboutMe = () => {

    return (
        <section className='AboutMe MainItem' id='AboutMe'>
            <article className="ContentIntrodution">
                <h1>Sobre mim</h1>
                <h2>
                    Entusiasta de tecnologia e suas aplicações em contextos reais, 
                    sou formado como Técnico em Tecnologia da Informação pelo Senac 
                    São Paulo e atualmente estou cursando Ciências da Computação.
                </h2>
            </article>
            <InformationConteiner />
        </section>
    );
}

export default AboutMe;