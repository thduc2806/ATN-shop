import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
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
        <div>
            <Affix>
                <NavBar />
            </Affix>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

export default MyApp
