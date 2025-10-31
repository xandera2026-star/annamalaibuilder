export default function TestimonialsPage() {
  const items = [
    { name: "R. Kumar", area: "Kolapakkam", quote: "Professional and on-time delivery." },
    { name: "S. Priya", area: "Chennai", quote: "Transparent pricing and quality work." },
    { name: "M. Ahmed", area: "Chennai", quote: "Great experience from start to finish." },
  ];

  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-3xl font-semibold text-zinc-900">Testimonials</h1>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <div key={t.name} className="rounded-xl border border-zinc-200 bg-white p-6">
                <p className="text-sm text-zinc-700">?{t.quote}?</p>
                <div className="mt-3 text-sm font-medium text-zinc-900">
                  {t.name} ? {t.area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
