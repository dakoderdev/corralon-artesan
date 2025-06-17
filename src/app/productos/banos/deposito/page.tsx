import Back from "../../Back";
import AndinaACodo from "./andina-a-codo.avif";
import AndinaDeApoyo from "./andina-de-apoyo.avif";
import PringlesACodo from "./pringles-a-codo.avif";
import ProductItem from "../../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Deposito" path="/productos/banos" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Andina a codo"  image={AndinaACodo} clickable={false} />
                <ProductItem name="Andina de apoyo" image={AndinaDeApoyo} clickable={false} />
                <ProductItem name="Pringles a codo" image={PringlesACodo} clickable={false} />
            </div>
        </main>
    );
}