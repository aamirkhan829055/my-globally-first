"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HERO_DASHBOARD_API = "http://localhost:5000/api/hero-dashboard";

// API se data na aaye to yahi dikhega
const DEFAULT_DASHBOARD = {
  url: "app.nextpro.studio/dashboard",
  version: "v2.0-stable",
  pills: [
    { position: "left", title: "Deploy Successful", subtitle: "Latency: 28ms globally", icon: "check", color: "emerald" },
    { position: "right", title: "Speed Score", subtitle: "100/100 Core Web Vitals", icon: "bolt", color: "blue" },
  ],
  stats: [
    { label: "Active Users", value: "128,490", badge: "+28.4%", badgeColor: "emerald", note: "vs. 94,120 last month" },
    { label: "Avg. Response Time", value: "42ms", badge: "4x faster", badgeColor: "blue", note: "Edge network worldwide" },
    { label: "System Uptime", value: "99.99%", badge: "Optimal", badgeColor: "emerald", note: "Zero downtime deployment" },
  ],
  
  chart: {
    title: "Deployment Activity & Traffic",
    subtitle: "Real-time throughput across global nodes",
    status: "Live Streaming",
    bars: [45, 60, 52, 78, 65, 90, 82, 95, 70, 85, 92, 100, 88, 94],
    highlightIndex: 11,
  },
};

// Tailwind ko poore class names chahiye, isliye color -> class ka map
const COLOR_CLASSES = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  red: "bg-red-50 text-red-600",
};

const PILL_POSITION_CLASSES = {
  left: "-left-6 top-1/4",
  right: "-right-6 top-1/3",
};

function PillIcon({ icon }) {
  if (icon === "bolt") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function HomeHero() {
  const [dashboard, setDashboard] = useState(DEFAULT_DASHBOARD);

  useEffect(() => {
    let cancelled = false;

    fetch(HERO_DASHBOARD_API)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !json?.success || !json.data) return;
        const d = json.data;
        setDashboard({
          url: d.url || DEFAULT_DASHBOARD.url,
          version: d.version || DEFAULT_DASHBOARD.version,
          pills: d.pills?.length ? d.pills : DEFAULT_DASHBOARD.pills,
          stats: d.stats?.length ? d.stats : DEFAULT_DASHBOARD.stats,
          chart: { ...DEFAULT_DASHBOARD.chart, ...d.chart },
        });
      })
      .catch((err) => console.warn("Hero dashboard API error:", err));

    return () => {
      cancelled = true;
    };
  }, []);

  const { url, version, pills, stats, chart } = dashboard;
  const bars = chart.bars?.length ? chart.bars : DEFAULT_DASHBOARD.chart.bars;

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
    
      {/* Ambient background light gradients */}
    
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-indigo-200 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Section */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs transition hover:border-gray-300 hover:bg-gray-100/80 cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="font-semibold text-gray-900">NextPro 2.0 is live</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 flex items-center gap-1 font-medium">
              Explore features
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            Build faster. Scale smarter.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Ship with confidence.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
            The all-in-one platform built for modern development teams. Supercharge your workflow with real-time collaboration, edge infrastructure, and beautiful UI components.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              href="/signup"
              className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-950 px-7 text-sm sm:text-base font-semibold text-white shadow-md shadow-gray-900/10 transition-all duration-200 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span>Create your account</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <Link
              href="#"
              className="flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white px-7 text-sm sm:text-base font-semibold text-gray-800 shadow-xs transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-800">
                <svg
                  className="h-3 w-3 fill-current translate-x-0.5"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span>Watch 2-min Demo</span>
            </Link>
          </div>

          {/* Social Proof & Rating */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            {/* User Avatars Stack */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-blue-500 text-white font-semibold text-xs">
                AK
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-indigo-500 text-white font-semibold text-xs">
                RS
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-emerald-500 text-white font-semibold text-xs">
                MR
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-purple-500 text-white font-semibold text-xs">
                SK
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-gray-800 text-white font-semibold text-[10px]">
                +10k
              </div>
            </div>

            {/* Stars & Text */}
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-500">from 1,200+ developer reviews</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive App Mockup Showcase */}
        <div className="relative mt-14 sm:mt-18 lg:mt-20">
          {/* Floating Pills (left / right) - API se */}
          {pills.map((pill, idx) => (
            <div
              key={`${pill.position}-${idx}`}
              className={`hidden lg:flex absolute ${PILL_POSITION_CLASSES[pill.position] || PILL_POSITION_CLASSES.left} z-20 items-center gap-2.5 rounded-2xl border border-gray-200/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-md`}
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${COLOR_CLASSES[pill.color] || COLOR_CLASSES.emerald}`}>
                <PillIcon icon={pill.icon} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{pill.title}</p>
                <p
                  className={`text-[11px] ${
                    pill.position === "right" ? "font-medium text-emerald-600" : "text-gray-500"
                  }`}
                >
                  {pill.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Mock Browser Container */}
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
            {/* Browser Header Bar */}
            <div className="flex h-11 items-center justify-between border-b border-gray-200 bg-gray-50/80 px-4">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              {/* URL Address Pill */}
              <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 shadow-2xs">
                <svg className="h-3 w-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="font-mono text-gray-700">{url}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-xs font-medium text-gray-500 hidden sm:inline">{version}</span>
              </div>
            </div>

            {/* Dashboard Content Inside Mockup */}
            <div className="p-4 sm:p-6 lg:p-8 bg-zinc-50/50">
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat, idx) => (
                  <div key={`${stat.label}-${idx}`} className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500">{stat.label}</span>
                      {stat.badge && (
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                            COLOR_CLASSES[stat.badgeColor] || COLOR_CLASSES.emerald
                          }`}
                        >
                          {stat.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-400">{stat.note}</p>
                  </div>
                ))}
              </div>

              {/* Graphical Activity Preview */}
              <div className="mt-4 rounded-xl border border-gray-200/80 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{chart.title}</h3>
                    <p className="text-xs text-gray-500">{chart.subtitle}</p>
                  </div>
                  {chart.status && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium text-gray-600">{chart.status}</span>
                    </div>
                  )}
                </div>

                {/* Chart Bars - API se */}
                <div className="mt-4 flex items-end gap-1.5 sm:gap-3 h-28 sm:h-36 pt-4">
                  {bars.map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t-sm transition-all duration-300 hover:opacity-80 ${
                          idx === chart.highlightIndex
                            ? "bg-gradient-to-t from-blue-600 to-indigo-600"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Companies Strip */}
        <div className="mt-16 sm:mt-20 border-t border-gray-100 pt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Trusted by modern developers and high-growth teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale transition hover:grayscale-0">
            <div className="flex items-center gap-2 font-bold text-gray-800 text-lg sm:text-xl">
              <span className="h-6 w-6 rounded-md bg-gray-900 text-white flex items-center justify-center text-xs">▲</span> ACME Corp
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-800 text-lg sm:text-xl">
              <span className="h-6 w-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs">◆</span> ApexData
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-800 text-lg sm:text-xl">
              <span className="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">●</span> CloudSync
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-800 text-lg sm:text-xl">
              <span className="h-6 w-6 rounded-md bg-purple-600 text-white flex items-center justify-center text-xs">✦</span> NovaStack
            </div>
          </div>
        </div>

    
      </div>
    
    </section>
  );
}
