"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const isDashboard = pathName === "/dashboard"

  const navItems = [
    {
      title: "Halal/Haram Checker",
      path: "/halal-scan",
    },
    { title: "Syariah Chatbot", path: "/chatbot" },
    {
      title: "Gharar & Maysir Checker",
      path: "/gharar-maysir",
    },
  ];

  return (
    <>
      <nav
        aria-label="Global"
        className="flex min-w-screen items-center justify-between px-10 py-4 z-50 shadow-md bg-white fixed"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ijtihad</span>
            <div className="flex items-center bg-gradient-primary bg-clip-text">
              <h1 className="max-lg:text-2xl text-4xl font-semibold text-transparent">
                Ijtihad
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => {
              const modal = document.getElementById(
                "mobile-menu"
              ) as HTMLDialogElement;
              modal?.showModal();
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
              aria-hidden="true"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16">
          {navItems.map((item, idx) => {
            const isActive = item.path === pathName;
            return (
              <Link
                key={idx}
                href={item.path}
                className={`text-xl font-semibold ${
                  isActive ? "text-sandy-soil-500" : "text-black"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/dashboard" className="text-sm/6 font-semibold">
            <svg
              width="39"
              height="50"
              viewBox="0 0 39 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 42.7787C2 36.746 6.24331 31.6074 12.0101 30.6566L12.5295 30.571C17.1473 29.8097 21.8527 29.8097 26.4704 30.571L26.9899 30.6566C32.7567 31.6074 37 36.746 37 42.7787C37 45.3862 34.9538 47.5 32.4297 47.5H6.57032C4.0462 47.5 2 45.3862 2 42.7787Z"
                stroke={`${isDashboard ? "#e7b767" : "black"}`}
                strokeWidth="3.75"
              />
              <path
                d="M29.7084 12.3438C29.7084 17.7803 25.138 22.1875 19.5001 22.1875C13.8621 22.1875 9.29172 17.7803 9.29172 12.3438C9.29172 6.9072 13.8621 2.5 19.5001 2.5C25.138 2.5 29.7084 6.9072 29.7084 12.3438Z"
                stroke={`${isDashboard ? "#e7b767" : "black"}`}
                strokeWidth="3.75"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
        <div tabIndex={0} className="fixed inset-0 focus:outline-none">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Ijtihad</span>
                <Image src="/logo.svg" alt="icon" width={40} height={40} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => {
                  const modal = document.getElementById(
                    "mobile-menu"
                  ) as HTMLDialogElement;
                  modal?.close();
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-2">
                  <Link
                    href="/halal-scan"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black"
                  >
                    Halal/Haram Checker
                  </Link>
                  <Link
                    href="/chatbot"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black"
                  >
                    Syariah Chatbot
                  </Link>
                  <Link
                    href="/gharar-maysir"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black"
                  >
                    Gharar & Maysir Checker
                  </Link>
                </div>
                <div className="py-2">
                  <Link
                    href="/dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold"
                  >
                    <svg
                      width="39"
                      height="50"
                      viewBox="0 0 39 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 42.7787C2 36.746 6.24331 31.6074 12.0101 30.6566L12.5295 30.571C17.1473 29.8097 21.8527 29.8097 26.4704 30.571L26.9899 30.6566C32.7567 31.6074 37 36.746 37 42.7787C37 45.3862 34.9538 47.5 32.4297 47.5H6.57032C4.0462 47.5 2 45.3862 2 42.7787Z"
                        stroke="black"
                        strokeWidth="3.75"
                      />
                      <path
                        d="M29.7084 12.3438C29.7084 17.7803 25.138 22.1875 19.5001 22.1875C13.8621 22.1875 9.29172 17.7803 9.29172 12.3438C9.29172 6.9072 13.8621 2.5 19.5001 2.5C25.138 2.5 29.7084 6.9072 29.7084 12.3438Z"
                        stroke="black"
                        strokeWidth="3.75"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
