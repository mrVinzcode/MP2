'use client'
import React, { useState } from "react";

const ReserveNow = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfReservation, setDateOfReservation] = useState("");
  const [timeOfReservation, setTimeOfReservation] = useState("");
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservation = () => {
    // Preparing for Backend
    setReservationConfirmed(true);
  };

  return (
    <section className="text-gray-600 body-font pt-20">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center pr-4">
        {reservationConfirmed ? (
          <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Thank you for your reservation!
            </h2>
            <p>
              Date of Reservation: {dateOfReservation}<br />
              Time of Reservation: {timeOfReservation}
            </p>
          </div>
        ) : (
          <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Reserve Now! See you soon.
            </h2>
            <div className="mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfReservation" className="leading-7 text-sm text-gray-600">
                Date of Reservation
              </label>
              <input
                type="date"
                id="dateOfReservation"
                name="date"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setDateOfReservation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="timeOfReservation" className="leading-7 text-sm text-gray-600">
                Time of Reservation
              </label>
              <input
                type="time"
                id="timeOfReservation"
                name="time"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setTimeOfReservation(e.target.value)}
              />
            </div>
            <button
              className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out"
              onClick={handleReservation}
            >
              Reserve Now
            </button>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        )}
        <div className="lg:w-2/3 md:w-1/2 sm:pt-10 md:pr-10 lg:pl-6 pr-6">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            🥢 Welcome to A Taste of Seoul! 🥢
          </h1>
          <p className="leading-relaxed mt-4 max-w-[500px] text-center">
            🌟 Why Taste of Korea? 🌟 <br /> Explore Authentic Recipes:
            Discover traditional and modern Korean recipes curated by our expert
            chefs. 📸 <br />
            Foodie Community: Share your own culinary creations, tips, and
            experiences with fellow Korean food enthusiasts. 🔔 Personalized 🎉
            Exclusive Offers: Enjoy special discounts and promotions on Korean
            cooking essentials. 🗺️ Global Flavors: Immerse yourself in the
            diverse flavors of Korea&lsquo;s regional dishes. 📖 🔥.
            Kamsahamnida! 🙏
          </p>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.9431154591116!2d121.04890117754073!3d14.314736984006503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d70bc20b5d4b%3A0x13f26ef2d4446952!2sBLK%2025%2C%2018%20Carmona%20Bypass%20Road%2C%20Carmona%2C%20Cavite!5e0!3m2!1sen!2sph!4v1697096878316!5m2!1sen!2sph" width="100%" height="450"loading="lazy"></iframe>
            <p className="leading-normal my-5 text-accent">
              Store Hours
            </p>
              <br />
              <p className="text-accent">
              Sunday to Thursday
              </p>
              <p>
              Dine-in: 11:00am to 10:00pm
              </p>
              <p>
              Delivery / Pick-Up: 10:00am to 10:00pm
              </p>
              <p className="text-accent">
              Friday to Saturday
              </p>
              <p>
              Dine-in: 11:00am to 11:00pm
              </p>
              <p>
              Delivery / Pick-Up: 10:00am to 10:00pm
              </p>
        </div>
      </div>
    </section>
  );
};

export default ReserveNow;
