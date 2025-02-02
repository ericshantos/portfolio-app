interface InfoItemProps {
    item: string;
    selectedItem: string;
    onclick: (item: string) => void;
}

const InfoItem : React.FC<InfoItemProps> = ({ item, selectedItem, onclick }) => {
    return (
        <li
            onClick={() => onclick(item)}
            className={selectedItem === item ? 'selected' : ''}
        >
            {item}
        </li>
    );
};

export default InfoItem;