import covid from '../assets/images/portfolio/covid.jpg';
import nem from '../assets/images/portfolio/nem.png';
import opensource from '../assets/images/portfolio/open-source.png';
import pizza from '../assets/images/portfolio/pizza.jpg';
import vscode from '../assets/images/portfolio/vscode.png';
import laravel from '../assets/images/portfolio/laravel0.png';
import travel from '../assets/images/portfolio/travel-now.png';
import doctor from '../assets/images/portfolio/doctor.png';
import car from '../assets/images/portfolio/car-shop.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              Personal Projects
            </h1>
            <div className="border-b-2 border-gray-800 border-opacity-75"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={travel}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Full Stack Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Travel Now
                </h1>
                <p className="leading-relaxed mb-3">
                  🌍 Travel Now is a travel website. Where people can select
                  destination & book them. Manage the bookings. And all the
                  stuff.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/travel-now-client"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travel-now-v1.web.app/"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={doctor}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Front End Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Doctor 24/7
                </h1>
                <p className="leading-relaxed mb-3">
                  🧑‍⚕️ Doctor 24/7 is a doctors portal website. Where people
                  can select their doctor & get appointment.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/doctor24-7"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://doctor247-96d97.web.app/"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={car}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Full Stack Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Car Shop
                </h1>
                <p className="leading-relaxed mb-3">
                  🚗 Car Shop is a car selling website. Where people can select
                  car & purchase them. Manage the bookings. And all the stuff.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/car-shop-client"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://audi-v1.web.app/"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={covid}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Full Stack Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  COVID-19 Self Assessment System
                </h1>
                <p className="leading-relaxed mb-3">
                  😷 This COVID-19 Self Assessment System is a automated system
                  which will show you result based on your information whether
                  you are COVID-19 Positive or Negative. 🤒
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/COVID-19-Self-Assessment-System"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://c0der.epizy.com/"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={nem}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Back End Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  NodeJS REST API
                </h1>
                <p className="leading-relaxed mb-3">
                  👨‍💻 A RESTFul API With NodeJS ExpressJS & MongoDB 🚀
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/RESTFul-API-with-ExpressJS-MongoDB"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={vscode}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Extension Pack Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  VSCode Extension Pack
                </h1>
                <p className="leading-relaxed mb-3">
                  🧑‍💻 VSCode Extension Pack for Web Development 🚀
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/vscode-web-dev-extension-pack"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://marketplace.visualstudio.com/items?itemName=c0der-himel.vscode-wev-dev-extension-pack&ssr=false#overview"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={opensource}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Front End Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Fix Your First Bug
                </h1>
                <p className="leading-relaxed mb-3">
                  🤩 An Open Source Project, to 🤝 help a newbie or beginner who
                  wants to contribute in 🚀 Open Source but don't know how to
                  do. Here he or she can start contributing as a demo
                  contribution. 🤩
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/fix-your-first-bug"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://relaxed-hopper-ce959a.netlify.app/"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Live Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={laravel}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Back End Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Laravel REST API
                </h1>
                <p className="leading-relaxed mb-3">
                  🚀 Laravel REST API 🚀
                  <br />A simple example of how to create a RESTful API in
                  Laravel 8.
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    href="https://github.com/c0der-himel/laravel-rest-api"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center"
                src={pizza}
                alt="blog"
              />
              <div className="p-6">
                <h2
                  className="
                    tracking-widest
                    text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                  "
                >
                  Full Stack Project
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Pizza House
                </h1>
                <p className="leading-relaxed mb-3">
                  🍕 A Pizza Ordering Web App 🚀
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/pizza-house"
                    className="
                      text-green-400
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/c0der-himel"
            target="_blank"
            rel="noreferrer"
            className="flex mx-auto items-center text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-base mt-16"
          >
            Github
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
      </div>
    </section>
  );
};

export default Portfolio;
