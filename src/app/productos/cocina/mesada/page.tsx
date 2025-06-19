import Back from "../../Back";
import grisMara from "./gris-mara.avif";
import grisPerla from "./gris-perla.avif";
import orcollano from "./orcollano.avif";
import negroBoreal from "./negro-boreal.avif";
import negroBrasil from "./negro-brasil.avif";
import beigePuma from "./beige-puma.avif";
import rosaSalto from "./rosa-salto.avif";
import travertino from "./travertino.avif";
import sanFelipe from "./san-felipe.avif";
import sierraChica from "./sierra-chica.avif";

import granitoReconstituido from "./granito-reconstituido.avif";
import granitoNegro from "./granito-negro.avif";
import granitoRojo from "./granito-rojo.avif";
import granitoAmarillo from "./granito-amarillo.avif";

import Image from "next/image";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Mesada" path="/productos/cocina" />
            <section className="flex flex-col-reverse md:flex-row gap-8">
                <div className="flex flex-col gap-3 w-full">
                    <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Material</h3>
                    <h4 className="text-2xl w-fit font-bold text-gray-700">Mármol / Granito natural</h4>
                    <div className="grid pb-4 gap-x-3 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                        {[
                            { src: grisMara, title: "Gris Mara" },
                            { src: grisPerla, title: "Gris Perla" },
                            { src: orcollano, title: "Orcollano" },
                            { src: negroBoreal, title: "Negro Boreal" },
                            { src: negroBrasil, title: "Negro Brasil" },
                            { src: beigePuma, title: "Beige Puma" },
                            { src: rosaSalto, title: "Rosa Salto" },
                            { src: travertino, title: "Travertino" },
                            { src: sanFelipe, title: "San Felipe" },
                            { src: sierraChica, title: "Sierra Chica" },
                        ].map(({ src, title }) => (
                            <article key={title} className="flex flex-col gap-1.5 w-full">
                                <Image src={src} alt={title} className="w-full aspect-square rounded-xl" />
                                <h5 className="text-xl w-fit text-gray-700">{title}</h5>
                            </article>
                        ))}
                    </div>
                    <h4 className="text-2xl w-fit font-bold text-gray-700">Granito</h4>
                    <div className="grid pb-4 gap-x-3 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                        {[
                            { src: granitoReconstituido, title: "Reconstituido" },
                            { src: granitoNegro, title: "Negro" },
                            { src: granitoRojo, title: "Rojo" },
                            { src: granitoAmarillo, title: "Amarillo" },
                        ].map(({ src, title }) => (
                            <article key={title} className="flex flex-col gap-1.5 w-full">
                                <Image src={src} alt={"Granito " + title} className="w-full aspect-square rounded-xl" />
                                <h5 className="text-xl w-fit text-gray-700">{title}</h5>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-120 h-fit md:pb-18.5 block md:sticky top-3">
                    <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Medidas</h3>
                    <ul className="grid grid-cols-2 gap-1.5 font-mono">
                        <li className="p-2 bg-white border border-gray-200 rounded-lg flex justify-center items-center">1,2</li>
                        <li className="p-2 bg-white border border-gray-200 rounded-lg flex justify-center items-center">1,4</li>
                        <li className="p-2 bg-white border border-gray-200 rounded-lg flex justify-center items-center">1,6</li>
                        <li className="p-2 bg-white border border-gray-200 rounded-lg flex justify-center items-center">1,8</li>
                        <li className="p-2 bg-white border border-gray-200 rounded-lg flex justify-center items-center">2</li>
                        <li className="p-2 bg-white border border-gray-200 font-grotesk rounded-lg flex justify-center items-center">Personalizado</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}