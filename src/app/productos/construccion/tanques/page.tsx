import Back from "../../Back";
import ProductItem from "../../ProductItem";

import tanqueTricapaTitan from "./tanque-tricapa-titan.avif";
import tanqueH2o from "./tanque-h2o.avif";
import tanqueTinacos from "./tanque-tinacos.avif";
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Tanques" path="/productos/construccion" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Tanque Tricapa Titan" image={tanqueTricapaTitan} clickable={false} />
                <ProductItem name="Tanque H2O" image={tanqueH2o} clickable={false} />
                <ProductItem name="Tanque Tinacos" image={tanqueTinacos} clickable={false} />
            </div>
        </main>
    );
}