import Back from "../../Back";
import curupay from "./curupay.jpeg";
import cielo from "./cielo.jpeg";
import malargue from "./malargue.jpeg";
import parquet from "./parquet.jpeg";
import alicura from "./alicura.jpeg";
import azabache from "./azabache.jpg";
import tibet from "./tibet.jpg";
import toscana from "./toscana.jpg";
import tongoy from "./tongoy.jpg";
import laja from "./laja.jpg";
import chillan from "./chillan.jpg";
import morisco from "./morisco.jpg";

import Image from "next/image";
import { Metadata } from "next";
const title = "Céramicos";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Céramicos Curupay, Cielo, Malargue, y otros mas disponibles en Corralón Artesan',
}

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <section className="flex flex-col-reverse md:flex-row gap-8">
                <div className="flex flex-col gap-3 w-full">
                    <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Material</h3>
                    <div className="grid pb-4 gap-x-3 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                        {[
                            { src: curupay, title: "Curupay" },
                            { src: cielo, title: "Cielo" },
                            { src: malargue, title: "Malargue" },
                            { src: parquet, title: "Parquet" },
                            { src: alicura, title: "Alicura" },
                            { src: azabache, title: "Azabache" },
                            { src: tibet, title: "Tibet" },
                            { src: toscana, title: "Toscana" },
                            { src: tongoy, title: "Tongoy" },
                            { src: laja, title: "Laja" },
                            { src: chillan, title: "Chillan" },
                            { src: morisco, title: "Morisco" },
                        ].map(({ src, title }) => (
                            <article key={title} className="flex flex-col gap-1.5 w-full">
                                <Image src={src} alt={title} className="w-full object-cover aspect-square rounded-xl" />
                                <h5 className="text-xl w-fit text-gray-700">{title}</h5>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="w-full h-fit md:w-120 md:pb-18.5 block md:sticky top-3">
                    <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Medidas</h3>
                    <ul className="grid grid-cols-2 gap-1.5 font-mono">
                        <li className="p-2 bg-white   rounded-lg flex justify-center items-center">36x36</li>
                        <li className="p-2 bg-white   rounded-lg flex justify-center items-center">46x46</li>
                        <li className="p-2 bg-white border col-span-2 font-grotesk border-gray-200 rounded-lg flex justify-center items-center">Consultar para mas modelos</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}