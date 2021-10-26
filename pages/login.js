
import Layout from '../components/Layout';

const pagestyle = {
    width: '100vw',
    heigth: '100vh',
}
const Login = () => {
    return (
        <Layout style={pagestyle}>
            <div className="col-6 h-100">
                hello word
            </div>
            <div className="col-6 h-100"></div>
        </Layout>
    );
};

export default Login;