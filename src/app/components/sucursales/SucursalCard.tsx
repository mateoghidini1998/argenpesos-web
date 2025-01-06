import Link from "next/link";
import Image from "next/image";
import sucursalImg from '../../../../public/sucursal.png'
import Location from "../svgs/Location";
import Whatsapp from "../svgs/Whatsapp";
import { Card } from "@/components/ui/card";

export default function SucursalCard({ sucursal, telefono, celular, direccion, link_whatsapp, link_maps, image }) {
    return (

        <div className="w-full max-w-4xl mx-auto overflow-hidden">
                    <Card className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 rounded-t-[0.75rem] sm:rounded-l-[0.75rem] sm:rounded-tr-none">
                            <Image
                                className="object-cover w-full h-full rounded-t-[0.75rem] sm:rounded-l-[0.75rem] sm:rounded-tr-none"
                                height="100%"
                                src={image || sucursalImg} 
                                alt='sucursal' 
                                style={{
                                aspectRatio: "300/400",
                                objectFit: "cover",
                                }}
                                width="100%"
                            />
                        </div>
                        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-lightblue-primary mb-4">{sucursal}</h2>
                                <p className="text-[#888] text-muted-foreground mb-2">{direccion}</p>
                                {telefono && (
                                    <p className="text-[#888] text-muted-foreground mb-2">{telefono}</p>
                                )}
                                <p className="text-[#888] text-muted-foreground mb-2">{celular}</p>
                                <p className="text-[#888] text-muted-foreground mb-2">Lun a Vier 9:00 a 18:45 hs</p>
                                <p className="text-[#888] text-muted-foreground mb-6">Sab 9:00 a 13:00 hs</p>
                            </div>
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
                                <Link href={link_whatsapp} target="__blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground  h-10 px-4 py-2 w-full sm:w-auto bg-[#77BE78]">
                                    Contactanos
                                    <Whatsapp className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href={link_maps} target="__blank"  variant="outline" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input  h-10 px-4 py-2 w-full sm:w-auto bg-[#00ADEE] text-white">
                                    ¿Cómo llego?
                                    <Location className="mr-2 h-4 w-4  " />
                                </Link>
                            </div>
                        </div>
                </Card>
        </div>
    )
}

{/* <div className="flex items-center h-[220px] md:h-[260px] lg:h-[300px] xl:h-[340px] max-w-[340px] md:max-w-[500px] lg:max-w-[600px] xl:max-w[650px] justify-start p-2.5 lg:p-4 xl:p-6 bg-[#f7f7f7] rounded-[15px] gap-3.5 md:gap-[20px]">  
    <div className="h-full w-1/2">
        <Image 
            src={sucursalImg} 
            alt='sucursal' 
            className="h-full w-full object-cover rounded-[10px]" 
        />
    </div>
    <div className="flex flex-col w-1/2">
        <div className="w-full flex flex-col">
            <h4 className="text-[15px] md:text-[18px] lg:text-[25px] xl:text-[30px] font-bold text-lightblue-primary">{sucursal}</h4>
            <p className="text-[10px] md:text-base lg:text-[16px] xl:text-[20px] text-[#888]">{direccion}</p>
            <p className="text-[10px] md:text-base lg:text-[16px] xl:text-[20px] text-[#888]">{telefono}</p>
            <p className="text-[10px] md:text-base lg:text-[16px] xl:text-[20px] text-[#888]">{celular}</p>
            <p className="text-[10px] md:text-base lg:text-[16px] xl:text-[20px] text-[#888]">Lun a Vier 9:00 a 18:45 hs</p>
            <p className="text-[10px] md:text-base lg:text-[16px] xl:text-[20px] text-[#888]">Sab 9:00 a 13:00 hs</p>
        </div>
        
        <div className="flex flex-col gap-2 mt-auto w-full lg:flex-row lg:justify-between">
            <Link href={link_whatsapp} target="_blank" className="w-full lg:w-auto whitespace-nowrap">
                <div className="flex items-center justify-center h-[30px] md:h-[50px] lg:h-[70px] bg-[#77BE78] text-white rounded-[20px] gap-2 text-[10px] md:text-[12px] lg:text-base">
                    <span>Contactanos</span>
                    <Whatsapp className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"/>
                </div>
            </Link>
            <Link href="" className="w-full lg:w-auto whitespace-nowrap">
                <div className="flex items-center justify-center h-[30px] md:h-[50px] lg:h-[70px] bg-[#00ADEE] text-white rounded-[20px] gap-2 text-[10px] md:text-[12px] lg:text-base">
                    <span>¿Cómo llego?</span>
                    <Location className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"/>
                </div>
            </Link>
        </div>
    </div>
</div> */}
