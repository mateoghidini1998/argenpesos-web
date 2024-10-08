import Image, { StaticImageData } from "next/image"

type MetodoDePagoProps = {
    title: string;
    image: StaticImageData
}

export default function MetodoDePago({ title, image }: MetodoDePagoProps) {
    return (
        <div className="flex flex-col items-center w-[150px] justify-start gap-2.5">
            <div className="flex items-center justify-center rounded-full w-[110px] h-[110px] px-6 py-8 border-solid border-[2px] border-[#00ADEE]">
                <Image src={image} alt={title} className=""/>
            </div>
            <p className="text-xl text-[#888] font-bold text-center">{title}</p>
        </div>
    )
}