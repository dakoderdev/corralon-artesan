import Back from "../../Back";
import ProductItem from "../../ProductItem";

import membranasTechflex from "./membranas-techflex.avif"
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Membranas" path="/productos/construccion" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Membranas Techflex 3mm y 4mm" image={membranasTechflex} clickable={false} />
            </div>
        </main>
    );
}