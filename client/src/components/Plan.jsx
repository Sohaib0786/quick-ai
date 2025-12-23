import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <section className="relative my-32 px-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-500">
            Start for free and scale as you grow. Unlock powerful AI tools built
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Pricing Table */}
        <div
          className="mt-16 rounded-3xl border border-gray-200
          bg-white/80 p-6 shadow-lg backdrop-blur-xl
          max-sm:mx-2"
        >
          <PricingTable />
        </div>
      </div>
    </section>
  );
};

export default Plan;
