import React from 'react'

export default function Footer() {
    return (
        
        <React.Fragment>
            <div className='h-fit bg-[#2a110a] text-white border-t-4 border-red-700 px-3 '>
                <div className='flex flex-col md:flex-row justify-evenly py-5 md:ps-[20%]'>
                    <div className='mb-4 md:mb-0'>
                        <h5 className='font-bold text-[#fec34e] text-lg'>About Us</h5>
                        <p>Our Story</p>
                        <p>Blog</p>
                        <p>FAQ's</p>
                        <p>Contact</p>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <h5 className='font-bold text-[#fec34e] text-lg'>Help</h5>
                        <p>Delivery / Shipment Policy</p>
                        <p>Return & Exchange</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <i className="fa-brands fa-x-twitter mt-2 md:mt-0"></i>
                    </div>
                    <div className='mb-4 md:mb-0 text-[#fec34e] '>
                        <h5 className='font-bold text-lg'>Follow Us</h5>
                        <div className='flex gap-3 mt-1'>
                            <i className="fa-brands fa-facebook fs-4 hover:text-white"></i>
                            <i className="fa-brands fa-instagram fs-4 hover:text-white"></i>
                            <i className="fa-brands fa-whatsapp fs-4 hover:text-white"></i>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold text-[#fec34e] text-lg'>Subscribe</h5>
                        <p className="md:w-[80%]">Please enter your email address<br />to receive the newsletter of our<br /> blog Posts.</p>
                        <div className='mt-3 flex flex-col md:flex-row items-center'>
                            <div className="w-full md:w-auto md:text-left">
                                <input type='text' placeholder='Your email id' className='px-3 py-0.5 rounded-2xl border-1 border-[#fecb64] bg-transparent mb-2 md:mb-0 md:mr-2 ' />
                            </div>
                            <i className="fa-solid fa-paper-plane rounded-3xl bg-[#fec34e] px-3 py-1.5 md:absolute  md:right-[19vh] mb-2"></i>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-[#fec34e] w-full text-center py-5 '>
                    <i className="fa-regular fa-copyright"></i>
                    <span className='block md:inline'> E-commerce 2023. Designed & Developed by NGT</span>
                </div>
            </div>
        </React.Fragment>
    )
}
