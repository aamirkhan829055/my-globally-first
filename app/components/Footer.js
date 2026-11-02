"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerNavigation = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Edge Network", href: "/features" },
      { name: "AI Copilot", href: "/features", badge: "New" },
      { name: "Integrations", href: "/features" },
      { name: "Changelog", href: "#" },
    ],
    services: [
      { name: "Cloud Architecture", href: "/services" },
      { name: "Next.js Engineering", href: "/services" },
      { name: "DevOps & CI/CD", href: "/services" },
      { name: "SOC2 Compliance", href: "/services" },
      { name: "24/7 Managed SRE", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/about", badge: "Hiring" },
      { name: "Press & Media", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Community Discord", href: "#" },
      { name: "Security Whitepaper", href: "#" },
    ],
  };

  return (
    <footer className="w-full border-t border-gray-200/80 bg-white text-gray-600 transition-colors">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 sm:pt-18 lg:px-8">

        {/* Top Section: Brand + Newsletter Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-gray-100">

          {/* Brand Info (5 Cols) */}
          <div className="flex flex-col lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 leading-tight">
                  Next<span className="text-blue-600">Pro</span>
                </span>
                <span className="text-[10px] -mt-0.5 font-medium uppercase tracking-wider text-gray-400">
                  Studio
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-gray-600 leading-relaxed">
              The high-performance platform for modern web applications and edge cloud infrastructure. Build faster, scale reliably, and ship with confidence.
            </p>

            {/* Platform Status Pill */}
            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-gray-800">
                All Global Edge Nodes Operational (99.99%)
              </span>
            </div>
          </div>

          {/* Newsletter Box (7 Cols) */}
          <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-6 sm:p-8 lg:col-span-7">
            <div className="max-w-md">
              <h3 className="text-base font-bold text-gray-950">
                Subscribe to our developer newsletter
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Receive weekly engineering deep dives, architecture best practices, and new product releases directly in your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs sm:text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  required
                  placeholder="developer@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-2 text-[11px] text-gray-400">
              Zero spam. Unsubscribe anytime with a single click.
            </p>
          </div>

        </div>

        {/* Links Navigation Grid (4 Columns) */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 lg:grid-cols-4 border-b border-gray-100">
          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-950">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 transition hover:text-gray-950"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="rounded-full bg-blue-50 px-1.5 py-0.2 text-[9px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-950">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 transition hover:text-gray-950"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-950">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 transition hover:text-gray-950"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="rounded-full bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-600/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-950">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 transition hover:text-gray-950"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Social Icons */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row text-xs text-gray-500">
          <p>© 2026 NextPro Studio, Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-900 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition">
              Security
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="#"
              aria-label="Discord"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
