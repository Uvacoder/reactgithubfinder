import React from "react";
export const Header = () => {
  return (
    <header className="text-gray-400 bg-white body-font">
      <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"></a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <h1 className="text-4xl text-center text-green-500 font-extrabold tracking-tight ">
            <span className="text-5xl font-extrabold tracking-tight text-gray-900">GitHub</span>
            Finder
          </h1>
        </div>
      </div>
    </header>
  );
};
