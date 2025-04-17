const Hero = () => {
    return (
      <section id="hero" className="bg-purple-900 text-white h-screen flex items-center justify-center px-4 sm:px-0">
        <div className="text-center px-5">
          <img
            src="https://gadgetforentertainment.com/cdn/shop/collections/tecna.png?v=1738755564" // A imagem deve estar na pasta public
            alt="Minha foto"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Olá, Yo Saddi</h1>
          <p className="text-lg sm:text-xl mb-6">
            Desenvolvedora Web e Mobile apaixonado por criar interfaces incríveis e experiências digitais impactantes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="bg-pink-500 text-w   hite px-6 py-3 rounded-full text-lg hover:bg-pink-300 transition"
            >
              Veja meus projetos
            </a>
            <a
              href="/curriculo.pdf"
              download
              className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;