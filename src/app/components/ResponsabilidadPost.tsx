import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ResponsabilidadPostPropTypes = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  content: string;
  reverse?: boolean;
  index: number;
};

export default function ResponsabilidadPost({
  image,
  title,
  subtitle,
  content,
  reverse,
  index,
}: ResponsabilidadPostPropTypes) {

  const backgroundColor = index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F3F4F4]';

  return (
    <div
      className={`w-full ${backgroundColor} text-[#82CC6D] p-8 sm:p-12 md:p-12 mx-auto flex flex-col items-center justify-center md:flex md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } gap-8 mb-12`}
    >
      <div className="w-full md:w-1/3 rounded-[0.5rem]">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-auto object-cover rounded-[0.5rem]"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h2 className="text-[40px] font-bold mb-2">{title}</h2>
        <h3 className="text-[24px] font-semibold mb-4">{subtitle}</h3>
        <p className="text-[20px] text-black">{content}</p>
      </div>
    </div>
  );
}
