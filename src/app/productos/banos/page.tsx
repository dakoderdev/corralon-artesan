import inodoro from "./inodoro.avif";
import bidet from "./bidet.avif";
import griferia from "./griferia.avif";
import lavatorio from "./lavatorio.avif";
import deposito from "./deposito.avif";

import Back from "../Back";
import ProductItem from "../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Baños" path="/productos" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Inodoro" image={inodoro} path="banos/inodoro" />
                <ProductItem name="Bidet" image={bidet} path="banos/bidet" />
                <ProductItem name="Grifería" image={griferia} path="banos/griferia" />
                <ProductItem name="Lavatorio" image={lavatorio} path="banos/lavatorio" />
                <ProductItem name="Deposito" image={deposito} path="banos/deposito" />
            </div>
        </main>
    );
}