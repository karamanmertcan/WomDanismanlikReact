import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
};

const Form = () => {
  const { register, handleSubmit, setValue } = useForm();

  const notify = () =>
    toast('Mesajınız Gönderildi! En kısa sürede ekibimiz tarafından dönüş yapılacaktır .!');

  const onSubmit = (data) => {
    let info = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      answer: data.answer,
      message: data.message
    };
    //1.
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then((res) => {
      if (res.status === 200) {
        setValue('name', '');
        setValue('email', '');
        setValue('subject', '');
        setValue('answer', '');
        setValue('message', '');
        toast('Mesajınız Gönderildi! En kısa sürede ekibimiz tarafından dönüş yapılacaktır .');
      }
    });
  };

  return (
    <div className='w-100'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mb-3 '>
              <label htmlFor='name' className='form-label'>
                İsminiz
              </label>
              <input
                type='text'
                className='form-control'
                {...register('name')}
                id='name'
                placeholder='İsminiz'
                required
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor='mail' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                {...register('email')}
                id='mail'
                placeholder='name@example.com'
                required
              />
            </div>
          </div>
          <div className='col-12'>
            <div class='mb-3 pt-4'>
              <label htmlFor='subject' class='form-label'>
                Konu
              </label>
              <input
                type='text'
                className='form-control'
                {...register('subject')}
                id='subject'
                placeholder='Konu'
                required
              />
            </div>
          </div>
          <div className='col-12 '>
            <div className='mb-3  pt-4'>
              <label htmlFor='message' className='form-label'>
                Neye İhtiyacınız Var?
              </label>
              <select className='form-select' {...register('answer')}>
                <option selected>Seçiniz</option>
                <option value='Yurt İçi E-Ticaret Danışmanlığı'>
                  Yurt İçi E-Ticaret Danışmanlığı
                </option>
                <option value='Yurt İçi E-Ticaret Eğitimi'>Yurt İçi E-Ticaret Eğitimi</option>
                <option value='Yurt Dışı Etsy Danışmanlığı'>Yurt Dışı Etsy Danışmanlığı</option>
                <option value='Web Site Yazılımı'>Web Site Yazılımı</option>
                <option value='Diğer'>Diğer</option>
              </select>
            </div>
          </div>
          <div className='col-12 '>
            <div className='mb-3  pt-4'>
              <label htmlFor='message' className='form-label'>
                Mesajınız
              </label>
              <textarea
                className='form-control'
                id='message'
                {...register('message')}
                rows='3'
                required
              />
            </div>
          </div>

          <div className='col-12  pt-4'>
            <button type='submit' className='btn btn-primary w-100'>
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
