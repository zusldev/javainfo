import BgCoding from "../assets/video/programmingvideo.mp4";
function portada() {
  return (
    <header class="relative flex items-center justify-center h-[600px] overflow-hidden z-10">
      <div class="flex w-[900px] z-30 p-5 text-2xl text-white rounded-xl">
        {/* Title gradient text Bienvenido a Java */}
        <div class="flex flex-col items-center justify-center bottom-0">
          <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#FF5656]">
            Bienvenido a Java.info
          </h1>
          <p class="text-lg font-semibold text-center py-10">
            En este sitio web encontraras todo lo que necesitas saber sobre Java
            y sus diferentes frameworks.
          </p>
        </div>
        {/*         
        <div class="absolute space-x-5 items-center justify-center mt-5">
          <button class="px-4 py-2 text-lg font-bold text-white bg-purple-500 rounded-md shadow-2xl hover:bg-purple-600">
            Comenzar
          </button>

          <button class="px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-md shadow-2xl hover:bg-purple-500">
            Ver más
          </button>
        </div> */}
      </div>
      <video
        src={BgCoding}
        autoplay="true"
        muted="true"
        loop="true"
        class="absolute w-auto min-w-full min-h-full max-w-none object-cover blur-sm opacity-90"
      >
        Your browser does not support the video tag.
      </video>
    </header>
  );
}
export default portada;
