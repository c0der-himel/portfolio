import { HashLink } from 'react-router-hash-link';
import blogImage from '../assets/images/blog/blog.svg';

const Blog = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={blogImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Blog is coming soon
          </h1>
          <p className="leading-relaxed mb-8">
            Blog page is under construction
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

export default Blog;
