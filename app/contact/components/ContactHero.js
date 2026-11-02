"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "Sales",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactChannels = [
    {
      title: "General Inquiries & Support",
      description: "Need help with your deployment, billing, or platform questions?",
      contact: "hello@nextpro.studio",
      subtext: "Average response time: < 2 hours",
      icon: (
        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      bg: "bg-blue-50",
    },
    {
      title: "Enterprise Sales & Architecture",
      description: "Discuss custom VPCs, high-throughput SLAs, or custom migrations.",
      contact: "sales@nextpro.studio",
      subtext: "+1 (555) 019-2834 (Toll-free)",
      icon: (
        <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      bg: "bg-indigo-50",
    },
    {
      title: "Global Headquarters",
      description: "Stop by our collaborative workspace or send direct correspondence.",
      contact: "548 Market St, Suite 3200",
      subtext: "San Francisco, CA 94104",
      icon: (
        <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      bg: "bg-emerald-50",
    },
  ];

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
        {/* Header Hero Intro */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-gray-900">Get In Touch</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">We're here to help</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            Let's talk about your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              next big project.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Have questions about our cloud infrastructure, enterprise pricing, or custom engineering solutions? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Contact Channels & Info (5 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Live Operational Status Pill */}
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-gray-50/70 p-4 shadow-xs">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="text-xs font-semibold text-gray-900">All Systems Operational</p>
                <p className="text-[11px] text-gray-500">Live engineers on standby globally</p>
              </div>
            </div>

            {/* Channels Cards */}
            {contactChannels.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} shadow-xs`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    <p className="mt-2.5 font-mono text-sm font-semibold text-gray-900">{item.contact}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social / Developer Links */}
            <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Join our developer community
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                  GitHub ↗
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                  Discord Community ↗
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                  X / Twitter ↗
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-gray-200/40 lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-950">
                  Message sent successfully!
                </h3>
                <p className="mt-2.5 max-w-sm text-sm text-gray-600 leading-relaxed">
                  Thank you for reaching out. One of our solution architects will review your inquiry and get back to you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full bg-gray-950 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
                    Send a direct message
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    Fill out the form below and we'll connect you with the right specialist.
                  </p>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
                  />
                </div>

                {/* Inquiry Type Radio Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Sales", "Support", "Architecture Review", "Partnership"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 ${
                          formData.inquiryType === type
                            ? "bg-gray-950 text-white shadow-xs"
                            : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, team scale, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 text-sm font-semibold text-white shadow-md shadow-gray-900/10 transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
                >
                  <span>Send Inquiry</span>
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
                </button>

                <p className="text-center text-[11px] text-gray-400">
                  By submitting, you agree to our privacy policy. We will never share or sell your data.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Quick Calendar Scheduling Strip */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-gray-100 bg-gray-50/80 p-8 text-center sm:p-10">
          <div className="mx-auto max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
              Prefer an instant face-to-face video chat?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Skip the email thread and schedule an immediate 15-minute engineering intro with a principal cloud architect.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/services"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-gray-800 transition"
              >
                Schedule Video Call
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
