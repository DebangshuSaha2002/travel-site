import React from "react";

const Plans = () => {
  return (
    <div className="max-w-[1100px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 h-[90vh] grid-rows-3">
        <img
          className="row-span-2 p-2 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt="/"
        />
        <img
          className=" w-full h-full p-2 object-cover"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80"
          alt="/"
        />
        <img
          className="row-span-2 p-2 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-2 w-full p-2 h-full object-cover"
          src="https://images.unsplash.com/photo-1540280369237-dea08361593a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="w-full h-full p-2 object-cover"
          src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="/"
        />
      </div>

      {/* Right Side */}

      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-5xl md:text-6xl font-Teko w-full">
          Plan Your Next Trip
        </h3>
        <p className="text-xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laborum.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          dignissimos recusandae architecto soluta magni dolore praesentium
          obcaecati accusantium itaque provident!
        </p>
        <div>
          <button className="border-2 border-black p-2 rounded-xl hover:shadow-xl mr-4">
            Learn More
          </button>
          <button className="border-2 border-black bg-black text-white p-2 rounded-xl hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
