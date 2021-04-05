import profile from '../assets/images/about/profile.png';

const AboutMe = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="about">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              About ME
            </h1>
            <div className="border-b-2 border-gray-800 border-opacity-75"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:w-5/6 mx-auto">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
              <img
                className="object-cover object-center rounded-full"
                alt="hero"
                src={profile}
              />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-white text-lg">
                MD. Shahadat Hussain Himel
              </h2>
              <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
              <p className="text-base text-gray-400">
                an aspiring software engineer
              </p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
              I am an aspiring software engineer, i am from Dhaka, Bangladesh. I
              am looking for opportunity to work with a great team to enhance
              knowledge to become a great software engineer and build something
              meaningful for future generations. I love to code & build new
              things which will benefit others. I love to spend time with my
              family and friends. My favorite place to visit is Saint Martin. I
              love to help other and explain things which I am passionate about.
            </p>
            <a
              href="https://www.linkedin.com/in/shahadat-himel/"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
