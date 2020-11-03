import React from 'react'
import Link from "next/link"

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul className="nav-bar-container">
                <li className="nav-bar-logo"><Link href={"/"}><img src="https://seekvectorlogo.net/wp-content/uploads/2018/09/atn-corp-vector-logo.png" alt="atn-logo" height={40} style={{marginRight: 10}} width={80}/></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/login"}><text className={"text-white nav-link"}>Login</text></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/register"}><text className={"text-white nav-link"}>Register</text></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/product"}><text className={"text-white nav-link"}>Add Product</text></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/orders"}><text className={"text-white nav-link"}>Orders</text></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/add-order"}><text className={"text-white nav-link"}>Add Orders</text></Link></li>
                <li className="nav-bar-item nav-link"><Link href={"/"}><text className={"text-white nav-link"}>Home</text></Link></li>

            </ul>
        </nav>
    )
}
export default NavBar;