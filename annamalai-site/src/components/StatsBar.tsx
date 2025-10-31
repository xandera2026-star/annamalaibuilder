export default function StatsBar() {
  const stats = [
    { label: "Years in Chennai", value: "15+" },
    { label: "Projects Delivered", value: "250+" },
    { label: "On-time Delivery", value: "98%" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-zinc-200 p-6 text-center">
            <div className="text-3xl font-semibold text-amber-600">{s.value}</div>
            <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
