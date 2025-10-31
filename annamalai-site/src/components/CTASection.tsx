import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-amber-500">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-white">
          Ready to start your project?
        </h2>
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-50"
          >
            Get a Quote
          </Link>
          <a
            href="tel:9841399373"
            className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-amber-400/30"
          >
            Call 98413 99373
          </a>
        </div>
      </div>
    </section>
  );
}
