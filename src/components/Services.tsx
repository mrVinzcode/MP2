import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professional Kitchen",
    desc: "Welcome to our professional kitchen, where culinary excellence meets personalized service. Our dedicated team of skilled chefs and staff are committed to delivering an unforgettable dining experience. From crafting exquisite dishes to catering to your dietary preferences, we take pride in every detail. Indulge in a journey of flavors and let us elevate your dining expectations. Your satisfaction is our passion.",
  },
  {
    img: "/services__2.png",
    title: "Deliver",
    desc: "Introducing our efficient delivery services, designed to bring convenience right to your doorstep. Whether it's a hearty meal, groceries, or essentials, we've got you covered. With a focus on timeliness and safety, our dedicated delivery team ensures your items arrive fresh and in perfect condition. Sit back, relax, and let us take care of the delivery logistics while you enjoy the convenience of staying home. Experience hassle-free deliveries with us today!",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Stay connected with our complimentary WiFi services! We understand the importance of staying online, whether for work or leisure. Enjoy seamless browsing and streaming with our high-speed WiFi, available to all our valued guests. Share your moments, catch up on emails, or simply browse your favorite sites without any limitations. It's our way of enhancing your experience and ensuring you have all the convenience you need while you're with us.",
  },
];

const Services = () => {
  return (
    <section className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing <br />
          elit. Qui est quisquam ut
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-20 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
