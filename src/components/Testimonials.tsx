import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="testimonials">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-6xl md:text-2xl sm:text-2xl  font-bold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-2xl text-gray-700 lg:mb-16 sm:text-xl dark:text-gray-400">
            &quot;Discover How Our Services Made a Difference&quot;
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              VERY GOOD KOREAN FOOD!!!
              </h3>
              <p className="my-4">
              &quot;Absolutely loved my dining experience at Taste of Seoul! The ambiance was simply delightful; from the warm and welcoming decor to the soothing Korean music playing in the background, it truly transported me to Seoul. The service was top-notch; the staff was attentive and friendly, making sure we had everything we needed. And the food? Oh, it was an explosion of flavors! Every dish was a culinary masterpiece, and I can't wait to come back for more.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
                width={400}
                height={200}
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Food Blogger
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Fantastic Combination
              </h3>
              <p className="my-4">
                &quot;I recently dined at Taste of Seoul, and I was blown away by the fantastic combination of great ambiance, excellent service, and delicious food. The restaurant's cozy atmosphere and traditional Korean decor instantly put me at ease. The service staff were knowledgeable about the menu and offered fantastic recommendations. As for the food, it was like a taste journey through Korea. Every bite was a burst of authentic flavors, and I left with a happy heart and a full belly.&quot;
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
                width={400}
                height={200}
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Influencer
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Exceeded Expectations 
              </h3>
              <p className="my-4">
                &quot;Taste of Seoul exceeded all my expectations! The ambiance was spot on, providing a relaxing and authentic Korean dining experience. The service was impeccable; the staff was courteous and went out of their way to make our evening special. And the food was simply divine! Each dish was a masterpiece, and I could taste the passion and dedication that went into preparing them. This restaurant is a hidden gem, and I can't wait to share this fantastic find with my friends and family.&quot;
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
                width={400}
                height={200}
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Travel Blogger
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Pure Pleasure
              </h3>
              <p className="my-4">
                &quot;I had the pleasure of dining at Taste of Seoul, and I can't stop raving about it! The ambiance was charming, with a perfect blend of modern and traditional Korean elements. The service was impeccable; the staff was friendly and attentive without being intrusive. And the food...oh, the food was a revelation! Every dish was bursting with flavor, and the presentation was a work of art. I'm so glad I found this gem of a restaurant, and I'll definitely be returning soon for another delightful dining experience.&quot;
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
                width={400}
                height={200}
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
