import React from 'react';

const items = [
  {
    title: 'Casual Dresses',
    price: 'From $49',
    eta: '5–7 days',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    options: ['Length adjustments', 'Waist fitting', 'Sleeve tweaks'],
  },
  {
    title: 'Formal Wear',
    price: 'From $89',
    eta: '7–10 days',
    img: 'https://images.unsplash.com/photo-1520975619016-6c0c4b8d7a49?q=80&w=1200&auto=format&fit=crop',
    options: ['Structured fit', 'Hem shaping', 'Lining options'],
  },
  {
    title: 'Traditional Dresses',
    price: 'From $79',
    eta: '6–9 days',
    img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
    options: ['Neckline styles', 'Sleeve styles', 'Embroidery add-ons'],
  },
  {
    title: 'Party Wear',
    price: 'From $99',
    eta: '7–12 days',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    options: ['Beading', 'Lace trim', 'Custom silhouettes'],
  },
];

export default function CatalogGrid() {
  return (
    <section id="catalog" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Browse Dress Styles</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">High-quality imagery, clear pricing, and popular customization options at a glance.</p>
          </div>
          <form className="hidden items-center gap-2 md:flex">
            <input
              type="search"
              placeholder="Search styles..."
              className="w-64 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2"
            />
            <select className="rounded-full border border-neutral-300 bg-white px-3 py-2 text-sm">
              <option>All</option>
              <option>Casual</option>
              <option>Formal</option>
              <option>Traditional</option>
              <option>Party</option>
            </select>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-neutral-900">{it.title}</h3>
                <div className="mt-1 flex items-center justify-between text-sm text-neutral-600">
                  <span>{it.price}</span>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs">{it.eta}</span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                  {it.options.map((op) => (
                    <li key={op} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-300" /> {op}</li>
                  ))}
                </ul>
                <a href="#start" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Customize & Order</a>
              </div>
            </article>
          ))}
        </div>

        <div id="measure" className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-neutral-900">Measurement Guide</h3>
          <p className="mt-1 text-sm text-neutral-600">Measure over well-fitted clothing. Keep the tape snug but not tight.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Bust/Chest</strong><p className="mt-1 text-sm text-neutral-600">Around fullest part of chest.</p></div>
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Waist</strong><p className="mt-1 text-sm text-neutral-600">Natural waistline, above navel.</p></div>
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Hip</strong><p className="mt-1 text-sm text-neutral-600">Around fullest part of hips.</p></div>
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Shoulder Width</strong><p className="mt-1 text-sm text-neutral-600">Edge to edge across back.</p></div>
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Sleeve Length</strong><p className="mt-1 text-sm text-neutral-600">Shoulder seam to wrist.</p></div>
            <div className="rounded-xl border border-neutral-200 p-4"><strong>Dress Length</strong><p className="mt-1 text-sm text-neutral-600">From shoulder to desired hem.</p></div>
          </div>
          <a href="#start" className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Start with My Measurements</a>
        </div>
      </div>
    </section>
  );
}
