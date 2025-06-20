import Back from "../../Back";
import ProductItem from "../../ProductItem";

import tanqueWaterplast from "./tanque-waterplast.webp";
import tanqueH2o from "./tanque-h2o.png";
import tanqueTinacos from "./tanque-tinacos.png";
import { Metadata } from "next";

const title = "Tanques";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Tanque Waterplast, H2O y Tinacos disponibles en Corralón Artesan',
}
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Tanque Waterplast" image={tanqueWaterplast} clickable={false} />
                <ProductItem name="Tanque H2O" image={tanqueH2o} clickable={false} />
                <ProductItem name="Tanque Tinacos" image={tanqueTinacos} clickable={false} />
            </div>
        </main>
    );
}