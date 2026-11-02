"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeaturesHero() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Features" },
    { id: "performance", label: "Performance" },
    { id: "security", label: "Security & Auth" },
    { id: "devops", label: "DevOps & CI/CD" },
    { id: "ai", label: "AI & Automation" },
  ];

  const features = [
    {
      category: "performance",
      badge: "Performance",
      badgeColor: "bg-blue-50 text-blue-700 ring-blue-600/20",
      title: "Sub-millisecond Global Edge Network",
      description:
        "Execute code instantly on 300+ edge locations worldwide. Automatic smart routing ensures zero cold starts and sub-20ms latency for every visitor.",
      metric: "⚡ 18ms avg global ping",
      icon: (
        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      iconBg: "bg-blue-50",
    },
    {
      category: "ai",
      badge: "AI Powered",
      badgeColor: "bg-purple-50 text-purple-700 ring-purple-600/20",
      title: "Context-Aware Autonomous AI Copilot",
      description:
        "Intelligent code generation trained specifically on your codebase. Automatically writes unit tests, refactors legacy bottlenecks, and suggests optimal patterns.",
      metric: "✨ 3.8x faster code shipping",
      icon: (
        <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      iconBg: "bg-purple-50",
    },
    {
      category: "security",
      badge: "Security",
      badgeColor: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
      title: "Zero-Trust Security & Vault Access",
      description:
        "SOC2 Type II certified infrastructure. Dynamic role-based access controls, automatic end-to-end secret rotation, and tamper-proof audit trails.",
      metric: "🔒 256-bit AES military encryption",
      icon: (
        <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      iconBg: "bg-emerald-50",
    },
    {
      category: "devops",
      badge: "DevOps",
      badgeColor: "bg-amber-50 text-amber-700 ring-amber-600/20",
      title: "Git Push to Production in Seconds",
      description:
        "Automated build pipelines with instant preview environments for every pull request. One-click instant rollbacks with zero downtime guarantee.",
      metric: "🚀 Atomic zero-downtime rollbacks",
      icon: (
        <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      ),
      iconBg: "bg-amber-50",
    },
    {
      category: "performance",
      badge: "Observability",
      badgeColor: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
      title: "Real-time Telemetry & Deep APM",
      description:
        "Trace every single incoming request from client click to SQL query. Identify performance anomalies and receive proactive alerts before users notice.",
      metric: "📊 100% distributed trace coverage",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      iconBg: "bg-indigo-50",
    },
    {
      category: "devops",
      badge: "Collaboration",
      badgeColor: "bg-sky-50 text-sky-700 ring-sky-600/20",
      title: "Multi-Player Realtime Collaboration",
      description:
        "Live presence, shared previews, and synchronized states across your entire team. Review, inspect, and approve deployments without leaving your browser.",
      metric: "👥 Unlimited team workspaces",
      icon: (
        <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconBg: "bg-sky-50",
    },
  ];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((item) => item.category === activeTab);

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Ambient background light gradients */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-14rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[35deg] bg-gradient-to-tr from-blue-300 via-sky-200 to-indigo-200 opacity-30 sm:left-[calc(50%-25rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero Intro */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-gray-900">NextPro Features</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">Built for High Performance</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              scale without limits.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            A comprehensive suite of cloud edge tools, AI-assisted workflows, and enterprise security architecture designed to empower modern teams.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-gray-950 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                    {feature.icon}
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-6 text-lg sm:text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Metric Pill */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 font-mono">
                  {feature.metric}
                </span>
                <span className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner / Metrics Box */}
        <div className="mt-16 sm:mt-20 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50/80 to-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">99.99%</p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500">Guaranteed SLA Uptime</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">300+</p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500">Edge Points of Presence</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">&lt; 20ms</p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500">Global Average Latency</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">10M+</p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500">Daily Production Requests</p>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-action Strip */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gray-950 px-6 sm:px-10 py-8 text-white shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to supercharge your stack?
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Start building today with free tier or talk to our cloud solutions team.
            </p>
          </div>

          <div className="flex w-full sm:w-auto items-center gap-3">
            <Link
              href="/"
              className="flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
            >
              Get Started Free
            </Link>
            <Link
              href="#"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Contact Sales
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
