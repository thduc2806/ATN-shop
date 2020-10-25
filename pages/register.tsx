import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Head from "next/head";

//components
import InputField from '../components/InputField'


const Register: React.FC = (props) => {
    return (
        <div className="form-container">
            <Head>
                <title>ATN | REGISTER</title>
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <div className="login-form-container">
                <div style={{marginLeft: 20, marginTop: 50, marginBottom: 50}}>
                    <text style={{fontSize: 40, fontWeight: "bold"}} className="text-white">Welcome Back</text>
                    <br/>
                    <text style={{color: "#7faac0"}}>Sign up to login</text>
                </div>
                <InputField title="Email" type="email" placeholder="Input your email" />
                <InputField title="Username" type="text" placeholder="Input your Username" />
                <InputField title="Password" type="password" placeholder="Input your password" />
                <InputField title="Confirm Password" type="password" placeholder="Input your confirm password" />
                <Button className="login-button" type="default" shape="round" size="large">Register</Button>
            </div>
        </div>
    )
}

export default Register;
