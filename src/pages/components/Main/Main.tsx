import { useApp, Photo, AboutMe, Skills, Projects, ContactMe } from '.';

const Main : React.FC = () => {

    const { isMobile, size } = useApp();

    const content = (
        <>
            <Photo />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </>
    );

    return !isMobile ? <main style={{ width: size }}>{content}</main> : content;
}

export default Main;