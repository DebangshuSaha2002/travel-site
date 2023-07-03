import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { TiSocialPinterest } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="w-full py-2 px-2 bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blogs</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 pt-8 md:pt-2">
          <h6 className="font-bold uppercase pt-2">
            Subscrive to our Newsletter
          </h6>
          <p className="py-4">
            The latest deals, articles, and resources, set to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="text"
              placeholder="Enter email..."
            />
            <button className=" text-white rounded-md border-2 border-white p-2 mb-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="border-gray-500" />
      <div className="flex flex-col max-w-[1100px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-ray-500">
        <p className="py-4 text-gray-500">
          2023 Experiences. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl text-gray-500">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
