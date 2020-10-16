import React from 'react'

const Footer: React.FC = () => {
    return (
        <div>
            <div className="footer-container">
                <img className="img-logo" src="https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/95925/entries/b0519452e3372fe7.jpg" alt="atn-logo" /> 
                <div>
                    <h3 style={{marginLeft: "20px"}} className="text-white">Categories</h3>
                    <ul>
                        <li className="text-white">Animals</li>
                        <li className="text-white">Creative Toys</li>
                        <li className="text-white">Dolls</li>
                        <li className="text-white">Education Toys</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{marginLeft: "20px"}} className="text-white">Brands</h3>
                    <ul>
                        <li className="text-white">LEGO</li>
                        <li className="text-white">BANDAI</li>
                        <li className="text-white">Nintendo</li>
                        <li className="text-white">Baby Eisntein</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{marginLeft: "20px"}} className="text-white">Social Media</h3>
                    <ul>
                        <li className="text-white">Facebook</li>
                        <li className="text-white">Youtube</li>
                        <li className="text-white">Twitter</li>
                        <li className="text-white">Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;