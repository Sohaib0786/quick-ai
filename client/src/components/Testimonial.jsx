import { assets } from "../assets/assets";

const Testimonial = () => {

  const dummyTestimonialData = [

    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },

    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },

    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  
  return (
    <section className="relative py-28 px-4 sm:px-20 xl:px-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800">
          Loved by <span className="text-primary">Creators</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500">
          Don&apos;t just take our word for it. Here&apos;s what creators around
          the world are saying.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-gray-200
            bg-white/70 p-8 shadow-sm backdrop-blur-xl
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    alt="star"
                    className="h-4 w-4"
                  />
                ))}
            </div>

            {/* Content */}
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            <div className="my-6 h-px w-full bg-gray-200" />

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {testimonial.title}
                </p>
              </div>
            </div>

            {/* Glow */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl opacity-0
              blur-2xl transition duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
