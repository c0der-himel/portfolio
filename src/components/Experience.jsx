const Experience = () => {
  return (
    <section
      id="experience"
      className="text-gray-400 bg-gray-900 body-font overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              Experience
            </h1>
            <div className="border-b-2 border-gray-800 border-opacity-75"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span
              className="
                inline-block
                py-1
                px-2
                rounded
                bg-gray-800
                text-gray-400 text-opacity-75 text-xs
                font-medium
                tracking-widest
              "
            >
              Software Engineer Intern
            </span>
            <h2
              className="
                sm:text-3xl
                text-2xl
                title-font
                font-medium
                text-white
                mt-4
                mb-4
              "
            >
              DHEO LLC
            </h2>
            <p className="leading-relaxed mb-8">
              DHEO LLC was a delivery service startup.
              <span className="block mt-5">
                * Responsible for creating API to get client & courier data.
                <br />* Making changes in the front-end.
              </span>
            </p>
            <div
              className="
                flex
                items-center
                flex-wrap
                pb-4
                mb-4
                border-b-2 border-gray-800 border-opacity-75
                mt-auto
                w-full
              "
            >
              <span
                className="
                  text-gray-500
                  mr-3
                  inline-flex
                  items-center
                  ml-auto
                  leading-none
                  text-sm
                  pr-3
                  py-1
                  border-r-2 border-gray-800
                "
              >
                1 April 2021
              </span>
              <span
                className="
                  text-gray-500
                  inline-flex
                  items-center
                  leading-none
                  text-sm
                "
              >
                30 June 2021
              </span>
            </div>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span
              className="
                inline-block
                py-1
                px-2
                rounded
                bg-gray-800
                text-gray-400 text-opacity-75 text-xs
                font-medium
                tracking-widest
              "
            >
              Full Stack Web Developer
            </span>
            <h2
              className="
                sm:text-3xl
                text-2xl
                title-font
                font-medium
                text-white
                mt-4
                mb-4
              "
            >
              Slice of Dreams
            </h2>
            <p className="leading-relaxed mb-8">
              Slice of Dreams, is an online Cake Shop. It is a startup.
              <br />
              <span className="mt-5 block">
                * Responsible for building the website both front-end &
                back-end.
              </span>
            </p>
            <div
              className="
                flex
                items-center
                flex-wrap
                pb-4
                mb-4
                border-b-2 border-gray-800 border-opacity-75
                mt-auto
                w-full
              "
            >
              <a
                href="https://sliceofdreams.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 inline-flex items-center"
              >
                Site Link
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
              <span
                className="
                  text-gray-500
                  mr-3
                  inline-flex
                  items-center
                  ml-auto
                  leading-none
                  text-sm
                  pr-3
                  py-1
                  border-r-2 border-gray-800
                "
              >
                31 May 2021
              </span>
              <span
                className="
                  text-gray-500
                  inline-flex
                  items-center
                  leading-none
                  text-sm
                "
              >
                Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
