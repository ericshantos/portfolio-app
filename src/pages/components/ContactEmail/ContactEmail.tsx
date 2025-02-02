'use client';

import { useApp, Form, CloseBtn, ContactIcon } from '.';
import { MdEmail } from 'react-icons/md';

const ContactEmail : React.FC = () => {
  const { isVisible } = useApp();

  return (
    <section className="ContactEmail" style={{ display: isVisible ? 'flex' : 'none' }}>
      <section className="EmailContainer">
        <CloseBtn />
        <ContactIcon 
          Icon={MdEmail}
          id="mail"
          content="Gostaria de dar um oi!"
        />
        <Form />
      </section>
    </section>
  );
};

export default ContactEmail;