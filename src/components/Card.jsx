import React from "react";
import DazzCode from "../assets/dazz-programming.gif";
import FirstSteps from "../assets/firsteps.gif";
import Questions from "../assets/doubts.gif";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 place-content-center place-items-center justify-center items-center gap-5 mt-20 xl:mt-10">
      <div className="flex group relative overflow-hidden items-center justify-center rounded-md p-6 w-[350px] xl:h-[600px] xl:rounded-2xl rounded-b-none bg-[#FF5656] shadow-[#494953] bg-clip-padding bg-opacity-90 shadow-md xl:shadow-2xl text-center">
        {/* a introduction about java */}
        <div className="flex flex-col items-center">
          <img
            src={FirstSteps}
            alt="java"
            className="bg-opacity-10 bg-gradient-to-r from-red-400 to-[#FF5656] rounded-2xl"
          />
          <h1 className="text-white text-2xl font-bold mt-4">
            Primeros pasos en Java
          </h1>
          <p className="text-white text-lg mt-4 font-sans text-justify">
            Java es un lenguaje de programación de propósito general que está
            basado en clases, orientado a objetos y diseñado para tener la menor
            cantidad posible de dependencias de implementación.
          </p>

          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-slate-900">
                        Ver más...
                    </button> */}
          <div className="absolute grid grid-flow-row  place-items-start  h-[310px] w-full bg-black/60 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-platform/"
                target="_blank"
                className="hover:underline"
              >
                Introduccion a Java
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-virtual-machine-jvm/"
                target="_blank"
                className="hover:underline"
              >
                Introducción a Java Virtual Machine (JVM)
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/install-java/"
                target="_blank"
                className="hover:underline"
              >
                Guía para descargar e instalar Java
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/first-java-program/"
                target="_blank"
                className="hover:underline"
              >
                Primer programa Java
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex group relative overflow-hidden items-center justify-center rounded-md p-6 w-[350px] xl:h-[600px] xl:rounded-2xl rounded-b-none bg-[#FF5656] shadow-[#494953] bg-clip-padding bg-opacity-90 shadow-md xl:shadow-2xl text-center">
        {/* a introduction about java */}
        <div className="flex flex-col items-center ">
          <img
            src={DazzCode}
            alt="java"
            className="bg-opacity-10 bg-gradient-to-r from-red-400 to-[#FF5656] rounded-2xl "
          />
          <h1 className="text-white text-2xl font-bold mt-4">
            Conceptos basicos a POO
          </h1>
          <p className="text-white text-lg mt-4 font-sans text-justify">
            Java es un lenguaje de programación de propósito general que está
            basado en clases, orientado a objetos y diseñado para tener la menor
            cantidad posible de dependencias de implementación.
          </p>
          {/* Scroll to component below*/}
          {/* <button className="bg-blue-500 text-white px-4 py-5 w-full rounded-md mt-4 hover:bg-slate-900">
                        Ver más...
                    </button> */}
          <div className="absolute grid place-items-start  h-[310px] w-full bg-black/60 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-data-abstraction/"
                target="_blank"
                className="hover:underline"
              >
                ¿Qué es la abstracción de datos en OOPS?
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-oops-encapsulation/"
                target="_blank"
                className="hover:underline"
              >
                ¿Qué es la encapsulación?
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-className-inheritance/"
                target="_blank"
                className="hover:underline"
              >
                Herencia en Java OOPs con Ejemplo
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-inheritance-polymorphism/"
                target="_blank"
                className="hover:underline"
              >
                Polimorfismo en OOP Java con Ejemplo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex group relative overflow-hidden items-center justify-center rounded-md p-6 w-[350px] xl:h-[600px] xl:rounded-2xl rounded-b-none bg-[#FF5656] shadow-[#494953] bg-clip-padding bg-opacity-90 shadow-md xl:shadow-2xl text-center">
        {/* a introduction about java */}
        <div className="flex flex-col items-center ">
          <img
            src={Questions}
            alt="java"
            className="bg-opacity-10 bg-gradient-to-r from-red-400 to-[#FF5656] rounded-2xl"
          />
          <h1 className="text-white text-2xl font-bold mt-4">
            Los temas incomprendidos
          </h1>
          <p className="text-white text-lg mt-4 font-sans text-justify">
            Java es un lenguaje de programación de propósito general que está
            basado en clases, orientado a objetos y diseñado para tener la menor
            cantidad posible de dependencias de implementación.
          </p>
          {/* Scroll to component below*/}
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-slate-900">
                        Ver más...
                    </button> */}
          <div className="absolute grid place-items-start  h-[310px] w-full bg-black/60 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-command-line-arguments/"
                target="_blank"
                className="hover:underline"
              >
                Argumentos de línea de comando
              </a>
            </button>
            <button className="bg-black text-white py-5 w-full px-5">
              {/* Links styled with tailwind*/}
              <a
                href="https://guru99.es/java-this-keyword/"
                target="_blank"
                className="hover:underline"
              >
                “This” palabra clave
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/crBLydQRUsk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe> */
  }
};

export default Card;
