import React from "react";
import Button from "./Ui/Button";

function OurExperise() {
  return (
    <div className="relative overflow-hidden py-20 px-4 text-center">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient bg-[length:400%_400%]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h2 className="font-semibold text-3xl mb-4">
          Applicant Tracking System (ATS)
        </h2>

        <p className="mb-6 text-lg opacity-90">
          An applicant tracking system (ATS) simplifies and optimises the entire
          process of hiring and on-boarding. An applicant tracking system simplifies the
          entire process of hiring and on-boarding.
        </p>

        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          Our Expertise
        </Button>
      </div>
    </div>
  );
}

export default OurExperise;
