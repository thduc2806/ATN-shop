import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
//css
import '../styles/Login.css'
import '../styles/NavBar.css'
import '../styles/Footer.css'
import '../styles/InputField.css'
import 'antd/dist/antd.css';
import '../styles/Category.css'
import '../styles/Orders.css'
import '../styles/OrdersDetail.css'
import {Affix} from "antd";


function MyApp({Component, pageProps}) {
    return (
        <>
            <Affix>
                <NavBar />
            </Affix>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
