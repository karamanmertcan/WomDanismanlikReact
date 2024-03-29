import { useContext, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { UserContext } from '../context';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const [state, setState] = useContext(UserContext);

  const onSubmit = async (input) => {
    try {
      const { data } = await axios.post(`/login`, { email: input.email, password: input.password });
      setState({
        user: data.user,
        token: data.token
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <section
        className="container mt-5   "
        style={{ height: 'auto', paddingTop: '150px', paddingBottom: '200px' }}>
        <h1 className="d-flex justify-content-center">Giriş Yap</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-12 w-50  ">
            <AuthForm
              register={register}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              page="login"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link href="/register">
            <a className="" style={{ textDecoration: 'none', color: 'black' }}>
              Üye Ol
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
