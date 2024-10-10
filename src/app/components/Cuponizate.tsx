"use client"

import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import logo from '../../../public/cuponizate.png'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"



export default function Cuponizate() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/cuponizate')
        const result = await response.json()
        setData(result.results.slice(0, 10))
        console.log(result.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  function generateLink(name, id) {
    const formattedName = name.replace(/\s+/g, '-');
    return `https://cuponizate.com.ar/c/${formattedName}_${id}`;
  }


  return (
    <div className="w-full flex flex-col items-center justify-center gap-[30px] md:justify-between min-h-[430px] bg-[#6104EE] text-white p-[16px] md:p-[24px] lg:p-[14px] xl:p-[24px]">
      <div className='flex flex-col md:flex-row-reverse gap-[30px] justify-center md:justify-between items-center text-white w-full '>
        <div className='w-full md:w-[230px] flex justify-end'>
          <Image
            src={logo}
            alt="argencompras"
            className='w-[185px] h-[84px] md:w-[230px] md:h-[100px] mb-3.5 md:mb-0'
          />
        </div>
        <h2 className='text-base md:text-[28px] lg:text-[40px]'>¡Disfrutá de los mejores beneficios!</h2>
      </div>
      <div className="w-full bg-transparent">
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
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[86rem] mx-auto" 
        >
          <CarouselContent>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <CarouselItem key={index} className='lg:basis-1/2 xl:basis-1/4 md:min-h-[280px]'>
                  <div className="flex items-center justify-center w-auto md:max-w-1/3 md:h-[280px] bg-white px-3 py-9 md:px-2 lg:px-3 md:py-10 gap-4 md:gap-[px] rounded-lg shadow-lg text-center mb-[30px]">
                    <img 
                      src={item.foto_thumbnail.original} 
                      alt="coupon-logo" 
                      className='w-[95px] h-[85px] md:w-[120px] md:h-[170px]'
                    />
                    <div className='w-3/4 lg:w-1/2 h-full flex flex-col text-start justify-center'>
                      <span className='text-[#6648B8] text-2xl md:text-[40px] mb-1 font-bold'>{item.descuento}</span>
                      <p className='text-[10px] md:text-base text-[#5E5E5E] mb-4 font-md'>Descarga tu cupón y empieza a ahorrar</p>
                      <div className='w-full h-auto md:text-sm lg:text-base py-1.5 px-2.5 mb-2 bg-[#6648B8] rounded-md md:rounded-[10px] text-center'>
                        <Link href={generateLink(item.nombre, item.id)} target='__blank' className="inline-block w-full whitespace-nowrap">
                          Quiero este cupón
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
          <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-between text-[#6648B8] font-bold lg:justify-center xl:justify-center">
            <CarouselPrevious className="lg:mt-8 lg:mx-14 xl:m-0  relative md:absolute md:right-50 md:top-1/2 md:-translate-y-1/2 lg:relative xl:absolute xl:right-50 xl:top-1/2 xl:-translate-y-1/2" />
            <CarouselNext className="lg:mt-8 lg:mx-14 xl:m-0 relative md:absolute md:left-50 md:top-1/2 md:-translate-y-1/2 lg:relative xl:absolute xl:right-50 xl:top-1/2 xl:-translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}