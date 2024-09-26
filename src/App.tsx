import React, { useState } from "react";

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-[#E1E6E1] text-[#0D0A0B] min-h-screen">
      {/* Header */}
      <header className="bg-[#FA003F] p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#E1E6E1]">AI & ChatGPT</h1>
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-[#E1E6E1] lg:hidden"
        >
          <span className="material-icons">menu</span>
        </button>
      </header>

      {/* Navigation Bar */}
      <nav
        className={`bg-[#E1E6E1] lg:flex lg:justify-center lg:space-x-4 p-4 transition-all duration-500 ease-in-out ${
          isNavOpen ? "block" : "hidden lg:block"
        }`}
      >
        <ul className="lg:flex lg:space-x-6 text-center">
          <li className="py-2">
            <a
              href="#overview"
              className="text-[#0D0A0B] hover:text-[#FA003F] transition-colors flex items-center justify-center lg:inline-block"
            >
              <span className="material-icons mr-2">info</span>
              Overview
            </a>
          </li>
          <li className="py-2">
            <a
              href="#nlp"
              className="text-[#0D0A0B] hover:text-[#FA003F] transition-colors flex items-center justify-center lg:inline-block"
            >
              <span className="material-icons mr-2">language</span>
              NLP
            </a>
          </li>
          <li className="py-2">
            <a
              href="#chatbots"
              className="text-[#0D0A0B] hover:text-[#FA003F] transition-colors flex items-center justify-center lg:inline-block"
            >
              <span className="material-icons mr-2">chat</span>
              Chatbots
            </a>
          </li>
          <li className="py-2">
            <a
              href="#ml"
              className="text-[#0D0A0B] hover:text-[#FA003F] transition-colors flex items-center justify-center lg:inline-block"
            >
              <span className="material-icons mr-2">trending_up</span>
              Machine Learning
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="px-6 lg:px-40 py-10">
        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FA003F]">Overview</h2>
          <p className="leading-relaxed mb-4">
            AI and ChatGPT's abilities in language modeling and automation are transforming industries. 
            From providing customer support to assisting with complex problem-solving, AI has a vast array of applications.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum dui vel sapien dapibus, nec malesuada purus tincidunt. Vivamus vehicula dui vitae elit varius malesuada.
          </p>
        </section>

        {/* NLP Section */}
        <section id="nlp" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#E77728]">Natural Language Processing (NLP)</h2>
          <p className="leading-relaxed mb-4">
            NLP enables machines to process and understand human languages, making it possible for AI to engage in meaningful conversations with people.
          </p>
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id felis nisl. Maecenas pretium, lacus non condimentum venenatis, leo enim lobortis sem, non interdum enim purus non sapien.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>

        {/* Chatbots Section */}
        <section id="chatbots" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FA003F]">Chatbots</h2>
          <p className="leading-relaxed mb-4">
            AI-powered chatbots automate responses and provide 24/7 customer service. They are widely used to improve business efficiency and user experiences.
          </p>
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tortor quis erat suscipit euismod. Morbi sit amet viverra metus.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat consequat mauris vel fringilla.
          </p>
        </section>

        {/* Machine Learning Section */}
        <section id="ml" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#E77728]">Machine Learning (ML)</h2>
          <p className="leading-relaxed mb-4">
            ML models improve decision-making and predictions through data-driven insights, helping businesses solve complex problems.
          </p>
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar placerat ipsum, at tincidunt orci condimentum ut.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat dapibus felis ut vehicula. Nam tristique, ipsum ac vehicula scelerisque, arcu est vehicula turpis, at ultricies urna ligula vel est.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-[#FA003F] p-4 text-center">
        <p className="text-[#E1E6E1] flex justify-center items-center">
          <span className="material-icons">email</span> info@aicapabilities.com
        </p>
      </footer>
    </div>
  );
};

export default App;
