import Link from "next/link";

export default function AboutHero() {
  const stats = [
    { value: "150K+", label: "Active Developers Worldwide" },
    { value: "99.99%", label: "Platform SLA Uptime" },
    { value: "120+", label: "Countries Served" },
    { value: "$45M+", label: "Infrastructure Costs Saved" },
  ];

  const values = [
    {
      title: "Velocity with Precision",
      description:
        "Speed is meaningless without reliability. We engineer zero-compromise developer tools and cloud architectures that let you deploy at 10x speed with zero downtime.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      bg: "bg-blue-50",
    },
    {
      title: "Radical Transparency",
      description:
        "Open architectures, zero vendor lock-in, and crystal-clear telemetry. You always maintain 100% control, ownership, and visibility over your systems.",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      bg: "bg-indigo-50",
    },
    {
      title: "Developer-First Obsession",
      description:
        "Crafted by engineers, for engineers. Every API interface, UI component, and CLI command is meticulously tuned for speed, intuition, and sheer developer joy.",
      icon: (
        <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
      bg: "bg-purple-50",
    },
    {
      title: "Global Edge Infrastructure",
      description:
        "Geography should never limit your software. We distribute compute and data across 300+ edge nodes to bring sub-20ms experiences to every user on earth.",
      icon: (
        <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      bg: "bg-emerald-50",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & Chief Architect",
      initials: "AR",
      bg: "bg-gradient-to-br from-blue-600 to-indigo-700",
      bio: "Former Principal Engineer with 14+ years scaling hyperscale distributed systems.",
    },
    {
      name: "Sophia Chen",
      role: "VP of Engineering",
      initials: "SC",
      bg: "bg-gradient-to-br from-purple-600 to-pink-600",
      bio: "Ex-cloud infrastructure lead, passionate about developer productivity and edge computing.",
    },
    {
      name: "Marcus Vance",
      role: "Head of Product & Design",
      initials: "MV",
      bg: "bg-gradient-to-br from-emerald-600 to-teal-700",
      bio: "Design systems veteran focused on crafting world-class digital user experiences.",
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
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[28deg] bg-gradient-to-tr from-blue-300 via-sky-200 to-indigo-200 opacity-25 sm:left-[calc(50%-26rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-gray-900">About NextPro</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">Our Mission & Story</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
            Engineering the future of{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              modern digital software.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            We started NextPro with a simple belief: high-performance engineering shouldn't require complex setups. We empower ambitious teams to build, ship, and scale products without friction.
          </p>
        </div>

        {/* Impact Numbers Grid */}
        <div className="mt-14 sm:mt-18 rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/40 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950">
                  {item.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-500">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              What Drives Us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Our Guiding Principles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              The fundamental core tenets that guide every line of code we write and every product decision we make.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${val.bg} shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                    {val.icon}
                  </div>
                  <h3 className="mt-5 text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Meet The Team
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Led by veteran builders
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              A diverse team of passionate technologists dedicated to elevating the craft of web engineering.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 text-center shadow-xs transition hover:shadow-md"
              >
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white text-xl font-bold shadow-md ${member.bg}`}>
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                  {member.role}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us / Culture CTA */}
        <div className="mt-20 sm:mt-28 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl bg-gray-950 px-6 sm:px-12 py-10 sm:py-14 text-white shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-300">
              🚀 We are hiring worldwide
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Want to shape the next era of tech?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              We're always looking for extraordinary engineers, designers, and thinkers to join our fully distributed global team.
            </p>
          </div>

          <div className="flex w-full lg:w-auto flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <Link
              href="/"
              className="flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
            >
              Explore Open Roles
            </Link>
            <Link
              href="/features"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-700 bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
