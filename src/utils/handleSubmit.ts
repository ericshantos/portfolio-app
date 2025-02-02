import emailjs from 'emailjs-com';
import 'izitoast/dist/css/iziToast.min.css';

let iziToast: any;
if (typeof window !== 'undefined') {
  iziToast = require('izitoast');
}

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
  checkbox: boolean;
}

type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData,
  setFormData: SetFormData
): void => {
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
    throw new Error('Environment variables are not set correctly.');
  }

  emailjs
    .send(serviceID, templateID, { ...formData }, userID)
    .then(() => {
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
    .catch((error: any) => {
      if (iziToast) {
        iziToast.error({
          title: 'Erro',
          message: 'Houve um problema ao enviar sua mensagem. Tente novamente.',
          position: 'topRight',
        });
      }
      console.error('Error sending the email:', error);
    });
};

export default handleSubmit;