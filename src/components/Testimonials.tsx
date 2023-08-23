import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Testimonials = () => {
  return (
    // <div classNameName="container pt-40">
    //   <div classNameName="grid lg:grid-cols-[50%,1fr] gap-20">
    //     <div>
    //       <Image
    //         classNameName="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
    //         src="/survey.png"
    //         width={1000}
    //         height={600}
    //         alt="survey image"
    //       />
    //     </div>

    //     <div classNameName="self-center">
    //       <h2 classNameName="text-4xl md:text-6xl font-bold">Survey</h2>
    //       <h2 classNameName="text-4xl md:text-6xl font-bold pt-3">
    //         About our <span classNameName="text-accent">Food</span>
    //       </h2>
    //       <p classNameName="text-gray-700 pt-16">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
    //         sed nobis est debitis, animi itaque in placeat accusamus totam
    //         dolores ipsam molestias voluptates, nostrum quisquam eum aspernatur
    //         non omnis ad!
    //       </p>

    //       <p classNameName="text-gray-700 pt-8">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
    //         necessitatibus repudiandae saepe nulla sunt accusantium iusto
    //         repellat illo eveniet magni tenetur nam ex alias aperiam, placeat
    //         provident pariatur obcaecati nesciunt?
    //       </p>
    //     </div>
    //   </div>
    //   <Dash />
    // </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90s microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  width={106}
                  height={106}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90s microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  width={107}
                  height={107}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
