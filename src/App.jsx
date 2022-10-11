import "./index.css";

function App() {
  // simple navbar with blur effect show icon.png from assets styled with tailwindCSS
  return (
    <div className="bg-gray-900">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <img src="/src/assets/icon.png" alt="icon" className="w-10 h-10" />
          <h1 className="text-white text-xl font-bold ml-4 font-mono">
            Java.info
          </h1>
        </div>
        {/* Show the current time in the right corner*/}
        <div className="text-white font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 w-1/2 h-80 rounded-md flex justify-center items-center">
          {/* image about java from the web and a small text of introduction, a button to start to learning styled with animations with TailwindCSS */}
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/javaportada.png"
              alt="java"
              className="w-80 h-70 bg-gradient-to-r from-gray-900 bg-gray-800 rounded-3xl"
            />
            <h1 className="text-white text-4xl font-bold mt-4 font-mono">
              Java.info
            </h1>
            <p className="text-white text-lg mt-4 font-mono text-justify ml-5 mr-5">
              Java es un lenguaje de programación de propósito general que está
              basado en clases, orientado a objetos y diseñado para tener la
              menor cantidad posible de dependencias de implementación.
            </p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-slate-900">
              Start Learning
            </button>

            {/* footer with social media icons */}
            <div className="flex justify-center items-center p-1 bg-slate-200 rounded-md mt-20">
              <a href="https://www.facebook.com/">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
                  alt="facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                  alt="instagram"
                  className="w-8 h-8 ml-4"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                  alt="twitter"
                  className="w-8 h-8 ml-4"
                />
              </a>

              <a href="https://www.youtube.com/">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"
                  alt="youtube"
                  className="w-8 h-8 ml-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
