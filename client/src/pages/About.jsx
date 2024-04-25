import React from "react";
import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Ajay Panpatil</h1>
        </div>
    
          <h2 className="text-xl font-semibold">Phone No : 9898787808</h2>
          <h2 className="text-xl font-semibold">Email : csstudyme@Gmail.com</h2>
         
        
        <p>
        The project ‘Tours and Travels’ is developed to replace the currently existing system, which helps in keeping records of the customer, details of destination as well as payment received. It saves the precious asset that is time, and also accuracy, reliability and uniformity can be maintained. This project is useful for the manager of the company as it helps them to search the data faster than the existing system, to get customer records easily and reports of the customer payments.
        </p>
      </div>
    </div>
  );
};

export default About;
