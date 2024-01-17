import React from 'react'

export default function Header() {

    return (

        <React.Fragment>
            <div className='px-5'>
                <div className="md:flex justify-between py-3 ">
                    <div className="md:w-[60%] relative mx-auto md:mt-0 mt-4 text-center">
                        <input className="bg-[#f3f3f3] text-black rounded-3xl w-full h-12 md:w-[100%] p-3" type="text" placeholder="Search Here..." />
                        <i className="fa-solid fa-magnifying-glass top-2 right-5 md:absolute sm:absolute hidden sm:block md:flex mt-2"></i>
                    </div>
                    <div className="gap-3 items-center mt-4 md:mt-0 hidden sm:hidden md:flex">
                        <div className="flex gap-2 border-1 border-[#fecb64] rounded-3xl px-4 py-1.5 text-[10px] font-bold hover:bg-[#f15b38] hover:text-white">
                            <span>Get Your Product <br /> in 2 Days</span>
                            <i className="fa-regular fa-clock text-base mt-1"></i>
                        </div>
                        <div className=" bg-[#f3f3f3] rounded-full py-2.5 cursor-pointer w-12 h-12 text-center hover:border-2 hover:border-[#f15b38]">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className=" bg-[#f3f3f3] rounded-full py-2.5 cursor-pointer w-12 h-12 text-center hover:border-2 hover:border-[#f15b38]">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className=" bg-[#f3f3f3] rounded-full py-2.5 cursor-pointer w-12 h-12 text-center hover:border-2 hover:border-[#f15b38] ">
                            <img src="/images/bag2.svg" alt="" className="h-5 mx-auto my-0.5 mix-blend-color-burn" />
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 flex-1 w-100 py-3 overflow-x-scroll scroll scroll-d-none'>
                    <div className='text-center hover:text-[#f15b38] px-3 '>
                        <div>
                            <i className="fa-solid fa-shirt mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Clothings</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-hat-cowboy mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Hats</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-user-tie mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Ties</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-ring mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Rings</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-suitcase-rolling mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Travelling Bags</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-suitcase mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Suitcases</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-book-bookmark mt-1 fs-5"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Stationery Items</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <div>
                            <i className="fa-solid fa-bowl-food fs-5 mt-1"></i>
                        </div>
                        <div>
                            <h1 className='mt-2 font-semibold text-uppercase'>Crockery Items</h1>
                        </div>
                    </div>
                    <div className='text-center hover:text-[#f15b38] px-3'>
                        <i className="fa-solid fa-circle-plus fs-5"></i>
                        <div className='flex gap-2'>
                            <h1 className='mt-2 font-semibold'>MORE</h1>
                            <i className="fa-solid fa-angle-down mt-2"></i>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </React.Fragment>
    )
}
