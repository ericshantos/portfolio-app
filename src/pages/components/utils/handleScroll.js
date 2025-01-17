const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Sessão com a "${sectionId}" não encontrada.`);
    }
};

export default handleScroll;