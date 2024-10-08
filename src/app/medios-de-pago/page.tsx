import MetodosDePagoContainer from "../components/MetodosDePagoContainer";

export default function MetodosDePago() {
    return (
        <main className="w-full h-full mt-[80px] md:mt-[100px] lg:mt-[132px]" >            
            <section className="w-full h-full px-14 py-10">
                <h2 className="text-lightblue-primary text-center text-2xl md:text-heading mb-10">Medios de Pago</h2>
                <MetodosDePagoContainer/>
            </section>
        </main>
    )
}