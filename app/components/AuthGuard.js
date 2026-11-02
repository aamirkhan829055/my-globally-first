"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const session = localStorage.getItem("nextpro_active_session");
        const isAuthRoute = pathname === "/login" || pathname === "/signup";

        if (!session) {
          // If NOT logged in and trying to access protected route -> Redirect to /login
          if (!isAuthRoute) {
            setAuthorized(false);
            router.replace("/login?message=login_required");
            return;
          }
          setAuthorized(true);
        } else {
          // If already logged in and on /login or /signup -> Redirect to Home /
          if (isAuthRoute) {
            setAuthorized(false);
            router.replace("/");
            return;
          }
          setAuthorized(true);
        }
      } catch (err) {
        setAuthorized(true);
      }
    };

    checkAuth();
    window.addEventListener("auth-changed", checkAuth);
    return () => window.removeEventListener("auth-changed", checkAuth);
  }, [pathname, router]);

  return (
    <>
      {!authorized && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Checking authentication...
            </span>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col min-h-screen ${
          !authorized
            ? "invisible pointer-events-none select-none h-0 overflow-hidden"
            : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
