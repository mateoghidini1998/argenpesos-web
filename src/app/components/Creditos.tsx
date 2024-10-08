import Arrow from "./svgs/Arrow";

export default function Creditos() {
    return (
        <section className="w-full flex flex-col items-center px-[100px] mb-[98px]">
            <h2 className="text-lightblue-primary text-center text-2xl md:h-[80px] md:text-[80px] md:mb-[30px] font-bold">Créditos en sucursales</h2>
            <h3 className="text-lightblue-primary text-center text-xl md:text-[64px] md:h-[64px] mb-[25px] md:mb-[63px]">En 3 simples pasos</h3>
            <div className="flex flex-col md:flex-row items-center box-border justify-center w-full md:w-auto md:h-[200px] border-4 py-[30px] border-[#17AAE1] rounded-[36px] mb-[35px] md:mb-[96px]">
                <div className="flex items-center justify-center md:border-r-4 border-b-[1px] border-b-[#17AAE1] md:border-b-0 border-r-[#17AAE1] text-lightblue-primary pb-[20px] md:px-[40px]  text-base md:text-[24px] md:w-1/3 h-full my-[15px] mx-[15px] md:ml-[15px]">
                    <p className="text-center flex items-center justify-center">Vení a nuestra sucursal</p>
                </div>
                <div className="flex items-center justify-center border-b-[1px] border-b-[#17AAE1] md:border-b-0 md:border-r-4 border-r-[#17AAE1] text-lightblue-primary  pb-[20px] md:px-[30px] text-base md:text-[24px] md:w-[408px] h-full m-[15px]">
                    <p className="text-center flex items-center justify-center">Presentá la documentación y te aprobamos la solicitud</p>
                </div>
                <div className="flex items-center justify-center text-lightblue-primary  px-[30px] text-base md:text-[24px] md:w-1/3 h-full m-[15px]">
                    <p className="text-center flex items-center justify-center">Recibí tu dinero en el acto</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 md:gap-[36px] bg-[#E84729] h-[80px] w-auto text-base md:text-[36px] rounded-[20px] py-[7px] pl-[20px] md:pl-[50px] pr-[12px] text-white">
                <a href="/sucursales">Encontra tu sucursal</a>
                <Arrow stroke="white" className="w-[28px] h-[28px] md:w-[64px] md:h-[64px] " />
            </div>
        </section>
    );
}

