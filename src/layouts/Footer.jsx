import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#121212] w-full">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-20 lg:py-24 px-5">
          <div>
            <p className="text-center font-bold text-4xl md:text-5xl text-white font-serif">
              EventCraft<span className="text-[#00A4EF]">Hub</span>
            </p>
          </div>
          <div>
              <ul className="flex flex-wrap items-center text-base lg:text-lg font-medium text-white justify-center gap-6 md:gap-10 lg:gap-14">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Recent Event</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>
            <div>
            <ul className="flex flex-wrap items-center  font-medium  justify-center gap-8 md:gap-10 lg:gap-14 text-white text-3xl md:text-4xl grid-flow-col">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-apple"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <span className="flex justify-center text-base text-white">
            © 2023 EventCraftHub. All Rights Reserved.
          </span>
            </div>

        </div>
      </div>
  );
}
