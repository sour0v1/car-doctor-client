import React from 'react';
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />

                    <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='w-2/3 space-y-7 text-white mt-36 pl-16'>
                            <h1 className='text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />

                    <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='w-2/3 space-y-7 text-white mt-36 pl-16'>
                            <h1 className='text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                            <div>
                                <button className="mr-4 bg-[#FF3811]">Discover More</button>
                                <button className="">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />

                    <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='w-2/3 space-y-7 text-white mt-36 pl-16'>
                            <h1 className='text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;