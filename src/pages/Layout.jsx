import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
  <div className='page-container'>
    <Header />
    {children}
    </div>
    <Footer />
  </>
);

export default Layout;