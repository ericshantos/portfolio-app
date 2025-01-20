import emailjs from 'emailjs-com';
import 'izitoast/dist/css/iziToast.min.css';

let iziToast;
if (typeof window !== 'undefined') {
  iziToast = require('izitoast');
}

const handleSubmit = (e, formData, setFormData) => {
  e.preventDefault();

  const { from_name, from_email, message, checkbox } = formData;

  if (!from_name || !from_email || !message || !checkbox) {
    if (iziToast) {
      iziToast.error({
        title: 'Erro',
        message: 'Preencha todos os campos necessários.',
        position: 'topRight',
      });
    }
    return;
  }

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceID || !templateID || !userID) {
    if (iziToast) {
      iziToast.error({
        title: 'Erro',
        message: 'Configuração do serviço de e-mail está incompleta.',
        position: 'topRight',
      });
    }
    throw new Error('Variáveis de ambiente não estão definidas corretamente.');
  }

  emailjs
    .send(serviceID, templateID, formData, userID)
    .then((response) => {
      if (iziToast) {
        iziToast.success({
          title: 'Sucesso',
          message: 'Mensagem enviada com sucesso!',
          position: 'topRight',
        });
      }

      setFormData({
        from_name: '',
        from_email: '',
        message: '',
        checkbox: false,
      });
    })
    .catch((error) => {
      if (iziToast) {
        iziToast.error({
          title: 'Erro',
          message: 'Houve um problema ao enviar sua mensagem. Tente novamente.',
          position: 'topRight',
        });
      }
      console.error('Erro ao enviar o e-mail:', error);
    });
};

export default handleSubmit;
