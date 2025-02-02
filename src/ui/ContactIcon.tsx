interface ContactIconProps {
    Icon: React.ElementType;
    content: string;
    link?: string;
    id: string;
    onClick?: () => void;
}

const ContactIcon : React.FC<ContactIconProps> = ({ Icon, content, link, id, onClick }) => {
    return (
        <div className="ContactIcon">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={onClick}
            >
                <div className="BackgroundIcon" id={id}>
                        {Icon && <Icon />}
                </div>
                <p>{content}</p>
            </a>
        </div>
    );
};

export default ContactIcon;