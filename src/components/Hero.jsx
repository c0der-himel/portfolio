import hero from '../assets/images/hero/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faGithubAlt,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id="home">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={hero}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                        hey, I'm Himel
                    </h3>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        an aspiring{' '}
                        <u className="text-green-500">software engineer</u>
                    </h1>
                    <div className="links mb-3 mt-2 text-3xl text-green-500">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/shahadat-himel/"
                            className="mr-5"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="/" className="mr-5">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/c0der-himel"
                            className="mr-5"
                        >
                            <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                    </div>
                    <div className="mt-2 mb-6">
                        <a href="/" className="text-green-400">
                            himel777hussain@gmail.com
                        </a>
                    </div>
                    <p className="mb-8 text-lg leading-relaxed">
                        I am an aspiring software engineer who is looking for
                        opportunity to work with a great team to enhance
                        knowledge to become a great software engineer and build
                        something meaningful for future generations.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/shahadat-himel/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Hire Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1u-qjyFS3i_kgcIPKXcJ2FVXfn8rORcJN/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
