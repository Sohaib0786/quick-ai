import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {

  const navigate = useNavigate();
  
  const { user } = useUser();

  return (
    <section className="relative my-28 px-4 sm:px-20 xl:px-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800">
          Powerful <span className="text-primary">AI Tools</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500">
          Everything you need to create, enhance, and optimize content using
          next-generation artificial intelligence.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="group relative cursor-pointer rounded-2xl border border-gray-200
            bg-white/70 p-8 shadow-sm backdrop-blur-xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl opacity-0
              group-hover:opacity-100 transition duration-300 blur-2xl"
              style={{
                background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />

            {/* Icon */}
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl
              text-white shadow-md transition-transform duration-300
              group-hover:scale-110"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="h-7 w-7" />
            </div>

            {/* Content */}
            <h3 className="mt-6 text-lg font-semibold text-slate-800">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {tool.description}
            </p>

            {/* CTA */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
              Try now
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiTools;
