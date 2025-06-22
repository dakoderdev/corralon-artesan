export default function NotFound() {
  return (
    <section className="font-grotesk min-h-svh flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4 py-24">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-7xl md:text-6xl font-bold font-mono text-cs-red mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-balance">Página no encontrada :&#x28;</h2>
        <p className="text-lg text-gray-700 mb-8">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cs-red rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
