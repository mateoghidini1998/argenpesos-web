import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

type MetodoDePagoProps = {
    title: string;
    image: StaticImageData | ReactElement;
};


export default function MetodoDePago({ title, image }: MetodoDePagoProps) {
    return (
        <div className="flex flex-col items-center w-[150px] justify-start gap-1.5">
            <div className="metodo-svg flex items-center justify-center rounded-full w-[110px] h-[110px] px-6 py-8 border-solid border-[2px] border-[#00ADEE]">
                {typeof image === 'object' && 'src' in image ? (
                    <Image src={image as StaticImageData} alt={title} className=""/>
                ) : (
                    image
                )}
            </div>
            <p className="text-xl text-[#888] font-bold text-center">{title}</p>
        </div>
    );
}