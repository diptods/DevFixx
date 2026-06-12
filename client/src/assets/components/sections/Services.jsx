const services = [
  "Website Development",
  "Landing Pages",
  "UI/UX Design",
  "API Integration",
  "Firebase & Supabase",
  "Website Optimization",
];

export default function Services() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Services That Help Your Business Scale
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-purple-500 transition"
            >
              <h3 className="text-2xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-400">
                Premium quality solutions built with modern technologies.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}