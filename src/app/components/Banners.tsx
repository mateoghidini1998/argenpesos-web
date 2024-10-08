import ArgenCompras from "./ArgenCompras";
import Responsabilidad from "./Responsabilidad";
import Cuponizate from "./Cuponizate";

export default function Banners(){
    return (
        <section className="w-full flex items-center flex-col gap-[76px]">
            <Responsabilidad/>
            <ArgenCompras/>
            <Cuponizate/>
        </section>
    )
}