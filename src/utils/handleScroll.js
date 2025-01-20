const handleScroll = (sectionId) => {
    if (typeof window !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Sessão com a "${sectionId}" não encontrada.`);
        }
    } else {
        console.error('O handleScroll foi chamado no lado do servidor.');
    }
};

export default handleScroll;