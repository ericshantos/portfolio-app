import emailjs from 'emailjs-com';

const handleSubmit = (e, formData, setFormData) => {
  e.preventDefault();

  const { from_name, from_email, message, checkbox } = formData;

  if (!from_name || !from_email || !message || !checkbox) {
    alert('Preencha todos os campos necessários');
    return;
  }

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceID || !templateID || !userID) {
    throw new Error("Variáveis de ambiente não estão definidas corretamente.");
  }
  
  console.log(serviceID, templateID, userID);

  emailjs
    .send(serviceID, templateID, formData, userID)
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');

      setFormData({
        from_name: '',
        from_email: '',
        message: '',
        checkbox: false,
      });
    })
    .catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
      alert('Houve um problema ao enviar sua mensagem.');
    });
};

export default handleSubmit;