const ContactIcon = ({ icon, context, link , onclick}) => {
    
    return (
        <div className='ContactIcon'>
            <div className='BackgroundIcon' id={icon} onClick={onclick}>
                <a href={link} target='_blank'>
                    <ion-icon name={icon}></ion-icon>
                </a>
            </div>
            <p>{context}</p>
        </div>
    );
};

export default ContactIcon;