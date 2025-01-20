"use client";

import { ContactIcon, useAppContext } from '.';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useCallback } from 'react';

const ContactMe = () => {
    const { toggleVisibility } = useAppContext();

    const handleClick = useCallback(() => {
        toggleVisibility();
    }, [toggleVisibility]);

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
                    icon="logo-linkedin"
                    Icon={FaLinkedin} 
                    id="linkedin"
                    context="Vamos nos conectar?" 
                    link="https://www.linkedin.com/in/eric-sh" 
                />
                <ContactIcon 
                    icon="logo-github"
                    Icon={FaGithub}
                    id="github"
                    context="Explore meus projetos!" 
                    link="https://www.github.com/ericshantos"
                />
                <ContactIcon 
                    icon="mail"
                    Icon={MdEmail}
                    id="mail"
                    context="Gostaria de dar um oi!" 
                    onClick={handleClick}
                />
            </div>
        </section>
    );
};

export default ContactMe;