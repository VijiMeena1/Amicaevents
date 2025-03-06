import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons
import { Carousel } from "@material-tailwind/react";

export default function Carousels() {
  const [slides, setSlides] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("/photo.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.slides);
      } catch (error) {
        console.error("Error fetching photo.json:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="relative">
      <Carousel
        autoplay={!isMouseOver}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className="h-[20rem] lg:h-[40rem] w-full object-cover"
          />
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute top-10 md:top-20 lg:top-[35%] w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white drop-shadow-lg text-xl md:text-3xl lg:text-5xl font-bold">
          Welcome to Unforgettable Moments: Your Premier Event Management Experience
        </h2>

        {/* Learn More Button */}
        <button
          className="my-4 border-2 lg:border-[3px] rounded-[40px] lg:text-lg py-2 lg:py-3 bg-[#12121259] px-6 md:px-8 text-white font-semibold hover:bg-[#00A4EF] focus:outline-none"
          onClick={() => setShowInfo(!showInfo)}
        >
          More About Us
        </button>
      </div>

      {/* Full-Screen Info Section */}
      {showInfo && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-6 md:p-10 max-w-4xl w-[90%] rounded-lg shadow-lg text-center overflow-y-auto max-h-[80vh]">
            <h3 className="text-2xl font-bold">About Amica Organisation</h3>
            <p className="mt-2 text-lg">
              <strong>Website:</strong>{" "}
              <a
                href="https://amicaevents.vercel.app/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amica Events
              </a>
            </p>

            <h3 className="mt-4 font-bold">Overview</h3>
            <p className="mt-2 text-gray-700">
              Amica Organisation is a dynamic and innovative event management
              company dedicated to delivering exceptional experiences. We
              specialize in corporate events, weddings, and private parties.
            </p>

            <h3 className="mt-4 font-bold">Why Choose Us?</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700 text-left">
              <li>Professional event planners with industry expertise.</li>
              <li>Affordable pricing and flexible packages.</li>
              <li>Strong vendor partnerships ensuring quality services.</li>
              <li>Personalized event management with a customer-centric approach.</li>
            </ul>

            {/* Additional Details */}
            <h3 className="mt-4 font-bold">Our Services</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700 text-left">
              <li>Corporate Events</li>
              <li>Weddings & Receptions</li>
              <li>Birthday Parties</li>
              <li>Anniversaries</li>
              <li>Themed Parties</li>
              <li>Conferences & Seminars</li>
            </ul>

            <h3 className="mt-4 font-bold">Contact Us</h3>
            <p className="mt-2 text-gray-700 flex flex-col items-center space-y-2 text-center">
              <span className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-500 mr-2" /> Chennai, India
              </span>
              <span className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-2" /> +91 98765 43210
              </span>
              <span className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-2" /> amicaeventhub1@gmail.com
              </span>
            </p>


            {/* Close Button */}
            <button
              className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-700"
              onClick={() => setShowInfo(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
