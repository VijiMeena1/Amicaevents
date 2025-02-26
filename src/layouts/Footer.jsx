import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] w-full text-white" data-aos="fade-up" data-aos-duration="2000">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-20 lg:py-24 px-5">
        {/* Logo / Brand Name */}
        <p className="text-center font-bold text-3xl md:text-5xl font-serif">
          Amica <span className="text-[#00A4EF]">Event</span>
        </p>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap items-center text-base lg:text-lg font-medium justify-center gap-6 md:gap-10 lg:gap-14">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Recent Event</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-14 text-2xl md:text-4xl">
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-apple"></ion-icon></a></li>
          </ul>
        </div>

        {/* Copyright Notice */}
        <span className="text-center">
          © 2025 Amica Event. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
