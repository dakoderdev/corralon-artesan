export default function Footer() {
  return (
    <footer
      className="relative font-grotesk bg-gray-900 text-white overflow-hidden bg-fixed"
      style={{ backgroundImage: 'url("/imagenes/menu/ceramicos.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <article className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "#167548" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Horarios</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold text-white text-balance">Lunes a Viernes:</span>
                <br />
                8:30 a 18:00
              </p>
              <p>
                <span className="font-semibold text-white text-balance">Sábado:</span>
                <br />
                8:30 a 13:00
              </p>
            </div>
          </article>

          <article className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "#167548" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Ubicación</h3>
            </div>
            <p className="text-gray-300">
              <span className="font-semibold text-white text-balance">Dirección:</span>
              <br />
              Av. Roca 139
            </p>
          </article>

          <article className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "#167548" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Teléfono</h3>
            </div>
            <p className="text-gray-300">
              <span className="font-semibold text-white text-balance">Llamanos:</span>
              <br />
              <a href="tel:4246952" className="hover:text-white transition-colors duration-300">
                4246952
              </a>
            </p>
          </article>

          <article className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "#167548" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Facebook</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white text-balance">Seguinos:</span>
              <br />
              Corralon Artesan Materiales de Construccion Tucuman
            </p>
          </article>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">¡Contactate y mándanos un e-Mail!</h3>
              <p className="text-gray-300">Estamos aquí para ayudarte con todos tus proyectos de construcción</p>
            </div>

            <button
              className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#FF6161" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Enviar Email
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Corralón Artesán. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-2 text-sm font-semibold" style={{ color: "#167548" }}>
              <span className="px-3 py-1 rounded-full text-white text-xs" style={{ backgroundColor: "#167548" }}>
                30+
              </span>
              <span className="text-gray-300">años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}