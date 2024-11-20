import React from "react";
import { IoIosTime } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Task = () => {
  return (
    <div className="flex justify-between p-2 bg-black text-white fixed shadow-lg z-50 top-0 right-0 left-0">
      <h1 className="font-bold text-2xl">BANARAS CATERERS</h1>
      <span className="flex">
        <IoCall className="mt-1 text-green-500" />
        <span className="ml-2 text-2xl font-bold">+91 9650763066</span>
      </span>
      <span className="flex">
        <IoIosTime className="mt-1 text-blue-600 text-2xl" />
        <span className="ml-2 text-2xl font-bold">10:00 AM TO 08:00 PM</span>
      </span>
    </div>
  );
};

export default Task;
