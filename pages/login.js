import Layout from '../components/Layout';
import Image from 'next/image';

const Login = () => {
    return (
        <Layout>
            <section className="container mt-5 pt-5" style={{ height: '100vh', width: '100vw' }}>
                <div className="row">
                    <div className="col-md-6 h-100"> naber    </div>
                    <div className="col-md-6 h-100">
                        <Image src={"/images/logo.png"} style={{ height: '100% !important', width: '100% !important' }} height={200} width={150} objectFit='cover' />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
