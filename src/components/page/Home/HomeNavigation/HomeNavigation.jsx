"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const HomeNavigation = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Images array
  const images = [
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.54 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM (1).jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM (1).jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.54 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM (1).jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM (1).jpeg",
  ];

  return (
    <div className="flex justify-center">
        
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-7xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className=" flex">
          {images.map((image, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/3">
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image height={400}  width={500}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeNavigation;
