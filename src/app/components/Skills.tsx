import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaMobileAlt, FaComments, FaUsers, FaLightbulb, FaSyncAlt, FaClock } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="bg-pink-280 text-gray-800 p-5 sm:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades</h2>
      <div className="mx-auto flex flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <ul className="list-disc pl-5 space-y-2 list-none">
              <li>
                <FaComments className="text-blue-500 inline mr-2" /> Comunicação efetiva
              </li>
              <li>
                <FaUsers className="text-green-500 inline mr-2" /> Trabalho em equipe
              </li>
              <li>
                <FaLightbulb className="text-yellow-500 inline mr-2" /> Resolução de problemas
              </li>
              <li>
                <FaSyncAlt className="text-purple-500 inline mr-2" /> Adaptabilidade
              </li>
              <li>
                <FaClock className="text-orange-500 inline mr-2" /> Gestão de tempo
              </li>
            </ul>
          </div>

          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
            <ul className="list-disc pl-5 space-y-2 list-none">
              <li>
                <FaHtml5 className="text-orange-500 inline mr-2" /> HTML5
              </li>
              <li>
                <FaCss3Alt className="text-blue-500 inline mr-2" /> CSS3 e frameworks como Tailwind CSS
              </li>
              <li>
                <FaJs className="text-yellow-500 inline mr-2" /> JavaScript (incluindo ES6+)
              </li>
              <li>
                <FaReact className="text-blue-400 inline mr-2" /> React.js e Next.js
              </li>
              <li>
                <FaNode className="text-green-500 inline mr-2" /> Node.js
              </li>
              <li>
                <FaDatabase className="text-purple-500 inline mr-2" /> Banco de dados (SQL e MongoDB)
              </li>
              <li>
                <FaGitAlt className="text-orange-600 inline mr-2" /> Versionamento de código com Git
              </li>
              <li>
                <FaMobileAlt className="text-blue-500 inline mr-2" /> React Native e Flutter
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;