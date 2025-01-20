const ContactIcon = ({ Icon, context, link, id, onClick = null }) => {
    return (
        <div className="ContactIcon">
            <div className="BackgroundIcon" id={id}>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={onClick}
                >
                    {Icon && <Icon />}
                </a>
            </div>
            <p>{context}</p>
        </div>
    );
};

export default ContactIcon;