export default function ContactPage() {
  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900">Contact Us</h1>
            <p className="mt-4 text-zinc-700">
              Share your requirements and we will get back with an estimate.
            </p>
            <div className="mt-6 text-sm text-zinc-700">
              <p>
                No 1 C, SKR Complex
                <br />
                Ground Floor, Ponnambalam Salai
                <br />
                Kolapakkam, Chennai - 600127
                <br />
                <span className="text-zinc-500">(Opposite Ration Shop)</span>
              </p>
              <p className="mt-3">
                Phone: <a href="tel:9841399373" className="text-amber-700 hover:underline">98413 99373</a>
                <br />
                Email: <a href="mailto:Annamalaibuilders@gmail.com" className="text-amber-700 hover:underline">Annamalaibuilders@gmail.com</a>
              </p>
            </div>
          </div>
          <form className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-900">Name</label>
              <input className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-amber-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-900">Phone</label>
              <input className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-amber-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-900">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-amber-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-900">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-amber-500 focus:outline-none" />
            </div>
            <button type="button" className="w-full rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
