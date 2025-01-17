"use client";

import { ContactIcon, useAppContext } from '.';
import { useCallback } from 'react';

const ContactMe = () => {
    const { toggleVisibility } = useAppContext();

    const handleClick = useCallback(() => {
        toggleVisibility();
    }, [toggleVisibility]);

    return (
        <section className='ContactMe MainItem' id='ContactMe'>
            <article>
                <h1>Contacte-me</h1>
                <h2>Não seja tímido!</h2>
                <p>
                    Se você deseja conhecer mais sobre meu trabalho ou apenas gostaria de
                    dizer um oi, envie uma mensagem. Estou sempre disponível para conversar
                    e explorar novas oportunidades profissionais!
                </p>
            </article>
            <div className='ContactConteiner'>
                <ContactIcon 
                    icon='logo-linkedin' 
                    context='Vamos nos conectar?' 
                    link='https://www.linkedin.com/in/eric-sh' 
                />
                <ContactIcon 
                    icon='logo-github' 
                    context='Explore meus projetos!' 
                    link='https://www.github.com/ericshantos'
                />
                <ContactIcon 
                    icon='mail' 
                    context='Gostaria de dar um oi!' 
                    onclick={handleClick}
                />
            </div>
        </section>
    );
};

export default ContactMe;