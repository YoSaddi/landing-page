import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-300 block py-2 px-4">
                Início
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300 block py-2 px-4">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300 block py-2 px-4">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 block py-2 px-4">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;