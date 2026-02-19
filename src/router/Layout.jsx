import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
    <Banner />
    {children}
    <Footer />
  </>
);

export default Layout;