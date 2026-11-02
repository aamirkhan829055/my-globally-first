"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Check if redirected right after sign up or redirected due to auth requirement
  useEffect(() => {
    const registered = searchParams.get("registered");
    const prefillEmail = searchParams.get("email");
    const message = searchParams.get("message");

    if (registered === "success") {
      setSuccessMessage("Account created successfully! Please enter your password to sign in.");
      if (prefillEmail) {
        setEmail(prefillEmail);
      }
    } else if (message === "login_required") {
      setErrorMessage("⚠️ Access Denied: Pehle login karein! Please log in first to access the website.");
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    setIsLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    // Verify user with backend login API
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setIsLoading(false);
        setErrorMessage(
          res.status === 401
            ? "Invalid email or password. Please try again."
            : data.message || "Login failed. Please try again."
        );
        return;
      }

      const session = {
        id: data.user.id,
        fullName: data.user.name,
        email: data.user.email,
        loggedInAt: new Date().toISOString(),
      };

      localStorage.setItem("nextpro_active_session", JSON.stringify(session));
      window.dispatchEvent(new Event("auth-changed"));

      setIsLoading(false);
      setSuccessMessage(`Welcome back, ${session.fullName}! Logging in...`);

      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch (err) {
      setIsLoading(false);
      setErrorMessage("Could not reach the server. Is the backend running on port 5000?");
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Card Box */}
      <div className="rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-10 shadow-xl shadow-gray-200/50">
        
        {/* Header & Logo */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
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
          </Link>

          <h1 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950">
            Welcome back
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
            Sign in with your registered email and password
          </p>
        </div>

        {/* Success Banner */}
        {successMessage && (
          <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-emerald-50 p-3.5 text-xs sm:text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <svg className="h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        {/* Error Banner */}
        {errorMessage && (
          <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 text-xs sm:text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            <svg className="h-5 w-5 shrink-0 text-red-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <p>{errorMessage}</p>
              {errorMessage.includes("sign up first") && (
                <Link href="/signup" className="mt-1 inline-block font-semibold text-red-800 underline hover:text-red-950">
                  Go to Sign Up page →
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Email / Password Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
              Registered email address
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Password
              </label>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset instructions have been sent to your email.");
                }}
                className="text-xs font-medium text-blue-600 hover:text-blue-700 transition"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative mt-1.5">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-gray-950 focus:ring-gray-950 cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2 block text-xs font-medium text-gray-600 cursor-pointer">
              Remember me on this browser
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 text-sm font-semibold text-white shadow-md shadow-gray-900/10 transition hover:bg-gray-800 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Verifying account...
              </span>
            ) : (
              <>
                <span>Sign In</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Bottom Switch to Sign Up */}
        <p className="mt-8 text-center text-xs text-gray-500">
          Don't have an account yet?{" "}
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700 transition">
            Sign up for free →
          </Link>
        </p>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8">
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

      <Suspense fallback={<div className="text-sm text-gray-500">Loading login...</div>}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
