"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Listen to active auth session in localStorage
  useEffect(() => {
    const updateSession = () => {
      try {
        const session = localStorage.getItem("nextpro_active_session");
        if (session) {
          setCurrentUser(JSON.parse(session));
        } else {
          setCurrentUser(null);
        }
      } catch (e) {
        setCurrentUser(null);
      }
    };

    updateSession();
    window.addEventListener("auth-changed", updateSession);
    window.addEventListener("storage", updateSession);
    return () => {
      window.removeEventListener("auth-changed", updateSession);
      window.removeEventListener("storage", updateSession);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Local session cleanup
    localStorage.removeItem("nextpro_active_session");
    window.dispatchEvent(new Event("auth-changed"));
    setCurrentUser(null);
    setIsLoggingOut(false);
    setMobileMenuOpen(false);
    router.replace("/login");
  };

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll only when mobile menu is actually open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features", badge: "New" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Dynamically check if current page matches link href
  const isRouteActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  // Guard navigation clicks for non-logged in users
  const handleNavClick = (e, item) => {
    if (!currentUser) {
      e.preventDefault();
      alert(`⚠️ Access Denied: Pehle login karein! (${item.name} dekhne ke liye login zaroori hai)`);
      setMobileMenuOpen(false);
      router.push("/login?message=login_required");
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    if (!currentUser) {
      e.preventDefault();
      alert("⚠️ Access Denied: Pehle login karein! Home page par jane ke liye login hona zaroori hai.");
      router.push("/login?message=login_required");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-shadow">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8">
          
          {/* Left: Brand / Logo + Desktop Navigation */}
          <div className="flex items-center gap-4 xl:gap-8 shrink-0">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center gap-2 sm:gap-2.5 shrink-0 select-none"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
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
                <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 leading-tight">
                  Next<span className="text-blue-600">Pro</span>
                </span>
                <span className="text-[10px] -mt-0.5 font-medium uppercase tracking-wider text-gray-400">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible on lg: >= 1024px screens) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => {
                const active = isRouteActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 xl:px-3 text-xs xl:text-sm font-medium transition-all duration-150 ${
                      active
                        ? "text-gray-950 bg-gray-100 font-semibold shadow-2xs"
                        : "text-gray-600 hover:text-gray-950 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] xl:text-[10px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Desktop Actions (>= 1024px only) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Quick Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-lg text-gray-500 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <div className="h-4 w-px bg-gray-200" />

            {/* Authenticated State vs Guest State */}
            {currentUser ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 py-1 pl-1.5 pr-2.5 xl:pr-3 shadow-2xs">
                  <div className="flex h-6 w-6 xl:h-7 xl:w-7 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-[11px] xl:text-xs font-bold text-white uppercase">
                    {currentUser.fullName ? currentUser.fullName.charAt(0) : "U"}
                  </div>
                  <span className="text-xs font-semibold text-gray-800 max-w-[85px] xl:max-w-[120px] truncate">
                    {currentUser.fullName || "User"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 xl:px-3 text-xs font-semibold text-gray-700 shadow-2xs transition hover:border-gray-300 hover:bg-gray-50 hover:text-red-600 disabled:opacity-50"
                >
                  {isLoggingOut ? "Logging out..." : "Log out"}
                </button>
              </div>
            ) : (
              <>
                {/* Sign in */}
                <Link
                  href="/login"
                  className="rounded-lg px-2.5 py-1.5 xl:px-3 text-xs xl:text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-gray-950 hover:bg-gray-50"
                >
                  Sign in
                </Link>

                {/* Primary CTA */}
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-md"
                >
                  <span>Get Started</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
              </>
            )}
          </div>

          {/* Right: Mobile & Tablet Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 py-1 pl-1 pr-2 sm:pr-2.5 shadow-2xs">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-[10px] sm:text-xs font-bold text-white uppercase">
                    {currentUser.fullName ? currentUser.fullName.charAt(0) : "U"}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-800 max-w-[65px] sm:max-w-[100px] truncate">
                    {currentUser.fullName || "User"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="rounded-lg border border-gray-200 bg-white px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-red-600 transition disabled:opacity-50"
                >
                  {isLoggingOut ? "..." : "Log out"}
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-gray-800 transition"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Hamburger / Close Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-2xs transition hover:bg-gray-100 hover:text-gray-950 active:scale-95"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-5 w-5 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-down Drawer Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white border-b border-gray-200 shadow-2xl lg:hidden transition-all duration-200">
          <div className="px-4 pt-4 pb-6 flex flex-col gap-4">

            {/* If logged in: User Profile Card in mobile drawer */}
            {currentUser && (
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50/90 p-3.5 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-bold text-white uppercase text-sm shadow-xs">
                  {currentUser.fullName ? currentUser.fullName.charAt(0) : "U"}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 truncate">
                      {currentUser.fullName || "User"}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.2 text-[10px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                      Active
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 truncate">
                    {currentUser.email}
                  </span>
                </div>
              </div>
            )}

            {/* Quick Search Input Box in drawer */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search pages and features..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50/80 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition"
              />
            </div>

            {/* Navigation Links list */}
            <div className="flex flex-col space-y-1">
              <span className="px-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Navigation
              </span>
              {navigation.map((item) => {
                const active = isRouteActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-gray-100 text-gray-950 font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                    }`}
                  >
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20">
                          {item.badge}
                        </span>
                      )}
                      <svg
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions Drawer Bottom */}
            <div className="border-t border-gray-100 pt-3 flex flex-col gap-2.5">
              {currentUser ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100 transition shadow-2xs disabled:opacity-50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <span>{isLoggingOut ? "Logging out..." : "Log out from account"}</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-800 shadow-2xs hover:bg-gray-50 transition"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
                  >
                    <span>Get Started</span>
                    <svg
                      className="h-4 w-4"
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
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
