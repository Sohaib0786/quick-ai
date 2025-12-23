import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center
      bg-[url('/gradientBackground.png')] bg-cover bg-center bg-no-repeat
      px-4 sm:px-20 xl:px-32"
    >
        
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl
          font-bold leading-tight tracking-tight text-gray-900"
        >
          <TypeAnimation
            sequence={[
              "Create amazing content",
              1200,
              "Create AI-powered designs",
              1200,
              "Create smarter workflows",
              1200,
            ]}
            speed={45}
            repeat={Infinity}
            wrapper="span"
            className="block"
          />
          <span className="block mt-2">
            with{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI tools
            </span>
          </span>
        </h1>

        <p
          className="mt-6 mx-auto max-w-xl text-sm sm:text-base
          text-gray-600"
        >
          Supercharge your creativity with powerful AI tools. Write high-quality
          articles, generate stunning images, and automate your workflow — all
          in one platform.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/ai")}
            className="group relative overflow-hidden rounded-xl
            bg-primary px-10 py-3 text-white font-medium
            shadow-lg transition-all duration-300
            hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">Start creating now</span>
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </button>

          <button
            onClick={() => navigate("/demo")}
            className="rounded-xl border border-gray-300
            bg-white px-10 py-3 font-medium text-gray-800
            shadow-sm transition-all duration-300
            hover:scale-105 hover:shadow-md active:scale-95"
          >
            Watch Tools
          </button>
        </div>

        {/* Trust Section */}
        <div className="mt-10 flex items-center justify-center gap-3 text-gray-600">
          <img
            src={assets.user_group}
            alt="Users"
            className="h-8 w-auto opacity-80"
          />
          <span className="text-sm">
            Trusted by <span className="font-semibold">10,000+</span> creators
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
