<div>
  import {'{'} useForm {'}'} from 'react-hook-form'; const config = {'{'}
  headers: {'{'}
  'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  {'}'}
  {'}'}; const Form = () =&gt; {'{'}
  const {'{'} register, handleSubmit, setValue {'}'} = useForm(); const onSubmit = (data) =&gt;{' '}
  {'{'}
  let info = {'{'}
  name: data.name, email: data.email, subject: data.subject, answer: data.answer, message:
  data.message
  {'}'}; //1. fetch('/api/contact', {'{'}
  method: 'POST', headers: {'{'}
  Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json'
  {'}'}, body: JSON.stringify(info)
  {'}'}).then((res) =&gt; {'{'}
  if (res.status === 200) {'{'}
  setValue('name', ''); setValue('email', ''); setValue('subject', ''); setValue('answer', '');
  setValue('message', '');
  {'}'}
  {'}'});
  {'}'}; return (
  <div classname="w-100">
    <form onsubmit="{handleSubmit(onSubmit)}">
      <div classname="row">
        <div classname="col-md-6">
          <div classname="mb-3 ">
            <label htmlfor="name" classname="form-label">
              İsminiz
            </label>
            <input
              type="text"
              classname="form-control"
              {...register('name')}
              id="name"
              placeholder="İsminiz"
              required
            />
          </div>
        </div>
        <div classname="col-md-6">
          <div classname="mb-3">
            <label htmlfor="mail" classname="form-label">
              Email address
            </label>
            <input
              type="email"
              classname="form-control"
              {...register('email')}
              id="mail"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        <div classname="col-12">
          <div className="mb-3 pt-4">
            <label htmlfor="subject" className="form-label">
              Konu
            </label>
            <input
              type="text"
              className="form-control"
              {...register('subject')}
              id="subject"
              placeholder="Konu"
              required
            />
          </div>
        </div>
        <div classname="col-12 ">
          <div classname="mb-3  pt-4">
            <label htmlfor="message" classname="form-label">
              Neye İhtiyacınız Var?
            </label>
            <select classname="form-select" {...register('answer')}>
              <option selected>Seçiniz</option>
              <option value="Yurt İçi E-Ticaret Danışmanlığı">
                Yurt İçi E-Ticaret Danışmanlığı
              </option>
              <option value="Yurt İçi E-Ticaret Eğitimi">Yurt İçi E-Ticaret Eğitimi</option>
              <option value="Yurt Dışı Etsy Danışmanlığı">Yurt Dışı Etsy Danışmanlığı</option>
              <option value="Web Site Yazılımı">Web Site Yazılımı</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
        </div>
        <div classname="col-12 ">
          <div classname="mb-3  pt-4">
            <label htmlfor="message" classname="form-label">
              Mesajınız
            </label>
            <textarea
              classname="form-control"
              id="message"
              {...register('message')}
              rows={3}
              required
              defaultValue={
                '            </div>\n          </div>\n\n          <div className="col-12  pt-4">\n            <button type="submit" className="btn btn-primary w-100">\n              Gönder\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  );\n};\n\nexport default Form;\n'
              }
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>;
