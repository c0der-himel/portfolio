import covid from '../assets/images/portfolio/covid.jpg';
import laravelapi from '../assets/images/portfolio/laravel-api.jpg';
import nem from '../assets/images/portfolio/nem.png';
import opensource from '../assets/images/portfolio/open-source.png';
import pizza from '../assets/images/portfolio/pizza.jpg';
import vscode from '../assets/images/portfolio/vscode.png';

const Portfolio = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font" id="portfolio">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-4/6 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
                            Portfolio
                        </h1>
                        <div class="border-b-2 border-gray-800 border-opacity-75"></div>
                    </div>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2 border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full object-cover h-full object-center block"
                                    src={opensource}
                                />
                            </a>
                        </div>
                        <div class="md:p-2 p-1 w-1/2 border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full object-cover h-full object-center block"
                                    src={pizza}
                                />
                            </a>
                        </div>
                        <div class="md:p-2 p-1 w-full border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full h-full object-cover object-center block"
                                    src={laravelapi}
                                />
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full h-full object-cover object-center block"
                                    src={nem}
                                />
                            </a>
                        </div>
                        <div class="md:p-2 p-1 w-1/2 border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full object-cover h-full object-center block"
                                    src={vscode}
                                />
                            </a>
                        </div>
                        <div class="md:p-2 p-1 w-1/2 border border-green-500">
                            <a href="/">
                                <img
                                    alt="gallery"
                                    class="w-full object-cover h-full object-center block"
                                    src={covid}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
