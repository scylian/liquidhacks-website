import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ navOpacity, children }) => {
  return (
    <>
      <Navbar opacity={navOpacity} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;