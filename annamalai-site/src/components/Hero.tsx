import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.webp"
          alt="Construction site in Chennai"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Quality Construction in Chennai, Delivered On Time
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-200">
          From planning to handover, we manage everything?serving Kolapakkam and across Chennai.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Get a Quote
          </Link>
          <a
            href="tel:9841399373"
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Call 98413 99373
          </a>
        </div>
      </div>
    </section>
  );
}
