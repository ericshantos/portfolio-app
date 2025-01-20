import { handleScroll, useAppContext } from '..';

const CatalogItem = ({ aba, title, caption }) => {

    const { handleCheckboxChange } = useAppContext();

    const eventClick = () => {
        handleScroll(aba);
        handleCheckboxChange();
    };

    return (
        <li>
            <a href={`#${aba}`} onClick={eventClick}>
                <h2>{title}</h2>
                <p>{caption}</p>
            </a>
        </li>
    );
};

export default CatalogItem;