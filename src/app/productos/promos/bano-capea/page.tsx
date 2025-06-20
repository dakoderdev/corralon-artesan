import Back from "../../Back";
import Image from "next/image";
import foto1 from "./foto_1.png";
import { Metadata } from "next";

const title = "Promo Baño Capea";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Descubre la Promo Baño Capea en Corralón Artesan. Incluye inodoro, bidet, lavatorio, grifería y accesorios completos.',
}
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Promo" />
            <h3 className="text-5xl text-center pb-2 font-mono font-bold text-gray-900">PROMO BAÑO CAPEA</h3>
            <p className="text-center pb-10 text-gray-600">Esta promo contiene:</p>
            <ul className="list-disc w-full max-w-162 text-lg/loose list-inside text-balance m-auto pb-12">
                <li>Inodoro, Bidet, Lavatorio y pie. (CAPEA ITALIANA)</li>
                <li>Mochila Pringles de Loza COMPLETA con todos sus accesorios internos</li>
                <li>Juego de Griferia COMPLETO La Oval FF (Lavatorio, Bidet y Ducha)</li>
                <li>Juego de Accesorios Ferrum Traful / Pringles / Daccord 5 Piezas (Toallero en D, Toallero simple, Jabonera, Porta Cepillo, Porta Rollo Papel Higienico)</li>
                <li>Tapa de Inodoro Plastica</li>
            </ul>
            <div style={{ backgroundImage: "url(/imagenes/paper-texture-rotated.png)" }} className="w-full bg-center bg-cover grid md:grid-cols-2 lg:grid-cols-4 gap-3 rounded-3xl p-12">
                <Image src={foto1} alt="Baño Capea Promo" className="aspect-square w-full object-cover rounded-xl" priority={true} />
            </div>
        </main>
    );
}