'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-10 max-lg:gap-6 justify-center items-center">
        <h2 className="text-4xl max-lg:text-2xl font-semibold text-center">Error</h2>

        <Image
          src="/404.svg"
          alt="404"
          width={300}
          height={300}
          className="max-lg:w-56"
        />

        <h1 className="text-5xl max-lg:text-3xl font-semibold text-center">Page not found</h1>

        <Link href="/">
          <button
            type="button"
            className="flex items-center gap-5 px-10 py-2 rounded-md bg-[#72d3bd] active:bg-[#d8e6e5]"
          >
            <span className="font-semibold text-2xl max-lg:text-lg text-center">Back to home</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
