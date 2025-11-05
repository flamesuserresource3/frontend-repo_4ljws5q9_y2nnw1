import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            Premium Custom Tailoring • Within 2 km delivery radius
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Get Your Perfect Fit — Custom Tailoring Delivered to Your Door
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600 md:text-lg">
            Choose your dress style, send measurements, add design notes, and relax. Our city-center boutique crafts your garment with precision and care.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#catalog" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-neutral-800">
              Browse Dress Styles <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#measure" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
              Measurement Guide
            </a>
          </div>
          <ul className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-sm text-neutral-600">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Secure checkout via Shopify Payments</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Email updates at every stage</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Save your measurements for reorders</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Expedited options available</li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1520975673312-311a4c727fd7?q=80&w=1200&auto=format&fit=crop"
              alt="Tailoring studio with dress on mannequin"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-full bg-pink-200/40 blur-2xl md:block" />
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl md:block" />
        </div>
      </div>
    </section>
  );
}
