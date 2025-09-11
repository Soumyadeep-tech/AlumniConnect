import juLogo from "./ju.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-100 pt-28 pb-16 md:pt-32 md:pb-20 flex justify-center"
    >
      <div className="container mx-auto px-6 flex justify-center">
        {/* Glow Wrapper */}
        <div className="relative w-full max-w-3xl">
          {/* Multicolor Gradient Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-700 via-pink-400 via-pink-500 to-pink-600 blur-2xl opacity-80 animate-pulse"></div>

          {/* Card */}
          <div className="relative bg-white rounded-2xl p-10 text-center shadow-xl">
            {/* Logo + Title */}
            <div className="flex flex-col items-center">
              <img
                src={juLogo}
                alt="Jadavpur University Logo"
                className="w-24 h-24 mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Jadavpur University
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Connect with your desired college alumni
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              over 10k+ alumni
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#search"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 hover:scale-105 transition shadow-md flex items-center gap-2"
              >
                🔍 Search Alumni
              </a>
              <a
                href="#all-alumni"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-300 hover:scale-105 transition shadow-md flex items-center gap-2"
              >
                👥 View All Alumni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
