"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo-white.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

export default function ArgenCompras() {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true) 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/argencompras'); 
                const result = await response.json();
                setData(result);
                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center gap-[30px] md:justify-between h-[430px] bg-[#E84729]  text-white p-[16px] md:p-[24px] ">
                <div className='flex flex-col md:flex-row-reverse gap-[30px] justify-center md:justify-between items-center text-white w-full '>
                    <div className='w-full md:w-[260px] flex justify-end'>
                        <Image src={logo} alt="argencompras"
                        className='w-[185px] h-[53px] md:w-[260px] md:h-[75px] mb-3.5 md:mb-0'
                        />
                    </div>
                    <h2 className='text-base md:text-[28px] lg:text-[40px]'>Todo lo que necesitas para vos y tu hogar</h2>
                </div>
                <div className="w-full  bg-transparent">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay:3500
                            })
                          ]}
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto"

                    >
                        <CarouselContent>
                                {data && data.length > 0 ? (
                                    data.map((item, index) => (
                                        <CarouselItem key={index} className=' lg:basis-1/2 xl:basis-1/3 min-h[180px]'>
                                            <div className="flex items-center justify-center w-auto md:max-w-1/3 h-auto min-h-[225px] md:h-[280px] bg-white px-3 py-9 md:px-5 md:py-16 gap-4 md:gap-[30px] rounded-lg shadow-lg text-center mb-[30px]">
                                                <img 
                                                    src={item.images[0].src} 
                                                    alt="coupon-logo" 
                                                    className='w-[115px] h-[85px] md:w-[140px] md:h-[140px]'
                                                />
                                            
                                            <div className='w-1/2 h-full flex flex-col text-start justify-center'>
                                                    <span className='text-[#007092] text-base md:text-[24px] mb-1'>
                                                        {item.name.es.length > 30 ? `${item.name.es.substring(0, 30)}...` : item.name.es}
                                                    </span>
                                                    <span className='text-[#EC5647] text-base md:text-[24px] mb-1'>{`$${Math.floor(item.variants[0].price)}`}</span>
                                                    <div className='w-full h-auto py-1 px-2.5 md:px-4 mb-2 bg-[#EC5647] rounded-md md:rounded-[10px] text-center'>
                                                        <Link href="#" className="inline-block w-full whitespace-nowrap">
                                                        Comprar ahora
                                                        </Link>
                                                    </div>
                                                    <div className='w-full h-auto py-1 px-2.5 md:px-4 bg-[#007092] rounded-md md:rounded-[10px] text-center'>
                                                        <Link href="#" className="inline-block w-full whitespace-nowrap">
                                                        + info
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                ) : (
                                    <p className="text-white">No hay datos disponibles.</p> 
                                )}
                        </CarouselContent>
                        <div className="mt-4 md:mt-0 flex justify-center md:justify-between text-[#EC5647] font-bold">
                            <CarouselPrevious className="relative md:absolute md:right-50 md:top-1/2 md:-translate-y-1/2" />
                            <CarouselNext className="relative md:absolute md:left-50 md:top-1/2 md:-translate-y-1/2" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

/* return (
    <>
        <div className="w-full flex flex-col items-center justify-center gap-[30px] md:justify-between h-[484px] bg-[#E84729]  text-white p-[16px] md:p-[24px] lg:p-[42px] ">
            <div className='flex flex-col md:flex-row-reverse gap-[30px] justify-center md:justify-between items-center text-white w-full '>
                <div className='w-full md:w-[260px] flex justify-end'>
                    <Image src={logo} alt="argencompras"
                    className='w-[185px] h-[53px] md:w-[260px] md:h-[75px] mb-3.5 md:mb-0'
                    />
                </div>
                <p className='text-base md:text-[28px] lg:text-[40px]'>Todo lo que necesitas para vos y tu hogar</p>
            </div>
            <div className="w-full md:p-8 bg-transparent">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    breakpoints={{
                        0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        550: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        }
                    }}
                    className="w-full"
                >
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center w-auto md:max-w-1/3 h-auto md:h-[280px] bg-white px-3 py-9 md:px-5 md:py-16 gap-4 md:gap-[30px] rounded-lg shadow-lg text-center">
                                    <img 
                                        src={item.images[0].src} 
                                        alt="coupon-logo" 
                                        className='w-[95px] h-[85px] md:w-[140px] md:h-[140px]'
                                    />
                                
                                <div className='w-3/4 md:w-1/2 h-full flex flex-col text-start justify-center'>
                                        <span className='text-[#007092] text-base md:text-[24px] mb-1'>
                                            {item.name.es.length > 30 ? `${item.name.es.substring(0, 30)}...` : item.name.es}
                                        </span>
                                        <span className='text-[#EC5647] text-base md:text-[24px] mb-1'>{`$${Math.floor(item.variants[0].price)}`}</span>
                                        <div className='w-full h-auto py-1 px-2.5 md:px-4 mb-2 bg-[#EC5647] rounded-md md:rounded-[10px] text-center'>
                                            <Link href="#" className="inline-block w-full whitespace-nowrap">
                                            Compras ahora
                                            </Link>
                                        </div>
                                        <div className='w-full h-auto py-1 px-2.5 md:px-4 bg-[#007092] rounded-md md:rounded-[10px] text-center'>
                                            <Link href="#" className="inline-block w-full whitespace-nowrap">
                                            + info
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-white">No hay datos disponibles.</p>  // Mensaje opcional si no hay datos
                    )}
                </Swiper>
            </div>
        </div>
    </>
) */