import { useAppContext, Photo, AboutMe, Skills, Projects, ContactMe } from '.';

const Main = () => {

    const { isMobile, size } = useAppContext();

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