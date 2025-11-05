import React from 'react';
import { Search, Ruler, Palette, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Select Dress',
    desc: 'Explore styles across casual, formal, traditional, and party wear with transparent pricing.',
  },
  {
    icon: Ruler,
    title: 'Provide Measurements',
    desc: 'Use our guide to input bust, waist, hip, shoulders, sleeves, and length — save for next time.',
  },
  {
    icon: Palette,
    title: 'Add Design Notes',
    desc: 'Upload inspiration images and describe customizations like embroidery, lace, and fit tweaks.',
  },
  {
    icon: CreditCard,
    title: 'Checkout Securely',
    desc: 'Pay with cards and digital wallets via Shopify Payments with clear cost breakdowns.',
  },
  {
    icon: Truck,
    title: 'Track Order',
    desc: 'Receive email updates from Design Approved to Shipped with estimated delivery dates.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">How It Works</h2>
          <p className="mt-3 text-neutral-600">
            Simple, transparent, and crafted by experts in our city-center boutique.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.slice(0,3).map((s, i) => (
            <div key={i} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.slice(3).map((s, i) => (
            <div key={i} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
