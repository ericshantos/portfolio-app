'use client';

import { useState } from 'react';
import { handleSubmit, useAppContext, CommonBtn, CloseBtn, ContactIcon } from '.';
import { MdEmail } from 'react-icons/md';

const ContactEmail = () => {
  const { isVisible } = useAppContext();

  return (
    <section className="ContactEmail" style={{ display: isVisible ? 'flex' : 'none' }}>
      <section className="EmailContainer">
        <CloseBtn />
        <ContactIcon 
          icon="mail"
          Icon={MdEmail}
          id="mail"
          context="Gostaria de dar um oi!"
        />
        <Form />
      </section>
    </section>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form 
      className="EmailForm" 
      onSubmit={(e) => handleSubmit(e, formData, setFormData)}
    >
      <div className="FormItem">
        <label htmlFor="from_name">Seu nome</label>
        <input 
          type="text" 
          name="from_name" 
          id="from_name" 
          value={formData.from_name} 
          onChange={handleChange} 
          placeholder="Ex: Machado de Assis" 
          required
        />
      </div>
      <div className="FormItem">
        <label htmlFor="from_email">Seu email</label>
        <input 
          type="email" 
          name="from_email" 
          id="from_email" 
          value={formData.from_email} 
          onChange={handleChange} 
          placeholder="exemplo@dominio.com" 
          required 
        />
      </div>
      <div className="FormItem">
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="5" 
          cols="30" 
          placeholder="Sua mensagem" 
        />
      </div>
      <div className="CheckboxItem">
        <input 
          type="checkbox" 
          name="checkbox" 
          id="checkbox" 
          checked={formData.checkbox} 
          onChange={handleChange} 
          required 
        />
        <label htmlFor="checkbox">Concordo em ser uma pessoa legal e gentil!</label>
      </div>
      <CommonBtn 
        type="submit" 
        content="Enviar mensagem"
      />
    </form>
  );
};

export default ContactEmail;