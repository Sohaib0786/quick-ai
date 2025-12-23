import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative mt-24 w-full px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="border-t border-gray-200 pt-12">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <img src={assets.logo} alt="logo" className="h-9" />
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              Experience the power of AI with{" "}
              <span className="font-medium text-gray-800">QuickAI</span>.
              <br />
              Transform your content creation with premium AI tools — write
              articles, generate images, and streamline your workflow.
            </p>
          </div>

          {/* Links & Newsletter */}
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
            {/* Company Links */}
            <div>
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
                Company
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Home", "About us", "Contact us", "Privacy policy"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="transition hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
                Newsletter
              </h2>
              <p className="text-sm text-gray-600">
                The latest news, articles, and resources — delivered weekly.
              </p>

              <div
                className="mt-4 flex items-center gap-2 rounded-xl
                border border-gray-200 bg-white/70 p-2 backdrop-blur-xl"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-9 w-full bg-transparent px-2 text-sm
                  text-gray-700 placeholder-gray-400 outline-none"
                />
                <button
                  className="h-9 rounded-lg bg-primary px-4
                  text-sm font-medium text-white
                  transition hover:opacity-90"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-4">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © 2025 <span className="font-medium">GreatStack</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
