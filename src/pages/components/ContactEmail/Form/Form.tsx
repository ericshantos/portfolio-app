import { useState, ChangeEvent, FormEvent } from "react";
import { handleSubmit, CommonBtn } from '..';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
  checkbox: boolean;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: '',
    checkbox: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
  
    setFormData((prevData) => ({
      ...prevData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };
  

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e, formData, setFormData);
  };

  return (
    <form className="EmailForm" onSubmit={handleFormSubmit}>
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
          rows={5} 
          cols={30} 
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
      <CommonBtn type="submit" content="Enviar mensagem" />
    </form>
  );
};

export default Form;
