import React from "react";
import Image from "next/image";

const Menu = () => {
  const data = [
    {
      image: "/menu1.jpeg",
      heading: "Menu Card - 1",
    },

    {
      image: "/menu2.jpeg",
      heading: "Menu Card - 2",
    },

    {
      image: "/menu3.jpeg",
      heading: "Menu Card - 3",
    },

    {
      image: "/menu4.jpeg",
      heading: "Menu Card - 4",
    },

    {
      image: "/menu5.jpeg",
      heading: "Menu Card - 5",
    },

    {
      image: "/menu6.jpeg",
      heading: "Menu Card - 6",
    },
  ];

  return (
    <div className="mt-6 p-2">
      <div className="text-center">
        <h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
          Menu Card
        </h1>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 rounded mt-6">
        {data.map((items, key) => (
          <div key={key}>
            <Image
              className="w-full h-96 rounded shadow-lg shadow-blue-500/50"
              src={items.image}
              alt="Menu Cards"
              width={500}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
