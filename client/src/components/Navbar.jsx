import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/20
      bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="flex items-center justify-between py-3 px-4 sm:px-20 xl:px-32">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="w-32 sm:w-44 cursor-pointer transition hover:opacity-90"
        />

        {/* Right Section */}
        {user ? (
          <div className="flex items-center gap-4">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9",
                },
              }}
            />
          </div>
        ) : (
          <button
            onClick={openSignIn}
            className="group relative flex items-center gap-2
            rounded-full bg-primary px-8 py-2.5 text-sm font-medium text-white
            shadow-lg transition-all duration-300
            hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">Get started</span>

            <ArrowRight
              className="h-4 w-4 transition-transform
              group-hover:translate-x-1"
            />

            {/* Hover glow */}
            <span
              className="absolute inset-0 -z-10 rounded-full
              bg-primary/40 blur-lg opacity-0
              transition-opacity group-hover:opacity-100"
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
