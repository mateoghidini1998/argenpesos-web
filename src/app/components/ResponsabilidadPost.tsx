import Image, { StaticImageData } from 'next/image';
import React from 'react'

type ResponsabilidadPostPropTypes = {
    image: string | StaticImageData; 
    title: string;
    subtitle: string;
    content: string;
    reverse?: boolean
}

export default function ResponsabilidadPost({ image, title, subtitle, content, reverse }: ResponsabilidadPostPropTypes) {
    return (
      <div className={`w-full bg-[#82CC6D] text-white p-8 sm:p-12 md:p-16 mx-auto flex flex-col items-center justify-center md:flex md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-8 mb-12`}>
          <div className='w-full md:w-1/2'>
            <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={500} 
                className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-[40px] font-bold mb-2">{title}</h2>
              <h3 className="text-[24px] font-semibold mb-4">{subtitle}</h3>
              <p className="text-[20px] text-white">{content}</p>
          </div>
      </div>
    )
  }
