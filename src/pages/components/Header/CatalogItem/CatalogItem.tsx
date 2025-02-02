import { handleScroll, useApp } from '..';

interface CatalogItemProps {
    aba: string;
    title: string;
    caption: string;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ aba, title, caption }) => {
    const { handleCheckboxChange } = useApp();

    const eventClick = () => {
        handleScroll({ sectionId: aba });
        if (handleCheckboxChange) {
            handleCheckboxChange();
        }
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