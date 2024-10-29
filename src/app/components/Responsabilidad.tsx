"use client"
import { useEffect } from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Logo from '../../../public/logo-argenpesos-white.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import POSTS from '../../data/posts.json'

interface Post {
  title: string
  subtitle?: string
  content: string
  image: string
}

export default function Responsabilidad() {

const numberOfPosts = POSTS.length;
const shouldLoop = numberOfPosts > 1;

  return (
    <div className="w-full bg-[#82CC6D] pt-10 gap-10">
      <div className='flex flex-col sm:flex-row-reverse md:flex-row gap-[30px] justify-center md:justify-between items-center text-white w-full px-10 mb-4'>
        <h2 className='text-[28px] sm:text-[34px] lg:text-[40px] text-center sm:text-start'>Responsabilidad Social</h2>
      </div>
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
      className="w-full max-w-[80rem] mx-auto p-2 sm:p-6 md:p-8 lg:p-10  2xl:p-12">
        <CarouselContent className="bg-transparent">
          {POSTS.map((item, index) => (
            <CarouselItem key={index} >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="min-h-[480px] flex flex-col lg:flex-row items-start p-0 gap-6">
                  <div className="w-full h-full   md:h-1/2 lg:w-1/2 relative aspect-[3/2] overflow-hidden rounded-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="w-full md:w-full lg:w-1/2 px-6  flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-[64px] lg:leading-[4rem] font-bold text-white mb-2">{item.title}</h2>
                    <p className="text-muted-foreground text-white font-medium">{item.subtitle || ''}</p>
                    <p className="text-muted-foreground mt-4 text-white text-[18px]">{item.content}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="sm:h-[60px] md:h-[0px] mt-4 md:mt-0 flex justify-center md:justify-between text-[#6648B8] font-bold">
            <CarouselPrevious className="relative md:absolute md:right-50 md:top-1/2 md:-translate-y-1/2" />
            <CarouselNext className="relative md:absolute md:left-50 md:top-1/2 md:-translate-y-1/2" />
        </div>
      </Carousel>

    </div>
  )
}

{/* <div className="w-full bg-[#82CC6D]">
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
    <CarouselContent className="bg-transparent flex items-center justify-center">
      {POSTS.map((post, index) => (
        <CarouselItem key={index}>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col-reverse md:flex-row items-center p-0 gap-6">
              <div className="w-full h-full sm:w-[400px] md:w-1/2 relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-muted-foreground text-white font-medium">{post.subtitle || ''}</p>
                <p className="text-muted-foreground mt-4 text-white">{post.content}</p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <div className="sm:h-[60px] md:h-[0px] mt-4 md:mt-0 flex justify-center md:justify-between text-[#6648B8] font-bold">
      <CarouselPrevious className="relative md:absolute md:right-50 md:top-1/2 md:-translate-y-1/2" />
      <CarouselNext className="relative md:absolute md:left-50 md:top-1/2 md:-translate-y-1/2" />
    </div>
  </Carousel>
</div> */}