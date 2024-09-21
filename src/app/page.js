
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-500 p-4  text-center">
        <h1 className="text-2xl font-bold rounded-lg bg-white py-2"><span className="text-blue-600">city</span>
        <span className="text-red-600">biz</span>+</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose your <span className="text-blue-600">city</span>
          <span className="text-red-600">biz</span>+ subscription:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Limited Subscription */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center border">
            <h2 className="text-blue-600 font-bold text-lg">LIMITED</h2>
            <p className="font-bold text-xl">Subscription</p>
            <p className="mt-2 text-gray-600">Access to 2 Premium Articles</p>
            <hr className="my-4 border-t" />
            <p className="text-lg font-bold">Free</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>

          {/* Individual Subscription (Highlighted) */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border transform scale-105 md:scale-100 border-red-400">
            <h2 className="text-red-600 font-bold text-lg">INDIVIDUAL</h2>
            <p className="font-bold text-xl">Subscription</p>
            <p className="mt-2 text-gray-600">
              Unlimited access to Premium Articles
            </p>
            <hr className="my-4 border-t" />
            <p className="text-lg font-bold">$10 per month*</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>

          {/* Enterprise Subscription */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center border">
            <h2 className="text-blue-600 font-bold text-lg">ENTERPRISE</h2>
            <p className="font-bold text-xl">Subscription</p>
            <p className="mt-2 text-gray-600">
              Unlimited access up to 25 members**
            </p>
            <hr className="my-4 border-t" />
            <p className="text-lg font-bold">$100 per month*</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center p-4">
        <p>&copy; 2024 CityBiz+. All rights reserved.</p>
      </footer>
    </div>
  );
}
