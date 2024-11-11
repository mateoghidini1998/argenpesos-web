import Actions from "./components/Actions";
import AppPublicidad from "./components/AppPublicidad";
import Banners from "./components/Banners";
import ContactSection from "./components/Contacto";
import MainBanner from "./components/MainBanner";
import Responsabilidad from "./components/Responsabilidad";

export default function Home() {
  return (
    <main className="w-full h-full mt-[80px] md:mt-[100px] lg:mt-[152px]" >
      <MainBanner/>
      <Actions/>
      <AppPublicidad/>
      <Banners/>
      <ContactSection/>
    </main>
  );
}
