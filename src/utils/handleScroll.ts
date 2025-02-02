interface HandleScrollParams {
    sectionId: string;
}

const handleScroll = ({ sectionId }: HandleScrollParams): void => {
    if (typeof window !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Session with id "${sectionId}" not found.`);
        }
    } else {
        console.error('handleScroll was called on the server side.');
    }
};

export default handleScroll;