import "./index.css";

function SecondSection() {
  return (
    <div className="flex mt-10 xl:mt-20 h-auto justify-center items-center opacity-90">
      <div className="grid w-full xl:w-[1700px] mb-10 lg:grid-cols-2 ">
        <figure className="flex flex-col p-8 rounded-tl-xl text-center bg-[#EDF2F6] ">
          <blockquote className="mx-auto mb-4 max-w-2xl text-black lg:mb-8">
            <h3 className="text-lg font-semibold ">Es simple</h3>
            <p className="my-4 font-light text-gray-400">
              Java ofrece la funcionalidad de un lenguaje potente, derivado de C
              y C++, pero sin las características menos usadas y más confusas de
              estos, haciéndolo más sencillo.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col p-8 rounded-tr-xl text-center bg-[#EDF2F6] ">
          <blockquote className="mx-auto mb-4 max-w-2xl text-black lg:mb-8">
            <h3 className="text-lg font-semibold ">Orientado a objetos</h3>
            <p className="my-4 font-light text-gray-400">
              El enfoque orientado a objetos (OO) es uno de los estilos de
              programación más populares. Permite diseñar el software de forma
              que los distintos tipos de datos que se usen estén unidos a sus
              operaciones.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col p-8 rounded-bl-xl text-center bg-[#EDF2F6] ">
          <blockquote className="mx-auto mb-4 max-w-2xl text-black lg:mb-8">
            <h3 className="text-lg font-semibold ">Multiplataforma</h3>
            <p className="my-4 font-light text-gray-400">
              Esto significa que programas escritos en el lenguaje Java pueden
              ejecutarse en cualquier tipo de hardware, lo que lo hace portable.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col p-8 rounded-br-xl text-center bg-[#EDF2F6] ">
          <blockquote className="mx-auto mb-4 max-w-2xl text-black lg:mb-8">
            <h3 className="text-lg font-semibold ">Es multihilo</h3>
            <p className="my-4 font-light text-gray-400">
              Java logra llevar a cabo varias tareas simultáneamente dentro del
              mismo programa. Esto permite mejorar el rendimiento y la velocidad
              de ejecución.
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}

export default SecondSection;
