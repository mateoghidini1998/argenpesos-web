"use client"

import * as React from "react"
import responsabilidad from '../../../public/responsabilidad-social.png'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface BannerItem {
  imageUrl: string
  title: string
  subtitle: string
}

const bannerItems: BannerItem[] = [
  {
    imageUrl: responsabilidad,
    title: "Welcome to Our Store",
    subtitle: "Discover amazing products at unbeatable prices",
  },
  {
    imageUrl: responsabilidad,
    title: "Summer Sale",
    subtitle: "Get up to 50% off on selected items",
  },
  {
    imageUrl: responsabilidad,
    title: "New Arrivals",
    subtitle: "Check out our latest collection",
  },
]

export default function Responsabilidad() {
  return (
    <div className="w-full bg-[#82CC6D] ">
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
      className="w-full max-w-5xl mx-auto p-2 sm:p-6 md:p-8 lg:p-10 xl:p-14 2xl:p-20">
        <CarouselContent className="bg-transparent">
          {bannerItems.map((item, index) => (
            <CarouselItem key={index} >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col-reverse md:flex-row items-center p-0 gap-6">
                  <div className="w-full h-full sm:w-[400px] md:w-1/2 relative aspect-[3/2] overflow-hidden rounded-3xl">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground">{item.subtitle}</p>
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