export default function Feed() {
    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Welcome to the UChicago Tutoring
        </h1>
        <p className="mt-4 text-2xl text-center text-gray-600 dark:text-gray-400">
          A place for UChicago students to ask for class help and tutor each other 
        </p>
        <div className="flex flex-col items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="px-8 py-3 text-lg font-semibold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Get Started
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-blue-600 transition duration-200 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    )
}