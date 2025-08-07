// app/chat/page.tsx (Next.js App Router)

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HalalCheckerModule() {
  return (
    <main className="py-32 px-4 relative overflow-hidden">
      <div className="flex flex-col gap-10 mx-auto max-w-screen px-16 max-lg:px-10">
        <Image
          src="/halal-left.svg"
          alt="bg"
          width={250}
          height={250}
          className="absolute top-0 left-0 -z-10 max-lg:hidden"
        />
        <Image
          src="/halal-right.svg"
          alt="bg"
          width={250}
          height={250}
          className="absolute bottom-0 right-0 -z-10 max-lg:hidden"
        />

        <h1 className="self-stretch text-center justify-start text-black text-2xl font-semibold lg:hidden">
          Halal/Haram Checker
        </h1>
        <p className="w-full text-center justify-start text-black text-xl font-medium lg:hidden">
          Ijtihad adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>

        <div className="flex max-lg:flex-col justify-between gap-5">
          <div className="w-1/2 max-lg:w-full inline-flex flex-col justify-between items-center gap-10">
            <div className="max-lg:w-65 max-lg:h-65 w-80 h-80 bg-zinc-300 rounded-full" />

            <div className="self-stretch flex flex-col justify-start items-start gap-7">
              <div className="self-stretch justify-start text-black text-3xl font-semibold">
                Riwayat
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="self-stretch h-14 px-3 rounded-lg outline outline-2 outline-offset-[-2px] outline-black inline-flex justify-between items-center"
                  >
                    <div className="text-center justify-start text-black text-2xl max-lg:text-lg font-semibold">
                      Nama Produk
                    </div>
                    <div className="text-center justify-start text-black text-2xl max-lg:text-lg font-semibold">
                      {i % 2 === 0 ? 'Terdaftar' : 'Tidak Terdaftar'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 max-lg:w-full flex flex-col justify-evenly max-lg:gap-10 items-center">
            <h1 className="self-stretch text-center justify-start text-black text-5xl font-semibold max-lg:hidden">
              Halal/Haram Checker
            </h1>
            <p className="w-full text-center justify-start text-black text-xl font-medium max-lg:hidden">
              Ijtihad adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>

            <div className="w-3/4 max-lg:w-full h-14 pl-3 pr-2.5 py-2.5 rounded-lg outline outline-2 outline-offset-[-2px] outline-black inline-flex justify-start items-center gap-2.5">
              <input
                type="text"
                placeholder="nama/merk produk"
                className="text-2xl font-semibold px-3 py-2 rounded w-full focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="w-40 h-14 rounded-lg inline-flex justify-center items-center gap-5">
              <Link href="/halal-checker">
                <button
                  type="button"
                  className="flex items-center gap-5 px-14 py-2 rounded-md bg-[#72d3bd] active:bg-[#1a6e6a]"
                >
                  <span className="font-semibold text-2xl">Check</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}