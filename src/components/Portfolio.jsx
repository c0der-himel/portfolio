import covid from '../assets/images/portfolio/covid.jpg';
import nem from '../assets/images/portfolio/nem.png';
import opensource from '../assets/images/portfolio/open-source.png';
import pizza from '../assets/images/portfolio/pizza.jpg';
import vscode from '../assets/images/portfolio/vscode.png';
import laravel from '../assets/images/portfolio/laravel0.png';

const Portfolio = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id="portfolio">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-4/6 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
                            Portfolio
                        </h1>
                        <div className="border-b-2 border-gray-800 border-opacity-75"></div>
                    </div>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2 border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/fix-your-first-bug"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src={opensource}
                                />
                            </a>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/pizza-house"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src={pizza}
                                />
                            </a>
                        </div>
                        <div className="md:p-2 p-1 w-full border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/laravel-rest-api"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src={laravel}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/RESTFul-API-with-ExpressJS-MongoDB"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src={nem}
                                />
                            </a>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/vscode-web-dev-extension-pack"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src={vscode}
                                />
                            </a>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 border border-green-500">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/c0der-himel/COVID-19-Self-Assessment-System"
                            >
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
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
