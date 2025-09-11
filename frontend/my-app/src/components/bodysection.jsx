export default function BodySection() {
  return (
    <section id="search-form" className="bg-gray-50 py-16 flex justify-center">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Card Box */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Search your seniors...
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Department
              </label>
              <select
                id="department"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select department</option>
                <option value="cse">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="printing">Printing & Packaging</option>
                <option value="printing">Chemical</option>
                <option value="printing">Production</option>
                <option value="printing">Instrumentation</option>
                <option value="printing">Construction</option>
                <option value="printing">Power</option>
                <option value="printing">Architecture</option>
                <option value="printing">pharmacy</option>
                <option value="printing">Food tech & biochemcial</option>
                <option value="printing">Metallurgy & material</option>
              </select>
            </div>

            {/* Passout Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Passout Year
              </label>
              <input
                type="number"
                id="year"
                placeholder="Enter year (e.g., 2023)"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 hover:scale-105 transition shadow-md"
              >
                🔍 Search Alumni
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
