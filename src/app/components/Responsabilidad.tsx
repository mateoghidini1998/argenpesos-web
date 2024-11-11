"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
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
    <div className="w-full h-[700px] bg-transparent">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {POSTS.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-6 text-white">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{item.title}</h2>
                    {item.subtitle && <p className="text-xl md:text-2xl mb-4">{item.subtitle}</p>}
                    <p className="text-lg md:text-xl">{item.content}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}