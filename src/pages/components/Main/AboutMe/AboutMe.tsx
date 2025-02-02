import { InfoConteiner } from ".";

const AboutMe : React.FC = () => {

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
            <InfoConteiner />
        </section>
    );
}

export default AboutMe;