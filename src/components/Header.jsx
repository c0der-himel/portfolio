const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-50">
        <a
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Himel</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-green-500 cursor-pointer">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-green-500 cursor-pointer">
            About Me
          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-green-500 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="mr-5 hover:text-green-500 cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#portfolio"
            className="mr-5 hover:text-green-500 cursor-pointer"
          >
            Personal Projects
          </a>
          <a
            href="#contact"
            className="mr-5 hover:text-green-500 cursor-pointer"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/shahadat-himel/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
