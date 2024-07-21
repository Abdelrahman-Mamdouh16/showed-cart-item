"use client"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <div className="MainSlider ">
                <div className="container px-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-lg overflow-hidden">
                        <div className="col-span-2">
                            <Slider {...settings}>
                                <Image
                                    src="/slider-image-1.69e5e73301d9616ba8c6.jpeg"
                                    alt="Slider Image 1"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-[400px] w-full object-right" loading='lazy'
                                />
                                <Image
                                    src="/grocery-banner-2.jpeg"
                                    alt="Slider Image 2"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-[400px] w-full object-right" loading='lazy'
                                />
                                <Image
                                    src="/slider-image-3.jpeg"
                                    alt="Slider Image 3"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-[400px] w-full object-right" loading='lazy'
                                />
                            </Slider>
                        </div>
                        <div className="col-span-1 md:flex flex-col hidden">
                            <Image
                                src="/slider-image-2.jpeg"
                                alt="Grocery Banner 2"
                                width={400}
                                height={400}
                                className="object-cover object-right h-[200px] w-full" loading='lazy'
                            />
                            <Image
                                src="/slider-image-1.jpeg"
                                alt="Slider Image 4"
                                width={400}
                                height={400}
                                className="object-cover  h-[200px] w-full" loading='lazy'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
