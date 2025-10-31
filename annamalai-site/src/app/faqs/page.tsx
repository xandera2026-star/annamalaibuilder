export default function FAQsPage() {
  const faqs = [
    {
      q: "How long does a typical residential project take?",
      a: "Timelines vary by scope; we provide a detailed schedule after discovery.",
    },
    {
      q: "Do you handle approvals and permits?",
      a: "Yes, we manage drawings, approvals, and documentation as part of the scope.",
    },
    {
      q: "How is pricing structured?",
      a: "Transparent BOQ with line items; milestone-based payments.",
    },
  ];

  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-3xl font-semibold text-zinc-900">FAQs</h1>
          <div className="mt-8 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="p-6">
                <summary className="cursor-pointer text-base font-medium text-zinc-900">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
