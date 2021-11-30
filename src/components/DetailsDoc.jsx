import img1 from '../assets/images/details/doctor/img1.jpeg';
import img2 from '../assets/images/details/doctor/img2.jpeg';
import img3 from '../assets/images/details/doctor/img3.jpeg';
import img4 from '../assets/images/details/doctor/img4.jpeg';

const product = {
  name: 'Doctor 24/7',
  href: '#',
  images: [
    {
      src: img1,
      alt: 'image',
    },
    {
      src: img2,
      alt: 'image',
    },
    {
      src: img3,
      alt: 'image',
    },
    {
      src: img4,
      alt: 'image',
    },
  ],

  description:
    '🧑‍⚕️ Doctor 24/7 is a doctors portal website. Where people can select their doctor & get appointment.',
  highlights: [
    'Firebase authentication',
    'User can explore services',
    'User can appoint a doctor',
    'Responsive Website',
    'Error Messages',
  ],
};

const DetailsDoc = () => {
  return (
    <div className="bg-gray-900">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 sm:text-3xl">
              {product.name}
            </h1>
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-300">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-medium text-gray-300">Highlights</h3>

              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-300">
                      <span className="text-gray-500">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-xl font-medium text-gray-300">Links</h2>
              <div className="mt-4 space-y-4 flex flex-col">
                <a
                  className="font-bold text-md text-green-500 underline"
                  href="https://doctor247-96d97.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
                <a
                  className="font-bold text-md text-green-500 underline"
                  href="https://github.com/c0der-himel/doctor24-7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Front-End
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDoc;
