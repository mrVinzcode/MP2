'use client'

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitted: false, 
  });
// Preparation for the contact data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, isSubmitted: true });
  };

  return (
    <section className="text-gray-600 body-font" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            "Crafting Memories, One Dish at a Time"
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          {formData.isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-medium mb-4 text-accent">
                Thank you for contacting us!
              </h2>
              <p className="text-lg mb-8">
                We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* ... Form input fields here */}
              <div className="p-2 w-full">
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div>
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.message}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-accent border-0 rounded-3xl py-2 px-8 focus:outline-none hover:text-black text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center ">
            <a className="text-accent">koreanizefoodapp@email.com</a>
            <p className="leading-normal my-5">
              49 Smith St.
              <br />
              Saint Cloud, MN 56301
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
