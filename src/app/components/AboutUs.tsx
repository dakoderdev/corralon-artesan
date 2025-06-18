export default function AboutUs() {
  const qualities = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      ),
      title: "Rápida atención profesional",
      description: "Servicio eficiente y especializado",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      title: "Amplia variedad de productos",
      description: "Todo lo que necesitas en un solo lugar",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      ),
      title: "Horario corrido",
      description: "Disponibles cuando nos necesites",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ),
      title: "Stock permanente",
      description: "Productos siempre disponibles",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
      title: "Honestidad y seriedad",
      description: "Compromiso con la calidad y confianza",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono  ">SOBRE NOSOTROS</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Somos una empresa dedicada a la comercialización de materiales de construcción con una trayectoria de más de
            30 años en el rubro. Nuestras cualidades son:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:-translate-y-0.5"
              style={{ "--color-cs-green": "#167548", "--color-cs-red": "#FF6161" } as React.CSSProperties}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                  <div
                    className="text-green-700 group-hover:text-green-800 transition-colors duration-300"
                    style={{ color: "#167548" }}
                  >
                    {quality.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-900 transition-colors duration-300">
                    {quality.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{quality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className="inline-flex bg-cs-green items-center px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg font-bold mr-2">
              30+
            </span>
            <span>años de experiencia en el rubro</span>
          </div>
        </div>
      </div>
    </section>
  )
}