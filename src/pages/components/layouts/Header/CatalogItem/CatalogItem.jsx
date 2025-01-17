import { handleScroll } from '..';

const CatalogItem = ({ aba, title, caption }) => {

    return (
        <li>
            <a href={`#${aba}`} onClick={() => {
                handleScroll(aba);
            }}>
                <h2>{title}</h2>
                <p>{caption}</p>
            </a>
        </li>
    );
};

export default CatalogItem;