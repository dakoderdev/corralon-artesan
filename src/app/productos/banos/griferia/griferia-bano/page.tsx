import Back from "../../../Back";
import griferiaLavatorioBronceAlegria from "./griferia-lavatorio-bronce-alegria.avif";
import griferiaBidetBronceAlegria from "./griferia-bidet-bronce-alegria.avif";
import griferiaBañeraBronceAlegria from "./griferia-bañera-bronce-alegria.avif";

import griferiaLavatorioFFAlegria from "./griferia-lavatorio-ff-alegria.avif";
import griferiaBidetFFAlegria from "./griferia-bidet-ff-alegria.avif";
import griferiaBañeraFFAlegria from "./griferia-bañera-ff-alegria.avif";

import griferiaTauroExteriorMonocomando from "./griferia-tauro-exterior-monocomando.avif";
import ProductItem from "../../../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Grifería Baño" />
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Grifería Bronce</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Grifería Lavatorio Bronce Alegría" image={griferiaLavatorioBronceAlegria} clickable={false}/>
                <ProductItem name="Grifería Bidet Bronce Alegría" image={griferiaBidetBronceAlegria} clickable={false}/>
                <ProductItem name="Grifería Bañera Bronce Alegría" image={griferiaBañeraBronceAlegria} clickable={false}/>
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Griferia FF Alegría</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Grifería Lavatorio FF Alegría" image={griferiaLavatorioFFAlegria} clickable={false}/>
                <ProductItem name="Grifería Bidet FF Alegría" image={griferiaBidetFFAlegria} clickable={false}/>
                <ProductItem name="Grifería Bañera FF Alegría" image={griferiaBañeraFFAlegria} clickable={false}/>
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Griferia Tauro</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Grifería Tauro Exterior Monocomando" image={griferiaTauroExteriorMonocomando} clickable={false}/>
            </div>
        </main>
    );
}