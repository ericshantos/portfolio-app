import { useAppContext } from ".";

const Photo = () => {

    const { bgColor } = useAppContext();

    return (
        <section className="Photo MainItem" id="Photo">
            <div className='film' style={{ backgroundColor: bgColor }}></div>
        </section>
    );
}

export default Photo;