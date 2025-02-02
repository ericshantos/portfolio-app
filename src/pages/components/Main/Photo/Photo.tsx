import { useApp } from ".";

const Photo : React.FC = () => {

    const { bgColor } = useApp();

    return (
        <section className="Photo MainItem" id="Photo">
            <div className='film' style={{ backgroundColor: bgColor }}></div>
        </section>
    );
}

export default Photo;