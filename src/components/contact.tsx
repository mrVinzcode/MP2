'use client'
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData, isSubmitted: true });
    // You can add logic here to handle form submission to your backend.
  };

  return (
    <section className="text-gray-600 body-font" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            &quot;Crafting Memories, One Dish at a Time&quot;
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
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-accent">koreanizefoodapp@email.com</a>
            <p className="leading-normal my-5">
              BLK 25 Lot 18 Carmona Estate Phase 6
              <br />
              Carmona Cavite, 4116
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.9431154591116!2d121.04890117754073!3d14.314736984006503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d70bc20b5d4b%3A0x13f26ef2d4446952!2sBLK%2025%2C%2018%20Carmona%20Bypass%20Road%2C%20Carmona%2C%20Cavite!5e0!3m2!1sen!2sph!4v1697096878316!5m2!1sen!2sph" width="800" height="450"loading="lazy"></iframe>
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
      </div>
    </section>
  );
};

export default Contact;
