import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
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
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2021 Himel
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shahadat-himel/"
            className="mr-5 text-2xl text-green-500"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/c0der-himel"
            className="mr-5 text-2xl text-green-500"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
