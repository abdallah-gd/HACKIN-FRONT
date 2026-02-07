export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">volunteer</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">donate</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">contact us</a>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                register
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="relative h-64 w-full " style={{backgroundImage: 'url(/elect.png)', backgroundSize: 'cover', backgroundPosition: 'center' , zIndex: 2}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-2">
                  Electricity is essential for daily life
                </h1>
                <p className="text-sm opacity-90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
              <span className="text-white">⚙️</span>
            </div>
            <h2 className="text-xl font-semibold text-black">Skill Matrix :</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🔌</span>
                </div>
                <h3 className="font-semibold text-black">Electricity</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Already Expert Form */}
          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-black">Already Expert</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Ahmad Tariq Stockdale"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Field of interest
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black">
                  <option>Plombery</option>
                  <option>Electricity</option>
                  <option>Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Helpful Links
                </label>
                <input
                  type="url"
                  placeholder="eg. linkedin"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none bg-white text-black "
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Want To Start Form */}
          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-black">want To start</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Ahmad Tariq Stockdale"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2 ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Field of interest
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black">
                  <option>Plombery</option>
                  <option>Electricity</option>
                  <option>Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Education Level
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black">
                  <option>High School</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Motivation
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none bg-white text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}