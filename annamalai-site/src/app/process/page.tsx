export default function ProcessPage() {
  const steps = [
    { title: "Discovery", description: "Site visit, requirements, and budget alignment." },
    { title: "Estimate", description: "Detailed BOQ, scope, and timeline." },
    { title: "Execution", description: "Project management, quality checks, and reporting." },
    { title: "Handover", description: "Final inspection, documentation, and support." },
  ];

  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-3xl font-semibold text-zinc-900">Our Process</h1>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.title} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
