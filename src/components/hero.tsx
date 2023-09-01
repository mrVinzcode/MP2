import React from "react";
import Navbar from "./navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <video
        className="w-full h-auto absolute right-0 top-0 -z-10 object-cover opacity-90"
        autoPlay
        loop
        muted
        poster="/video-poster.jpg"
      >
        <source src="/header-video.mp4" type="video/mp4" />
        {/* Pending - Add more source elements for different formats */}
        {/* Pending Add-fallback content for browsers that do not support video */}
      </video>
      <Navbar />

      <div className="container max-w-[1500px] h-[calc(140vh-200px)] mx-auto grid items-center">
        <div className="w-[80%] max-w-[600px] space-y-4 bg-[#ffffff80] p-4">
          <p className="uppercase font-medium">
            Where every Flavor tells a story.
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Let&rsquo;s <span className="text-accent">Koreanize</span>
          </h2>
          <p className="space-y-4 text-gray-700 text-[14px] sm:text-[16px]">
            Explore Authentic Korean Food. A Culinary Adventure Awaits!
          </p>
          <p>What are you waiting for</p>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:-[16px]">
            <Link href="#menu">View More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
