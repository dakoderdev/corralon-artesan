import Back from "../../Back";
import primerMuebleUnoDos from "./primer-mueble-uno-dos.avif";
import Image from "next/image";

export default function Page() {
    return (
        <main className="font-grotesk min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Mueble de Cocina" path="/productos/cocina" />
            <div className="flex flex-col gap-3">
                <article className="flex h-30 w-fit bg-white rounded-2xl border border-gray-200">
                    <h3 className="grid place-items-center border-r border-gray-200 text-3xl font-mono font-bold text-gray-500 h-full aspect-square">1.2</h3>
                    <div className="h-full p-2">
                        <Image src={primerMuebleUnoDos} alt="Primer Mueble Uno Dos" className="w-full h-auto rounded-lg" />
                    </div>
                </article>
            </div>
        </main>
    );
}
