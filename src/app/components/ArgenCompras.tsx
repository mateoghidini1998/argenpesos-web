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
            <div className="w-full flex flex-col items-center justify-center gap-[8px] md:gap-[30px] md:justify-between min-h-[430px] bg-[#E84729]  text-white p-[16px] md:p-[24px] ">
                <div className='flex flex-col md:flex-row-reverse gap-[15px] md:gap-[30px] justify-center md:justify-between items-center text-white w-full '>
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
                        /* plugins={[
                            Autoplay({
                                delay:3500
                            })
                          ]} */
                        className="w-full custom-carousel max-w-sm sm:max-w-md  lg:max-w-5xl xl:max-w-7xl mx-auto"

                    >
                        <CarouselContent>
                                {data && data.length > 0 ? (
                                    data.map((item, index) => (
                                        <CarouselItem key={index} className='lg:basis-1/2 xl:basis-1/3 min-h-[300px] md:min-h-[400px]'>
                                            <div className="flex items-center justify-center w-auto md:max-w-1/3 h-auto min-h-[225px] md:h-[280px] bg-white px-3 py-9 md:px-5 md:py-10 gap-4 md:gap-[30px] rounded-lg shadow-lg text-center mb-[30px]">
                                                <img 
                                                    src={item.images[0].src} 
                                                    alt="coupon-logo" 
                                                    className='w-[115px] h-[85px] md:w-[190px] md:h-[210px]'
                                                />
                                            
                                            <div className='w-1/2 h-full flex flex-col text-start justify-center'>
                                                    <span className='text-[#007092] text-base font-bold md:text-[24px] mb-1'>
                                                        {item.name.es.length > 30 ? `${item.name.es.substring(0, 30)}...` : item.name.es}
                                                    </span>
                                                    <span className='text-[#EC5647] text-base md:text-[24px] font-bold mb-1'>{`$${Math.floor(item.variants[0].price)}`}</span>
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

