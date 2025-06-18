import Back from "../../Back";
import muebleUno from "./mueble_1.avif";
import muebleDos from "./mueble_2.jpg";
import muebleTres from "./mueble_3.jpg";
import muebleCuatro from "./mueble_4.jpg";
import muebleCinco from "./mueble_5.jpg";
import muebleSeis from "./mueble_6.jpg";
import muebleSiete from "./mueble_7.jpg";
import muebleOcho from "./mueble_8.jpg";
import muebleNueve from "./mueble_9.jpg";
import muebleDiez from "./mueble_10.jpg";
import muebleOnce from "./mueble_11.jpg";
import muebleDoce from "./mueble_12.jpg";

import Image from "next/image";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Mueble de Cocina" path="/productos/cocina" />
            <div className="grid md:grid-cols-2 gap-3">
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full py-4 sm:px-8">1.2</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleUno} alt="Primer Mueble 1.2" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleDos} alt="Segundo Mueble 1.2" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full py-4 sm:px-8">1.4</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleTres} alt="Primer Mueble 1.4" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleCuatro} alt="Segundo Mueble 1.4" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full py-4 sm:px-8">1.6</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleCinco} alt="Primer Mueble 1.6" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleSeis} alt="Segundo Mueble 1.6" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full py-4 sm:px-8">1.8</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleSiete} alt="Primer Mueble 1.8" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleOcho} alt="Segundo Mueble 1.8" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full py-4 sm:px-8">2.0</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleNueve} alt="Primer Mueble 2.0" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleDiez} alt="Segundo Mueble 2.0" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
                <article className="flex flex-col sm:flex-row h-full sm:h-44 w-full bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl sm:text-sm font-bold text-gray-500 h-full py-4 sm:py-0 px-3">Personalizado</h3>
                    <div className="flex flex-col sm:flex-row gap-2 h-full w-full p-2">
                        <Image src={muebleOnce} alt="Primer Mueble Personalizado" className="object-cover w-full h-full rounded-lg" />
                        <Image src={muebleDoce} alt="Segundo Mueble Personalizado" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </article>
            </div>
        </main>
    );
}
