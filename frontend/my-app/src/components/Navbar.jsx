export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">AlumniConnect </div>
        <div className="text-2xl font-serif text-gray-900">
          Connecting Alumni , Empowering Instituion{" "}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="#alumni"
              className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-400 transition"
            >
              Login as Alumni
            </a>
          </li>
          <li>
            <a
              href="#student"
              className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-400 transition"
            >
              Login as student
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700 text-2xl">☰</button>
      </div>
    </nav>
  );
}
