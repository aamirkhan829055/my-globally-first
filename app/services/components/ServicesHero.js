"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServicesHero() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "development", label: "Software Engineering" },
    { id: "ai", label: "AI & Automation" },
    { id: "security", label: "Security & Audits" },
  ];

  const services = [
    {
      category: "cloud",
      badge: "Cloud & DevOps",
      badgeColor: "bg-blue-50 text-blue-700 ring-blue-600/20",
      title: "Cloud Architecture & Zero-Downtime Migration",
      description:
        "Design, build, and migrate resilient multi-region infrastructure on AWS, GCP, or Azure with automated Terraform IAC and cost governance.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      iconBg: "bg-blue-50",
      features: [
        "Multi-region fault-tolerant setup",
        "Automated Infrastructure-as-Code (Terraform)",
        "Up to 40% cloud infrastructure cost reduction",
      ],
    },
    {
      category: "development",
      badge: "Full-Stack Dev",
      badgeColor: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
      title: "Next.js & Modern Web Application Engineering",
      description:
        "High-performance, edge-rendered web applications with stunning UI/UX, microservices integration, and sub-second page transitions.",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      iconBg: "bg-indigo-50",
      features: [
        "Next.js App Router & React Server Components",
        "Design systems with Tailwind CSS & animations",
        "100/100 Core Web Vitals optimization",
      ],
    },
    {
      category: "ai",
      badge: "Artificial Intelligence",
      badgeColor: "bg-purple-50 text-purple-700 ring-purple-600/20",
      title: "Enterprise AI Agents & LLM Integration",
      description:
        "Custom domain LLMs, Retrieval-Augmented Generation (RAG) pipelines, and intelligent AI agents securely connected to your proprietary data.",
      icon: (
        <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z" />
          <line x1="9.5" y1="9" x2="9.51" y2="9" />
          <line x1="14.5" y1="9" x2="14.51" y2="9" />
        </svg>
      ),
      iconBg: "bg-purple-50",
      features: [
        "Private RAG pipelines with Vector DBs",
        "Autonomous workflow AI agents",
        "Strict enterprise data privacy guarantees",
      ],
    },
    {
      category: "cloud",
      badge: "CI/CD & DevOps",
      badgeColor: "bg-amber-50 text-amber-700 ring-amber-600/20",
      title: "Automated CI/CD & Kubernetes Orchestration",
      description:
        "Streamline release pipelines from Git commit to production. Automated testing, container orchestration, and instant rollback safety nets.",
      icon: (
        <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      iconBg: "bg-amber-50",
      features: [
        "Kubernetes & Docker cluster orchestration",
        "Zero-downtime deployment pipelines",
        "Automated security & dependency audits",
      ],
    },
    {
      category: "security",
      badge: "Security & Trust",
      badgeColor: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
      title: "Cybersecurity, Pen-Testing & SOC2 Compliance",
      description:
        "End-to-end vulnerability assessments, zero-trust network configurations, and rapid SOC2 / ISO27001 readiness roadmaps.",
      icon: (
        <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      iconBg: "bg-emerald-50",
      features: [
        "Automated penetration testing & vulnerability scans",
        "SOC2 Type II & GDPR compliance setup",
        "Dynamic secret vaulting & access management",
      ],
    },
    {
      category: "development",
      badge: "24/7 Managed SRE",
      badgeColor: "bg-sky-50 text-sky-700 ring-sky-600/20",
      title: "24/7 Managed Infrastructure & SRE Support",
      description:
        "Proactive 24/7/365 infrastructure monitoring, anomaly detection, incident response with guaranteed 15-minute emergency SLA.",
      icon: (
        <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      iconBg: "bg-sky-50",
      features: [
        "99.99% system availability SLA",
        "15-minute critical incident response time",
        "Dedicated senior cloud architect on standby",
      ],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Architecture Blueprint",
      description: "Deep dive into your system requirements, technical bottlenecks, and growth roadmap.",
    },
    {
      step: "02",
      title: "Agile Sprint Development",
      description: "Rapid, milestone-driven execution with transparent weekly demos and live staging previews.",
    },
    {
      step: "03",
      title: "Rigorous QA & Security Audit",
      description: "Stress testing, load simulation, and automated vulnerability scanning before launch.",
    },
    {
      step: "04",
      title: "Zero-Downtime Rollout & Support",
      description: "Seamless launch with real-time telemetry, knowledge handover, and 24/7 SRE monitoring.",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Ambient background light gradients */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-12rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-sky-300 via-blue-200 to-indigo-200 opacity-25 sm:left-[calc(50%-28rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header Section */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-gray-900">Engineering & Cloud Services</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">Tailored for Scale</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            World-class solutions to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              architect, scale & ship.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            From modern Next.js development and automated cloud migration to enterprise AI pipelines and round-the-clock SRE, we build systems that never fail.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gray-950 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                    {service.icon}
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-6 text-lg sm:text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <svg className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Request Consultation</span>
                  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How We Deliver / 4-Step Process Section */}
        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Our Methodology
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              How we take your project from idea to scale
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              A transparent, agile workflow focused on velocity, security, and measurable business outcomes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white font-mono font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Free Assessment Consultation Banner */}
        <div
          id="contact"
          className="mt-20 sm:mt-28 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 sm:px-12 py-10 sm:py-14 text-white shadow-2xl"
        >
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-300">
              ✨ Free 30-min Technical Discovery
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Have a complex technical challenge?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              Book a direct consultation with one of our principal cloud architects. We'll evaluate your system architecture and provide an actionable strategy roadmap.
            </p>
          </div>

          <div className="flex w-full lg:w-auto flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <Link
              href="/"
              className="flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/features"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-700 bg-gray-800/80 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Explore Features
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
