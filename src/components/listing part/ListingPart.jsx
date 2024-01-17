import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { listingpartAction } from '../../redux/actions/listingpartAction'

export default function ListingPart() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productListingState.productList) || [];
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const initialPropertyDetail = {
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
            rate: "",
            count: "",
        };
        dispatch(listingpartAction(initialPropertyDetail));
    }, [dispatch]);

    const filteredProducts = selectedCategory
        ? productList.filter((product) => product.category === selectedCategory)
        : productList;


    return (
        <React.Fragment>
            <div className='px-5'>
                <div className=' my-3'>
                    <h1 className='fs-1 font-semibold'> Trending Products</h1>
                </div>
                <div className='flex flex-wrap justify-between '>
                    <div className='flex flex-wrap gap-3 my-3'>
                        <button className='flex gap-2 rounded-3xl h-fit w-fit px-4 py-2 border-2 bg-[#2a110a] text-white '>
                            <i className="fa-solid fa-sliders mt-1"></i>
                            Filter
                        </button>
                        <p className='mt-2.5 font-semibold text-sm hover:text-[#654a42]'>Showing 1-20 out of 224 Results</p>
                    </div>
                    <div>
                        <div className=' flex gap-3 mt-4 hover:text-[#654a42]'>
                            <p className=' font-semibold text-sm'>Sort By Popularity</p>
                            <i className="fa-solid fa-sort-down"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap gap-3 my-3">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`flex gap-2 rounded-3xl h-fit w-48 justify-center py-1 border-2  text-black  ${selectedCategory === null ? 'bg-[#f15b38] text-white' : 'border-[#fec34e] text-black'}`} >
                            <i className="fa-solid fa-globe mt-1 "></i>
                            All Categories
                        </button>
                        <button
                            onClick={() => setSelectedCategory('electronics')}
                            className={`flex gap-2 rounded-3xl h-fit  w-48  justify-center py-1 border-2  text-black ${selectedCategory === "electronics" ? 'bg-[#f15b38] text-white' : 'border-[#fec34e] text-black'}`} >
                            <i className="fa-solid fa-laptop mt-1"></i>
                            Electronics
                        </button>
                        <button
                            onClick={() => setSelectedCategory("men's clothing")}
                            className={`flex gap-2 rounded-3xl h-fit  w-48  justify-center py-1 border-2  text-black ${selectedCategory === "men's clothing" ? 'bg-[#f15b38] text-white' : 'border-[#fec34e] text-black'}`} >
                            <i className="fa-solid fa-shirt mt-1 "></i>
                            Men's Wear
                        </button>
                        <button
                            onClick={() => setSelectedCategory("women's clothing")}
                            className={`flex gap-2 rounded-3xl h-fit  w-48  justify-center py-1 border-2  text-black ${selectedCategory === "women's clothing" ? 'bg-[#f15b38] text-white' : 'border-[#fec34e] text-black'}`} >
                            <i className="fa-solid fa-person-dress mt-0.5 fs-5"></i>
                            Women's Wear
                        </button>
                        <button
                            onClick={() => setSelectedCategory("jewelery")}
                            className={`flex gap-2 rounded-3xl h-fit  w-48 justify-center py-1 border-2  text-black ${selectedCategory === "jewelery" ? 'bg-[#f15b38] text-white' : 'border-[#fec34e] text-black'}`} >
                            <i className="fa-solid fa-gem mt-1 "></i>
                            Jewellery
                        </button>
                    </div>
                    <hr />
                    <div className='flex justify-center gap-4 w-100 flex-wrap my-5 mr-5'>
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="cards w-64 border-1 border-[#f3f3f3] rounded-3">
                                <div className='w-[100%] mx-auto p-3 relative bg-white rounded-2'>
                                    <div>
                                        <img src={product.image} alt="" className="w-[100%] h-48" />
                                    </div>
                                    <div className="bg-[#1cb78d] rounded-full px-auto py-2 cursor-pointer w-11 h-11 text-center text-white absolute top-3 left-3">
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <span className='text-xs'> {product?.rating?.rate}</span>
                                    </div>
                                </div>
                                <div className='bg-[#f3f3f3] px-3 py-2 h-44 relative rounded-bl-md rounded-br-md'>
                                    <div>
                                        <h5 className="font-semibold text-uppercase">{product.title}</h5>
                                        <p className=" mt-1">Rs. {product.price}</p>
                                    </div>
                                    <div className='flex gap-[15vh] absolute bottom-2'>
                                        <div className='mt-2'>
                                            <p className="font-semibold">Count : {product?.rating?.count}</p>
                                        </div>
                                        <div className="bg-[#fec34e] rounded-full px-auto py-2 cursor-pointer w-10 h-10 text-center border-1 hover:border-[#2a110a] ">
                                            <img src='/images/bag2.svg' alt="" className='h-4 mx-auto my-1 mix-blend-color-burn' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </React.Fragment>
    )
}
