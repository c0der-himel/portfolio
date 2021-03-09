import hero from '../assets/images/hero.svg';

const Hero = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font" id="home">
            <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
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
                        an aspiring <u>software engineer</u>
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        I am an aspiring software engineer who is looking for
                        opportunity to work with a great team to enhance
                        knowledge to become a great software engineer and build
                        something meaningful for future generations.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Button
                        </button>
                        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
