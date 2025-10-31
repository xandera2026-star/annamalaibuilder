export default function ContactBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-base font-semibold text-zinc-900">Visit Us</h3>
          <p className="mt-2 text-sm text-zinc-700">
            No 1 C, SKR Complex
            <br />
            Ground Floor, Ponnambalam Salai
            <br />
            Kolapakkam, Chennai - 600127
            <br />
            <span className="text-zinc-500">(Opposite Ration Shop)</span>
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-zinc-900">Call Us</h3>
          <p className="mt-2 text-sm text-zinc-700">
            <a href="tel:9841399373" className="text-amber-700 hover:underline">
              98413 99373
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-zinc-900">Email Us</h3>
          <p className="mt-2 text-sm text-zinc-700">
            <a
              href="mailto:Annamalaibuilders@gmail.com"
              className="text-amber-700 hover:underline"
            >
              Annamalaibuilders@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
