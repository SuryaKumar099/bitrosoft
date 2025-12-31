import React from "react";
import CarouselPage from "../Components/CarouselPage";
import OurService from "../Components/OurService";
import OurExperise from "../Components/OurExperise";
import ITConsulting from "../Components/ITConsuliting";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <Nav />
      </section>
      {/* CAROUSEL */}
      <section className="w-full">
        <CarouselPage />
      </section>

      {/* SERVICES */}
      <section className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>
        <OurService />
      </section>

      <section className="w-full">
        <OurExperise />
      </section>

      <section className="w-full">
        <ITConsulting />
      </section>
      <section className="w-full m-0">
        <Footer />
      </section>
    </>
  );
}
