import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ navOpacity, barVariant, children }) => {
  return (
    <>
      <Navbar opacity={navOpacity} barVariant={barVariant} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;