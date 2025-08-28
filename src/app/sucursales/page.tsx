import SucursalCard from "../components/sucursales/SucursalCard";
import AVELLANEDA from "../../../public/AVELLANEDA.png";
import BERAZATEGUI from "../../../public/BERAZATEGUI.png";
import LANUS from "../../../public/LANUS.png";
import LAFERRERE from "../../../public/LAFERRERE.png";
import LINIERS from "../../../public/LINIERS.png";
import LOMAS from "../../../public/LOMAS.png";
import LOMAS2 from "../../../public/LOMAS2.jpeg";
import MERLO from "../../../public/MERLO.png";
import MORENO from "../../../public/MORENO.png";
import QUILMES from "../../../public/QUILMES.png";
import SANFERNANDO from "../../../public/SAN-FERNANDO.png";
import SANJUSTO from "../../../public/SAN-JUSTO.jpg";
import VARELA from "../../../public/VARELA.png";
import VARELA2 from "../../../public/VARELA2.jpeg";
import SOLANO from "../../../public/SOLANO.png";
import SANMIGUEL from "../../../public/SAN-MIGUEL.png";
import SANJOSE from "../../../public/SAN-JOSE.png";
import SANMARTIN from "../../../public/SAN-MARTIN.jpg";
import MONTEGRANDE from "../../../public/MONTE-GRANDE.jpeg";

const SUCURSALES = [
  {
      "sucursal": "AVELLANEDA",
      "telefono": "4201-5784 / 6561",
      "celular": "15-3252-5817",
      "direccion": "Av. Mitre 531",
      "link_whatsapp": "https://qrco.de/beahcy",
      "link_maps": "https://g.page/r/CdQEGwC8HsLsEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:30 hs",
      "horario_fin": "Sab 9:00 a 13:00 hs",
      "image": AVELLANEDA
  },
  {
      "sucursal": "BERAZATEGUI",
      "telefono": "4356-0717 / 0911",
      "celular": "15-7102-2907",
      "direccion": "Av.14 N°5022",
      "link_whatsapp": "https://qrco.de/beahhm",
      "link_maps": "https://g.page/r/CYeVYwL89a_CEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": BERAZATEGUI
  },
  {
      "sucursal": "LANUS",
      "telefono": "4240-4798/ 5448",
      "celular": "15-6222-9389",
      "direccion": "9 de Julio 1101, Esquina 29 de septiembre",
      "link_whatsapp": "https://qrco.de/beahjp",
      "link_maps": "https://g.page/r/CfoR4WURdH3OEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": LANUS
  },
  {
      "sucursal": "LOMAS DE ZAMORA",
      "telefono": "6088-8253",
      "celular": "15-3252-4297",
      "direccion": "Av. Meeks 101",
      "link_whatsapp": "https://qrco.de/beahlU",
      "link_maps": "https://g.page/r/CeT0H4UhqkATEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": LOMAS
  },
  {
      "sucursal": "SOLANO",
      "telefono": "6066-7628",
      "celular": "11 2664-9025",
      "direccion": "Calle 844 Nº2364",
      "link_whatsapp": "https://qrco.de/beahnt",
      "link_maps": "https://g.page/r/Ccg1UGicofVQEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": SOLANO
  },
  {
      "sucursal": "FLORENCIO VARELA",
      "telefono": "4287-8544 y 4287-3269",
      "celular": "15-2184-7307",
      "direccion": "Monteagudo 3053 ex 345",
      "link_whatsapp": "https://qrco.de/beahq8",
      "link_maps": "https://g.page/r/CW33tYUu64fCEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": VARELA
  },
  {
      "sucursal": "FLORENCIO VARELA 2",
      "telefono": "4287-8544 y 4287-3269",
      "celular": "15-2184-5585",
      "direccion": "Monteagudo 3282",
      "link_whatsapp": "https://qrco.de/bg08gQ",
      "link_maps": "https://maps.app.goo.gl/FiTxmVem8eRKEmKW6",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": VARELA2
  },
  {
      "sucursal": "SAN JOSE",
      "telefono": "2102-8117",
      "celular": "15-2165-4919",
      "direccion": "Salta 87",
      "link_whatsapp": "https://qrco.de/beahrP",
      "link_maps": "https://g.page/r/CfrNw3piBj_QEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 13:00 hs / 15:00 a 18:45 hs",
      "horario_fin": "",
      "image": SANJOSE
  },
  {
      "sucursal": "QUILMES",
      "telefono": "4253-1001",
      "celular": "15-6551-0711",
      "direccion": "Av. Rivadavia 96",
      "link_whatsapp": "https://qrco.de/beahsn",
      "link_maps": "https://g.page/r/CSgw-kK8mT4bEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": QUILMES
  },
  {
      "sucursal": "SAN FERNANDO",
      "telefono": "4506-3732",
      "celular": "15-3252-4072",
      "direccion": "Constitución 198",
      "link_whatsapp": "https://qrco.de/beahwA",
      "link_maps": "https://g.page/r/Cecc4TsNN-GHEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 13:00 hs",
      "image": SANFERNANDO
  },
  {
      "sucursal": "SAN MIGUEL",
      "telefono": "4664-4449",
      "celular": "15-3252-3061",
      "direccion": "Presidente Perón 1185",
      "link_whatsapp": "https://qrco.de/beahxK",
      "link_maps": "https://g.page/r/CWY-v9zbaLqUEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": SANMIGUEL
  },
  {
      "sucursal": "SAN JUSTO",
      "telefono": "4651-0046 / 4482-4968",
      "celular": "15-6551-0706",
      "direccion": "Arieta 3320",
      "link_whatsapp": "https://qrco.de/beahyr",
      "link_maps": "https://g.page/r/CfMY3AXp4Q0LEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": SANJUSTO
  },
  {
      "sucursal": "LINIERS",
      "telefono": "6062-0475",
      "celular": "15-2668-9818",
      "direccion": "Av. Rivadavia 11640",
      "link_whatsapp": "https://qrco.de/beai0C",
      "link_maps": "https://g.page/r/CZh1K-2-eRbsEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 13:00 hs",
      "image": LINIERS
  },
  {
      "sucursal": "LAFERRERE",
      "telefono": "4467-2895",
      "celular": "15-7144-8047",
      "direccion": "Av. Luro 6096",
      "link_whatsapp": "https://qrco.de/beai1I",
      "link_maps": "https://g.page/r/CfAeId4VmNHfEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": LAFERRERE
  },
  {
      "sucursal": "MORENO",
      "telefono": "0237-4602291",
      "celular": "15-7144-8042",
      "direccion": "Av. Libertador 165",
      "link_whatsapp": "https://qrco.de/beai2y",
      "link_maps": "",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": MORENO
  },
  {
      "sucursal": "SAN MARTIN",
      "telefono": null,
      "celular": "15-2169-7799",
      "direccion": "Belgrano 3371",
      "link_whatsapp": "https://qrco.de/bfeEbk",
      "link_maps": "https://g.page/r/CXpJHVINz3cyEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 13:00 hs",
      "image": SANMARTIN
  },
  {
      "sucursal": "MERLO",
      "telefono": "20886755",
      "celular": "15-2184-6156",
      "direccion": "Av. Libertador 674",
      "link_whatsapp": "https://qrco.de/bfVX1J",
      "link_maps": "https://g.page/r/CVgkGsx55E5eEAE/review",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": MERLO
  },
  {
      "sucursal": "LOMAS DE ZAMORA 2",
      "telefono": "4267-3775",
      "celular": "15-2682-6226",
      "direccion": "Carlos Pellegrini 62",
      "link_whatsapp": "https://qrco.de/bfqA5J",
      "link_maps": "",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": LOMAS2
  },
  {
      "sucursal": "MONTE GRANDE",
      "telefono": null,
      "celular": "15-2184-5732",
      "direccion": "Alem 181",
      "link_whatsapp": "https://qrco.de/bfeEbk",
      "link_maps": "https://maps.app.goo.gl/s1VvnFB37dRZnuiP9",
      "horario_sem": "Lun a Vier 9:00 a 18:45 hs",
      "horario_fin": "Sab 9:00 a 16:00 hs",
      "image": MONTEGRANDE
  },
]


export default function Sucursales() {
  return (
    <main className="w-full h-full mt-[80px] md:mt-[100px] lg:mt-[152px]" >
      <section className=" p-8">
        <h2 className="text-lightblue-primary text-center text-2xl md:text-heading mb-10">Sucursales</h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SUCURSALES.sort((a, b) => a.sucursal.localeCompare(b.sucursal)).map((sucursal, index) => (
              <SucursalCard
                  key={index}
                  sucursal={sucursal.sucursal}
                  telefono={sucursal.telefono}
                  celular={sucursal.celular}
                  direccion={sucursal.direccion}
                  link_whatsapp={sucursal.link_whatsapp}
                  link_maps={sucursal.link_maps}
                  image={sucursal.image}
                  horario_sem={sucursal.horario_sem}
                  horario_fin={sucursal.horario_fin}
              />
          ))}
        </div>
      </section>
    </main>
  );
}
