"use client";

import { ContactIcon, useApp, MdEmail, FaGithub, FaLinkedin } from '.';

const ContactMe : React.FC = () => {
    const { handleClick } = useApp();

    return (
        <section className="ContactMe MainItem" id="ContactMe">
            <article>
                <h1>Contacte-me</h1>
                <h2>Não seja tímido!</h2>
                <p>
                    Se você deseja conhecer mais sobre meu trabalho ou apenas gostaria de
                    dizer um oi, envie uma mensagem. Estou sempre disponível para conversar
                    e explorar novas oportunidades profissionais!
                </p>
            </article>
            <div className="ContactConteiner">
                <ContactIcon 
                    Icon={FaLinkedin} 
                    id="linkedin"
                    content="Vamos nos conectar?" 
                    link="https://www.linkedin.com/in/eric-sh" 
                />
                <ContactIcon 
                    Icon={FaGithub}
                    id="github"
                    content="Explore meus projetos!" 
                    link="https://www.github.com/ericshantos"
                />
                <ContactIcon 
                    Icon={MdEmail}
                    id="mail"
                    content="Gostaria de dar um oi!" 
                    onClick={handleClick}
                />
            </div>
        </section>
    );
};

export default ContactMe;