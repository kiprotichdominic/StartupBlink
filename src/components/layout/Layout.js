import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";


function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout