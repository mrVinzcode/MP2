import React from "react";

const SignupPage = () => {
  return (
    <section className="text-gray-600 body-font pt-20">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center pr-4">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Reserve Now! See you soon.
          </h2>
          <div className="mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600"
            />
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            </div>
            <div className="mb-4">
             <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600"
            />
            Date of Reservation
            <input
              type="date"
              id="dateOfReservation"
              name="date"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            </div>
            <div className="mb-4">
             <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600"
            />
            Time of Reservation
            <input
              type="time"
              id="timeOfReservation"
              name="time"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out ">
            Reserve Now
          </button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
        <div className="lg:w-2/3 md:w-1/2 sm:pt-10 md:pr-10 lg:pl-6 pr-6">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            🥢 Welcome to Taste of Seoul! 🥢
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
      </div>
    </section>
  );
};

export default SignupPage;
