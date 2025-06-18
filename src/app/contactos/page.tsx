export default function Page() {
    return (
        <section className="h-fit pt-19 pb-8 px-8 bg-fixed bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url("/imagenes/menu/ceramicos.jpg")'}}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8746889951262!2d-65.2021852!3d-26.843937699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225bf81b5d4c5d%3A0x61e777dcc26ba25d!2sAv.%20Gral.%20Roca%20139%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1750134399631!5m2!1ses-419!2sar"
        width="600"
        height="350"
        className="rounded-lg max-w-full bg-white"
        style={{ border: 0 }}
        loading="lazy"
        ></iframe>
        </section>
    );
}