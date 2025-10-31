import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">Annamalai Builders</h3>
          <p className="mt-3 text-sm text-zinc-600">
            Quality construction and renovation in Chennai.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-900">Contact</h4>
          <address className="mt-3 not-italic text-sm text-zinc-700">
            No 1 C, SKR Complex
            <br />
            Ground Floor, Ponnambalam Salai
            <br />
            Kolapakkam, Chennai - 600127
            <br />
            <span className="text-zinc-500">(Opposite Ration Shop)</span>
          </address>
          <div className="mt-3 text-sm">
            <a href="tel:9841399373" className="text-amber-700 hover:underline">
              98413 99373
            </a>
            <br />
            <a
              href="mailto:Annamalaibuilders@gmail.com"
              className="text-amber-700 hover:underline"
            >
              Annamalaibuilders@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-900">Service Areas</h4>
          <p className="mt-3 text-sm text-zinc-700">
            Kolapakkam, Chennai and surrounding neighborhoods.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        ? {new Date().getFullYear()} Annamalai Builders. All rights reserved.
      </div>
    </footer>
  );
}
