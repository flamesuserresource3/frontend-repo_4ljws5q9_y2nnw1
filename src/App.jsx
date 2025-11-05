import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogGrid from './components/CatalogGrid';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <CatalogGrid />
        <HowItWorks />

        <section id="contact" className="border-t border-neutral-200 bg-neutral-50 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Questions? We're here to help.</h3>
              <p className="mt-2 text-neutral-600">Reach our boutique team for sizing help, custom requests, or delivery options within a 2 km radius.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><strong>Email:</strong> support@citycenterboutique.com</li>
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Service radius:</strong> Delivery available within 2 km of city center</li>
              </ul>
            </div>
            <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input required placeholder="Full name" className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2" />
                <input required type="email" placeholder="Email address" className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2" />
              </div>
              <input placeholder="Subject" className="mt-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2" />
              <textarea required placeholder="How can we help?" rows={4} className="mt-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2" />
              <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Send Message</button>
              <p className="mt-2 text-center text-xs text-neutral-500">We typically reply within 1 business day.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} City Center Boutique. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Return & Alteration Policy</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
