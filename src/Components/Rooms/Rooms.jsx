import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1100px] h-[500px] mx-auto bg-blue-100 my-20 pt-16 lg:mb-[12%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="font-bold font-Teko text-5xl ">Fine Interior Rooms</h3>
        <p className="mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas id
          molestiae modi consequatur, ab deleniti!
        </p>
      </div>
      <div className="row-span-1 grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover h-full w-full"
          src="https://images.pexels.com/photos/14746040/pexels-photo-14746040.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
        <img
          className=" object-cover h-full w-full"
          src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
