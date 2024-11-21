"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LOGO from '../../../public/logo-rse.png'
import BANNERS from "../../data/banners.json";
import { useState, useEffect } from "react";

interface Post {
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  imageMobile?: string;
  logo?: string;
}

export default function Responsabilidad() {
  const numberOfPosts = BANNERS.length;
  const shouldLoop = numberOfPosts > 1;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 515); // Considera mobile si el ancho es <= 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[650px] md:h-[600px] xl:h-[800px] bg-transparent">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {BANNERS.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={isMobile && item.imageMobile ? item.imageMobile : item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start p-6">
                  <div className="text-white max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2">
                      {item.title}
                    </h2>
                    {item.subtitle && (
                      <p className="text-4xl mb-2 font-semibold">{item.subtitle}</p>
                    )}
                  </div>
                </div>
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src={LOGO}
                      alt="Logo"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
