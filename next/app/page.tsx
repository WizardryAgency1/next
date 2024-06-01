/* eslint-disable react/jsx-no-undef */

"use client"

import Comments from "./_landing/Comments";
import { Footer } from "./_landing/Footer";
import Hero from "./_landing/Hero";
import { Showcase } from "./_landing/Showcase";
import { Work } from "./_landing/Work";
import Plans from './_landing/Plans';
import Send from "./_landing/SendForm";

export default function Home() {
  return (
    <main className="h-full relative ">
      <div
        className=" absolute bg-gradient-to-tr from-[#55a96d] to-[#40a172] opacity-30  inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43c99a] to-[#388d57] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="md:flex md:mr-20 md:mt-20 mx-20">
        <Hero />
        <Send />
      </div>
      <Work />
      <Showcase />
      <Plans />
      <Comments />
      <Footer />

    </main>
  );
}
