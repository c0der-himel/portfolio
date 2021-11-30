import { HashLink } from 'react-router-hash-link';
import errorImage from '../assets/images/404/404Error.svg';

const PageNotFound = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={errorImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            404 page not found
          </h1>
          <p className="leading-relaxed mb-8">
            The page you are looking for doesn't exist
          </p>
          <div className="flex justify-center">
            <HashLink
              to="/home"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Back to Home
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
