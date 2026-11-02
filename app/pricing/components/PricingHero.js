"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingHero() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      badge: "Free Forever",
      description: "Perfect for indie hackers, hobbyists, and rapid MVP prototyping.",
      priceMonthly: 0,
      priceAnnual: 0,
      highlight: false,
      ctaText: "Get Started Free",
      ctaHref: "#",
      features: [
        "Up to 3 production projects",
        "50,000 monthly edge requests",
        "Community support & docs",
        "Automatic HTTPS & SSL",
        "Basic telemetry & analytics",
      ],
    },
    {
      name: "Pro",
      badge: "Most Popular",
      description: "Best for growing startups, serious creators, and agile teams.",
      priceMonthly: 29,
      priceAnnual: 24,
      highlight: true,
      ctaText: "Start 14-Day Free Trial",
      ctaHref: "#",
      features: [
        "Unlimited production projects",
        "1,000,000 monthly edge requests",
        "Priority 24/7 email & chat support",
        "Custom domains & team seats (up to 10)",
        "Advanced APM & log retention (30 days)",
        "Zero-downtime instant rollbacks",
        "Autonomous AI Copilot access",
      ],
    },
    {
      name: "Enterprise",
      badge: "Dedicated Scale",
      description: "Tailored for mission-critical apps requiring maximum SLA & compliance.",
      priceMonthly: 99,
      priceAnnual: 79,
      highlight: false,
      ctaText: "Contact Enterprise Sales",
      ctaHref: "#",
      features: [
        "Unlimited projects & team members",
        "Custom high-throughput edge limits",
        "99.99% guaranteed SLA uptime",
        "Dedicated cloud architect & Slack channel",
        "SOC2 Type II & HIPAA compliance report",
        "Custom VPC peering & SSO SAML",
        "Automated penetration audit reports",
      ],
    },
  ];

  const faqs = [
    {
      q: "Can I switch plans or cancel anytime?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your billing dashboard with zero penalty.",
    },
    {
      q: "Is there a free trial for the Pro plan?",
      a: "Yes! The Pro plan comes with an unrestricted 14-day free trial. No credit card required to start testing.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We support all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and bank wire transfers for Enterprise customers.",
    },
    {
      q: "What happens if I exceed my monthly edge request limit?",
      a: "We never take your applications down. We will notify you when you reach 80% and 100% capacity, and you can seamlessly upgrade your tier.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Soft ambient background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-12rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-blue-300 via-sky-200 to-indigo-200 opacity-25 sm:left-[calc(50%-28rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-gray-900">Transparent Pricing</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">No hidden fees</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            Predictable plans for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              teams of every size.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Start completely free and scale as you grow. Flexible plans designed to adapt to your traffic, infrastructure, and team needs.
          </p>

          {/* Billing Cycle Switch */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-gray-950 font-semibold" : "text-gray-500"}`}>
              Monthly billing
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900 transition-colors duration-200 ease-in-out focus:outline-none"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`flex items-center gap-2 text-sm font-medium ${isAnnual ? "text-gray-950 font-semibold" : "text-gray-500"}`}>
              <span>Annual billing</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300 ${
                  plan.highlight
                    ? "border-2 border-blue-600 bg-white shadow-2xl shadow-blue-600/10 scale-100 lg:-translate-y-2"
                    : "border border-gray-200/90 bg-white shadow-xs hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                {/* Popular Pill for highlighted card */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">{plan.name}</h2>
                    {!plan.highlight && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-gray-100 pb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      / month {isAnnual && price > 0 ? "(billed annually)" : ""}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                      What's included:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600">
                          <svg
                            className={`h-5 w-5 shrink-0 ${
                              plan.highlight ? "text-blue-600" : "text-emerald-500"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href={plan.ctaHref}
                    className={`flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ${
                      plan.highlight
                        ? "bg-gray-950 text-white shadow-md hover:bg-gray-800 hover:shadow-lg"
                        : "border border-gray-200 bg-white text-gray-900 shadow-xs hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 sm:mt-20 rounded-2xl border border-gray-100 bg-gray-50/60 p-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs sm:text-sm font-medium text-gray-600">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              14-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 14 14" />
              </svg>
              Cancel Anytime
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              99.99% Uptime Guarantee
            </span>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Got Questions?
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Everything you need to know about our plans, billing, and trial periods.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-sm transition"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
