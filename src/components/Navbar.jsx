import React from 'react';
import { Scissors, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">City Center Boutique</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="#catalog" className="transition hover:text-neutral-900">Browse Dresses</a>
          <a href="#how" className="transition hover:text-neutral-900">How It Works</a>
          <a href="#contact" className="transition hover:text-neutral-900">Contact / FAQ</a>
          <a href="#account" className="transition hover:text-neutral-900 flex items-center gap-2"><User className="h-4 w-4" /> Account</a>
        </nav>
        <a href="#start" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800 md:px-5">
          <ShoppingBag className="h-4 w-4" /> Start Your Order
        </a>
      </div>
    </header>
  );
}
