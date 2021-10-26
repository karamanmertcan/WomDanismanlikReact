import Layout from '../components/Layout';
import Image from 'next/image';

const Login = () => {
  return (
    <Layout>
      <section className="container mt-5 pt-5 pb-5" style={{ height: 'auto', width: '100vw' }}>
        <div className="row">
          <div className="col-md-6 h-100"> naber </div>
          <div className="col-md-6 h-100 ">
            <Image
              src={'/images/logo.png'}
              height={200}
              width={200}
              objectFit="contain"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
