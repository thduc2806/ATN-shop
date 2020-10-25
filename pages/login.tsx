import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Head from "next/head";
import Link from "next/link"

//components
import InputField from '../components/InputField'


const Login: React.FC = (props) => {
    return (
        <div className="form-container">
            <Head>
                <title>ATN | LOGIN</title>
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <div className="login-form-container">
                <div style={{marginLeft: 20, marginTop: 50, marginBottom: 50}}>
                    <text style={{fontSize: 40, fontWeight: "bold"}} className="text-white">Welcome Back</text>
                    <br/>
                    <text style={{color: "#7faac0"}}>Sign in to continues</text>
                </div>
                <InputField title="Email" type="email" placeholder="Input your email" />
                <InputField title="Password" type="password" placeholder="Input your password" />
                <Button className="login-button" type="default" shape="round" size="large">Login</Button>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 50, marginLeft:20, marginRight: 20}}>
                    <text className="text-white">Forgot Password?</text>
                    <Link href="/register"><a className="text-white">Create Account</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
