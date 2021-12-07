import { useContext, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { UserContext } from '../context';
import { useForm } from 'react-hook-form';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();

  const registerSubmit = async (input) => {
    try {
      const { data } = await axios.post(`/register`, {
        name: input.name,
        email: input.email,
        password: input.password
      });

      //   setState({});
    } catch (error) {}
  };
  return (
    <Layout>
      <section
        className='container mt-5   '
        style={{ height: 'auto', paddingTop: '150px', paddingBottom: '200px' }}>
        <h1 className='d-flex justify-content-center'>Üye Ol</h1>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 w-50  '>
            <AuthForm
              register={register}
              registerSubmit={registerSubmit}
              handleSubmit={handleSubmit}
              page='register'
            />
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <Link href='/login'>
            <a className='' style={{ textDecoration: 'none', color: 'black' }}>
              Giriş Yap
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
