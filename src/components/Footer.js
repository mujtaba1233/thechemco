import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img width={400} className='img-fluid' src='binchem-logo.png' />
                    <small style={{color : '#39758b', marginTop: '20px'}}>0303 417985 1</small>
                    <small style={{color : '#39758b'}}>shahzadmujtaba316@gmail.com</small>
                </div>
            </div>
            <section className='bg-dark mt-5 p-4 footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 text-light'>
                            ABOUT TCC
                        </div>
                        <div className='col-3 text-light'>
                            SUBSCRIBE TO THE VIEW
                        </div>
                        <div className='col-4 text-light'>
                            CONTACT US YOUR BULK DISTRIBUTOR
                        </div>
                        <div className='col-2 text-light'>PRIVACY</div>
                    </div>
                </div>
                <div className='d-flex justify-content-between section-2'>
                    <div className='text-light'>
                        THE CHEMICAL COMPANY
                    </div>
                    <div className='text-light'>
                        ALL RIGHT RESERVED @2023
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer