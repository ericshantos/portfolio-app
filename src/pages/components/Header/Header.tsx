'use client';

import { CatalogItem, ConteinerColor, BurguerIcon, useApp } from '.';
import Image from 'next/image';

const Header = () => {
    const { bgColor, opacity, handleCheckboxChange, isChecked } = useApp();

    return (
        <>
            <header style={{ opacity: opacity }}>
                <input 
                    type="checkbox" 
                    id="toggle" 
                    className="toggle" 
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
                <label htmlFor="toggle" className="BurguerCatalog" style={{ backgroundColor: bgColor }}>
                    <Image
                        src={BurguerIcon}
                        alt="ícone do catálogo hamburguer"
                    />
                </label>
                <nav 
                    className="CatalogContent" 
                    style={{ clipPath: isChecked ? 'circle(150% at 16% 12%)' : 'circle(0% at 16% 12%)' }}
                >
                    <article className="Title">
                        <h1 className="font">Menu hamburguer</h1>
                    </article>
                    <ul className="AbaList">
                        <CatalogItem
                            aba="AboutMe"
                            title="Sobre mim"
                            caption="Macio como uma fatia de queijo."
                        />
                        <CatalogItem
                            aba="Skills"
                            title="Habilidades"
                            caption="Ingredientes que utilizo."
                        />
                        <CatalogItem
                            aba="Projects"
                            title="Projetos"
                            caption="Descubra o que já preparei."
                        />
                        <CatalogItem
                            aba="ContactMe"
                            title="Contacte-me"
                            caption="Para saber mais, entre em contato."
                        />
                    </ul>
                    <ConteinerColor />
                </nav>
            </header>
        </>
    );
};

export default Header;
