"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getPasswordStrength();

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setSelectedImage(null);
      setImagePreview("");
      setErrorMessage("Please choose an image file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setSelectedImage(null);
      setImagePreview("");
      setErrorMessage("Image size must be 5 MB or less.");
      event.target.value = "";
      return;
    }

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!agreed) {
      setErrorMessage("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const formData = new FormData();
    formData.append("name", fullName.trim());
    formData.append("email", cleanEmail);
    formData.append("phoneNumber", phoneNumber.trim());
    formData.append("password", password);
    if (selectedImage) formData.append("image", selectedImage);

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        if (res.status === 409) {
          setErrorMessage("An account with this email already exists. Please sign in instead.");
        } else {
          setErrorMessage(data.message || "Could not create account. Please try again.");
        }
        return;
      }

      setSuccessMessage("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        router.push(
          `/login?registered=success&email=${encodeURIComponent(cleanEmail)}`
        );
      }, 1200);

    } catch (error) {
      console.error("Registration request failed:", error);
      setErrorMessage("Could not reach the server. Is the backend running on port 5000?");
    } finally {
      setIsLoading(false);
    }
  };

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
              Create your account
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
              Start building with your personalized NextPro credentials
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
            <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-red-50 p-3.5 text-xs sm:text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              <svg className="h-5 w-5 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="signup-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Full name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Aamir Khan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Work email address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="aamir@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label htmlFor="signup-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Phone number
              </label>
              <input
                id="signup-phone"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                placeholder="9876543210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Choose a password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  placeholder="Minimum 6 characters"
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

              {/* Password Strength Indicator */}

              {password && (
                <div className="mt-2">
                  <div className="flex gap-1.5 h-1 w-full">
                    <div className={`flex-1 rounded-full ${strength >= 1 ? "bg-red-500" : "bg-gray-200"}`} />
                    <div className={`flex-1 rounded-full ${strength >= 2 ? "bg-amber-500" : "bg-gray-200"}`} />
                    <div className={`flex-1 rounded-full ${strength >= 3 ? "bg-blue-500" : "bg-gray-200"}`} />
                    <div className={`flex-1 rounded-full ${strength >= 4 ? "bg-emerald-500" : "bg-gray-200"}`} />
                  </div>
                  <p className="mt-1 text-[11px] text-gray-500">
                    {strength <= 1 && "Weak password"}
                    {strength === 2 && "Fair password"}
                    {strength === 3 && "Good password"}
                    {strength >= 4 && "Strong password!"}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="signup-image" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Profile image
              </label>
              <div className="mt-1.5 flex flex-col items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/70 p-4 sm:flex-row">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-blue-600">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Profile image preview"
                      width={64}
                      height={64}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M5 21a7 7 0 0 1 14 0" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-medium text-gray-800">Choose a profile photo</p>
                  <p className="mt-1 text-xs text-gray-500">PNG, JPG, or another image format. Maximum 5 MB.</p>
                  <input
                    id="signup-image"
                    name="image"
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImageChange}
                    className="mt-3 block w-full text-xs text-gray-600 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Terms of Service Checkbox */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-950 focus:ring-gray-950 cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-gray-600 leading-relaxed cursor-pointer">
                I agree to the{" "}
                <Link href="#" className="font-medium text-gray-950 underline hover:text-blue-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-medium text-gray-950 underline hover:text-blue-600">
                  Privacy Policy
                </Link>.
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
                  Creating account...
                </span>
              ) : (
                <>
                  <span>Create Account</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Bottom Switch to Sign In */}
          <p className="mt-8 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition">
              Sign in →
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}
