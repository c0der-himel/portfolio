import hero from '../assets/images/hero/hero.svg';

const Hero = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font" id="home">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={hero}
                    />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h3 class="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                        hey, I'm Himel
                    </h3>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        an aspiring{' '}
                        <u class="text-green-500">software engineer</u>
                    </h1>
                    <div class="links mb-3 text-3xl text-green-500">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/shahadat-himel/"
                            class="mr-5"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="/" class="mr-5">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/c0der-himel"
                            class="mr-5"
                        >
                            <i class="fab fa-github-alt"></i>
                        </a>
                    </div>
                    <div class="mt-2 mb-3">
                        <a href="/" class="text-green-400">
                            himel777hussain@gmail.com
                        </a>
                    </div>
                    <p class="mb-8 leading-relaxed">
                        I am an aspiring software engineer who is looking for
                        opportunity to work with a great team to enhance
                        knowledge to become a great software engineer and build
                        something meaningful for future generations.
                    </p>
                    <div class="flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/shahadat-himel/"
                            target="_blank"
                            rel="noreferrer"
                            class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Hire Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1u-qjyFS3i_kgcIPKXcJ2FVXfn8rORcJN/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
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
