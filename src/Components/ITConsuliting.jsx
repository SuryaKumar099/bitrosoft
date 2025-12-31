import React from "react";
import Button from "./Ui/Button";

function ITConsulting() {
  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* 🔥 ANIMATED BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center text-white">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            We are experts in IT Consulting & IT Staffing
          </h2>

          <p className="mb-4 text-gray-200">
            AIT is one of the best companies in the IT Staff Augmentation industry.
            Since 2007, we’ve helped Fortune-listed and mid-size clients achieve
            their business goals by providing high-quality IT talent worldwide.
          </p>

          <p className="mb-4 text-gray-200">
            We bridge the IT talent demand-supply gap through an innovative
            recruiting engine, backed by a client-centric service focus.
          </p>

          <p className="mb-6 text-gray-200">
            Our extensive and regularly updated database helps reduce
            time-to-hire from months to weeks.
          </p>

          <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-2">
            Read More
          </Button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-blue-600/90 backdrop-blur p-8 rounded-xl shadow-2xl">
          <h5 className="text-xl font-semibold mb-3">
            The Benefits to You
          </h5>

          <p className="mb-6 text-gray-100">
            Scale faster with skilled IT professionals, reduce hiring risks, and
            ensure faster project delivery.
          </p>

          <h4 className="text-xl font-semibold mb-3">
            Our Offer to You
          </h4>

          <p className="text-gray-100">
            Stay focused on your core business while we provide top-tier IT
            talent tailored to your needs.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ITConsulting;
