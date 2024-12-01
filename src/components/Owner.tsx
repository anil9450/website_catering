import React from "react";

const Owner = () => {
  return (
    <>
      <div className="text-center mt-2">
        <h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
          Meet Our Leaders
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 mt-4 rounded">
        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg mb-6 md:mb-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Manish Srivastava
            </h2>
            <p className="text-gray-600">Founder</p>
            <p className="mt-4 text-gray-700">
              Manish Srivastava is the visionary behind our success. With 10
              years of experience and a passion for innovation, he has guided
              the company to new heights.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg ml-2">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Manisha Srivastava
            </h2>
            <p className="text-gray-600">CEO</p>
            <p className="mt-4 text-gray-700">
              Manisha Srivastava leads with strategic brilliance and a
              commitment to excellence, ensuring the company thrives in a
              competitive market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
