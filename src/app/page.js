export default function Home() {
  return (
      <div className="flex flex-col items-center space-y-6 z-30">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Welcome to AstroMood
        </h1>
        <p className="text-lg md:text-xl text-center md:w-6/12 w-[90%]">
          AstroMood is your ultimate mood tracker that lets you explore your emotions in a cosmic journey. Track your feelings and let the stars vibe with you!
        </p>
        <p className="text-lg md:text-xl text-center md:w-6/12 w-[90%]">
          🚀 Head over to <span className="font-semibold text-indigo-400">Nova</span> to input your emotion and light up your star.  
        </p>
        <p className="text-lg md:text-xl text-center md:w-6/12 max-w-[90%]">
          🌌 Check out <span className="font-semibold text-indigo-400">Orbit</span> to see your stats and explore the celestial patterns of your emotions.
        </p>
        <div className="flex space-x-6 mt-8">
          <a
            href="/nova"
            className="px-6 py-3 bg-indigo-400 hover:bg-indigo-600 rounded-lg text-white font-semibold text-lg transition"
          >
            Go to Nova
          </a>
          <a
            href="/orbit"
            className="px-6 py-3 bg-indigo-400 hover:bg-indigo-600 rounded-lg text-white font-semibold text-lg transition"
          >
            Explore Orbit
          </a>
        </div>
      </div>
  );
}
