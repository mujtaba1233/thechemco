import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
    return (
        <div className="container header">
            <div className="row">
                <div className="col-6 d-flex header">
                    <div>
                        <span> (401) 360-2800</span>
                    </div>
                    <div className="text-end">
                        44 Southwest Avenue, Jamestown, RI 02835
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <div>
                        <FaFacebookF />
                    </div>
                    <div className='ms-2'>
                        <FaInstagram />
                    </div>
                    <div className='ms-2'>
                        <FaTwitter />
                    </div>
                    <div className='ms-2'>
                        <FaLinkedin />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header