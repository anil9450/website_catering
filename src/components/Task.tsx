import React from "react";
import { IoIosTime } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Task = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-2 bg-black text-white fixed shadow-lg z-50 top-0 right-0 left-0">
      <h1 className="font-bold text-xl sm:text-2xl">BANARAS CATERERS</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <span className="flex items-center">
          <IoCall className="text-green-500 text-lg sm:text-xl" />
          <span className="ml-2 text-lg sm:text-2xl font-bold">
            +91 9650763066
          </span>
        </span>
      </div>
      <div className="flex items-center">
        <IoIosTime className="text-blue-600 text-lg sm:text-xl" />
        <span className="ml-2 text-lg sm:text-2xl font-bold">
          10:00 AM TO 08:00 PM
        </span>
      </div>
    </div>
  );
};

export default Task;
