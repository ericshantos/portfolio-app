import { useState } from 'react';

import InfoItem from './InfoItem';

const InfoConteiner : React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('Profissional');

    const handleItemClick = (item: string) : void => {
        setSelectedItem(item);
    };

    return (
        <div className='InformationConteiner'>
            <nav>
                <ul className="InformationItems">
                    <InfoItem
                        item="Profissional"
                        selectedItem={selectedItem}
                        onclick={handleItemClick}
                    />
                    <InfoItem
                        item="Pessoal"
                        selectedItem={selectedItem}
                        onclick={handleItemClick}
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

export default InfoConteiner;
