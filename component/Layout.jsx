import Footer from "./Footer";
import Navbar from "./Navbar";
import { body } from "./Style";

const Layout = ({children}) => {
    return ( 
        <div className="">
            <Navbar />
            <body className="bg-light container card shadow border">
            {children} 
            </body>
            <Footer/>
        </div>
     );
}
 
export default Layout;