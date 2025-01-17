'use client';

import { useAppContext, CommonBtn, handleScroll } from ".";
import '@/styles/Presentation.scss';

const Presentation = () => {

    const { opacity, bgColor, size } = useAppContext();

    return (
        <section className='Presentation' style={{ width: size, color: bgColor }}>
            <article style={{ opacity: opacity }}>
                <h1>Prazer,</h1>
                <h2>&lt;Eric&gt;</h2>
                <div className='animation-text' style={{ opacity: opacity }}>
                    <h3></h3>
                </div>
                <h2>&lt;/Santos&gt;</h2>
            </article>
            <span className='ConteinerBtn' style={{ opacity: opacity }}>
                <CommonBtn
                    content='Vamos conversar'
                    type='button'
                    onclick={() => handleScroll('ContactMe')}
                />
            </span>
            <footer style={{opacity: opacity }}>
                <p>Role a tela e descobra mais sobre mim!</p>
                <p><a href="https://drive.google.com/uc?export=download&id=13wtcU8SexDSRSq9AYmQEKO9mWoJQuTxH" download target="_blank">Meu currículo</a> para download (PDF 50Kb)</p>
            </footer>
        </section>
    );
}

export default Presentation;