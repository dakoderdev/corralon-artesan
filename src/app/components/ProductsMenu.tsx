import Image from "next/image";
import Link from "next/link";

export default function ProductsMenu() {
    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 sm:h-auto lg:h-screen gap-y-3 gap-x-6 p-6 sm:p-8 md:px-18 md:py-20 bg-zinc-200/70">
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/griferias.jpg"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Griferias"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Griferias</h3>
            </Link>
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-3">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/ceramicos.jpg"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Cerámicos"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Cerámicos</h3>
            </Link>
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-5">
                <div className="bg-white relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/tanques.webp"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-contain w-full h-72 lg:h-full"
                    alt="Tanques"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Tanques</h3>
            </Link>
            <Link href={"/productos/cocina/mueble-de-cocina"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-7">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/muebles-de-cocina.jpg"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Muebles de Cocina"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Muebles de Cocina</h3>
            </Link>
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/mat-de-construccion.webp"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Materiales de Construcción"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Materiales de Construcción</h3>
            </Link>
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-start-3">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/membranas.webp"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Membranas"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Membranas</h3>
            </Link>
            <Link href={"/"} className="flex flex-col gap-2 cursor-pointer overflow-hidden rounded-t-xl group col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-4">
                <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
                    <Image
                    width={500}
                    height={500}
                    src="/imagenes/menu/caños-y-accesorios.webp"
                    className="absolute inset-0 group-hover:scale-120 transition-transform duration-350 object-cover w-full h-72 lg:h-full"
                    alt="Caños y Accesorios"
                    />
                </div>
                <h3 className="h-fit leading-5 text-black">Caños y Accesorios</h3>
            </Link>
            <Link href={"/productos"} className="bg-cs-red justify-center group items-center flex cursor-pointer h-32 md:h-72 lg:h-auto rounded-xl col-span-1 md:col-span-1 lg:col-start-6 mb-7 font-bold"><h3 className="group-hover:scale-110 transition-transform duration-300">Ver Mas</h3></Link>
        </section>
    );
}