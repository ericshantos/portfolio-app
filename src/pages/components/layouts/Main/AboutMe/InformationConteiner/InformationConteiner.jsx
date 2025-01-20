import { useState } from 'react';

const InformationConteiner = () => {
    const [selectedItem, setSelectedItem] = useState('Profissional');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='InformationConteiner'>
            <nav>
                <ul className="InformationItems">
                    <InformationItem
                        item="Profissional"
                        selectedItem={selectedItem}
                        handleItemClick={handleItemClick}
                    />
                    <InformationItem
                        item="Pessoal"
                        selectedItem={selectedItem}
                        handleItemClick={handleItemClick}
                    />
                </ul>
            </nav>
            <article>
                {selectedItem === 'Profissional' && (
                    <section>
                        <p>
                            Sou apaixonado por tecnologia e sua capacidade de transformar realidades. 
                            Com um olhar atento para o impacto que a inovação 
                            pode gerar, meu objetivo é evoluir continuamente 
                            como profissional, desenvolvendo 
                            soluções que melhoram processos e ambientes.
                        </p>
                    </section>
                )}
                {selectedItem === 'Pessoal' && (
                    <section>
                        <p>
                            Quando não estou codando, gosto de explorar novos cenários com minha câmera e 
                            amigos. Além disso, sou apaixonado por esportes radicais e um amante fervoroso 
                            da cultura popular brasileira. Meu maior temor? Acordar um dia e descobrir 
                            que não sou mais brasileiro!
                        </p>
                    </section>
                )}
            </article>
        </div>
    );
};

const InformationItem = ({ item, selectedItem, handleItemClick }) => {
    return (
        <li
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? 'selected' : ''}
        >
            {item}
        </li>
    );
};

export default InformationConteiner;
