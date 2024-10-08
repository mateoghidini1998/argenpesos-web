import SucursalCard from "../components/sucursales/SucursalCard";

const SUCURSALES = [
  {
      "sucursal": "AVELLANEDA",
      "telefono": "4201-5784 / 6561",
      "celular": "15-3252-5817",
      "direccion": "Av. Mitre 531",
      "link_whatsapp": "https://qrco.de/beahcy",
      "link_maps": "https://maps.app.goo.gl/dyjeuAQBq9rFYHVaA"
  },
  {
      "sucursal": "BERAZATEGUI",
      "telefono": "4356-0717 / 0911",
      "celular": "15-3252-4896",
      "direccion": "Av.14 N°5022",
      "link_whatsapp": "https://qrco.de/beahhm",
      "link_maps": "https://maps.app.goo.gl/EgjxkRgRTsHp11X79"
  },
  {
      "sucursal": "LANUS",
      "telefono": "4240-4798/ 5448",
      "celular": "15-3252-4303",
      "direccion": "9 de Julio 1101, Esquina 29 de septiembre",
      "link_whatsapp": "https://qrco.de/beahjp",
      "link_maps": "https://maps.app.goo.gl/jAkfFnGD7CNv7Uvg6"
  },
  {
      "sucursal": "LOMAS DE ZAMORA",
      "telefono": "4244-1120 / 4243-1456 /6088-8253",
      "celular": "15-3252-4297",
      "direccion": "Av. Meeks 101",
      "link_whatsapp": "https://qrco.de/beahlU",
      "link_maps": "https://maps.app.goo.gl/k7LYYxtXYZPbGC5V9"
  },
  {
      "sucursal": "SOLANO",
      "telefono": null,
      "celular": "11 2664-9025",
      "direccion": "Calle 844 Nº2364",
      "link_whatsapp": "https://qrco.de/beahnt",
      "link_maps": "https://maps.app.goo.gl/YSX3GBodgJ1XRNbb9"
  },
  {
      "sucursal": "FLORENCIO VARELA",
      "telefono": "4287-8544 y 4287-3269",
      "celular": "15-3252-4920",
      "direccion": "Monteagudo 3053 ex 345",
      "link_whatsapp": "https://qrco.de/beahq8",
      "link_maps": "https://maps.app.goo.gl/FiTxmVem8eRKEmKW6"
  },
  {
      "sucursal": "SAN JOSE",
      "telefono": "2102-8117",
      "celular": "15-2165-4919",
      "direccion": "Salta 87",
      "link_whatsapp": "https://qrco.de/beahrP",
      "link_maps": "https://maps.app.goo.gl/SRtqbhgj4ZnT5A3F8"
  },
  {
      "sucursal": "QUILMES",
      "telefono": "4253-1001",
      "celular": "15-6551-0711",
      "direccion": "Av. Rivadavia 96",
      "link_whatsapp": "https://qrco.de/beahsn",
      "link_maps": "https://maps.app.goo.gl/Qf9QD96hyDhz6Mfc8"
  },
  {
      "sucursal": "SAN FERNANDO",
      "telefono": "4506-3730",
      "celular": "15-3252-4072",
      "direccion": "Constitución 198",
      "link_whatsapp": "https://qrco.de/beahwA",
      "link_maps": "https://maps.app.goo.gl/4Q1nkTLjyTeqUMdb9"
  },
  {
      "sucursal": "SAN MIGUEL",
      "telefono": "4664-4449",
      "celular": "15-3252-3061",
      "direccion": "Presidente Perón 1185",
      "link_whatsapp": "https://qrco.de/beahxK",
      "link_maps": "https://maps.app.goo.gl/wLmBh5KQbJQvmCmo6"
  },
  {
      "sucursal": "SAN JUSTO",
      "telefono": "4651-0046 / 4482-4968",
      "celular": "15-3252-2397",
      "direccion": "Arieta 3320",
      "link_whatsapp": "https://qrco.de/beahyr",
      "link_maps": "https://maps.app.goo.gl/vLaqkb2jedXs1sr89"
  },
  {
      "sucursal": "LINIERS",
      "telefono": "6062-0475",
      "celular": "15-2660-0019",
      "direccion": "Av. Rivadavia 11640",
      "link_whatsapp": "https://qrco.de/beai0C",
      "link_maps": "https://maps.app.goo.gl/r5qc65pnWdqLuDH3A"
  },
  {
      "sucursal": "LAFERRERE",
      "telefono": "4467-2895",
      "celular": "15-7144-8047",
      "direccion": "Av. Luro 6096",
      "link_whatsapp": "https://qrco.de/beai1I",
      "link_maps": "https://maps.app.goo.gl/u6CcuiaeAeH9H7uM9"
  },
  {
      "sucursal": "MORENO",
      "telefono": "0237-4602291",
      "celular": "15-7144-8042",
      "direccion": "Av. Libertador 165",
      "link_whatsapp": "https://qrco.de/beai2y",
      "link_maps": ""
  }
]


export default function Sucursales() {
  return (
    <main className="w-full h-full mt-[80px] md:mt-[100px] lg:mt-[132px]" >
      <section className=" p-8">
        <h2 className="text-lightblue-primary text-center text-2xl md:text-heading mb-10">Sucursales</h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SUCURSALES.map((sucursal, index) => (
              <SucursalCard
                  key={index}
                  sucursal={sucursal.sucursal}
                  telefono={sucursal.telefono}
                  celular={sucursal.celular}
                  direccion={sucursal.direccion}
                  link_whatsapp={sucursal.link_whatsapp}
                  link_maps={sucursal.link_maps}
              />
          ))}
        </div>
      </section>
    </main>
  );
}