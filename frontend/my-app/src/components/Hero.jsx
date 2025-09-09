export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build Your <span className="text-blue-500">Dream Website</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Fast, responsive, and beautiful websites built with modern
            technologies like React and Tailwind CSS.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Illustration"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
