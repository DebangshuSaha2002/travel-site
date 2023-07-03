import React from "react";
import videoBg from "../Assets/Videos/pexels_videos_1409899 (2160p).mp4";
const LandingPage = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/30"></div>
      <div className="m-0 p-0 w-[100%] h-[100vh]">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100%] object-cover"
        ></video>
      </div>
      <div className="top-0 absolute w-[100%] h-[100%] flex-col flex justify-center ">
        <div className="absolute p-10  text-white m-auto md:w-[700px]">
          <h3 className="font-Tangerine sm:text-4xl md:text-7xl text-5xl font-bold">
            All Inclusive
          </h3>
          <h1 className="font-Tangerine text-4xl my-4">
            Private Beaches & Getaways
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex nam
            quos, quam aperiam dolorum cum ut nemo obcaecati, asperiores rem
            consequuntur expedita ratione repellendus qui adipisci incidunt quas
            neque.
          </p>
          <button className="border-2 rounded-xl p-1 hover:cursor-pointer hover:bg-teal-400 hover:text-black mt-[6px]">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
