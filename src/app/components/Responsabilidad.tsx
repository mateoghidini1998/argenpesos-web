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
import LOGO from "../../../public/logo-rse.png";
import BANNERS from "../../data/banners.json";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      setIsMobile(window.innerWidth <= 515);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[650px] md:h-[600px] xl:h-[800px] bg-transparent">
      {/* Carousel */}
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
                {/* Link que cubre toda la imagen */}
                <Link href="/responsabilidad-social">
                  {/* Imagen del banner */}
                  <Image
                    src={
                      isMobile && item.imageMobile
                        ? item.imageMobile
                        : item.image
                    }
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Fondo con opacidad */}
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  {/* Contenido del banner */}
                  <div
                    className={`absolute ${
                      item["text-position"] === "down" ? "bottom-0" : "top-0"
                    } left-0 w-full p-10`}
                  >
                    <div className="text-white max-w-4xl">
                      {item.subtitle && (
                        <p className="text-2xl md:text-3xl font-semibold">
                          {item.subtitle}
                        </p>
                      )}
                      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer" />
      </Carousel>
    </div>
  );
}
