'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "@/components/elements/Loader";
import { useParams } from "next/navigation";

interface HalalScanStatus {
  status: string;
  result: {
    product_name?: string;
    ingredients?: string;
    description?: string;
  } | null;
}

export default function ResultPage() {
  const [data, setData] = useState<HalalScanStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams<{ task_id: string }>();

  useEffect(() => {
    if (!params.task_id) return;

    const fetchStatus = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/halal-scan/${params.task_id}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();

    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [params.task_id]);

  if (loading) {
    return <Loader/>;
  }

  if (!data) {
    return <div className="text-center mt-32">Tidak ada data.</div>;
  }

  const { status, result } = data;

  return (
    <main className="py-32 px-4 relative overflow-hidden">
      <div className="flex flex-col gap-24 max-lg:gap-16 px-36 max-w-screen max-lg:px-10">
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
        <h1 className="text-5xl text-center font-semibold">Hasil Analisis</h1>

        <div className="flex flex-col gap-10">
          <div className="flex max-lg:flex-col items-center justify-between px-24 max-lg:gap-4">
            <h1 className="text-center text-4xl max-lg:text-2xl font-semibold">
              {result?.product_name ?? "Nama Produk"}
            </h1>
            <div
              className={`flex items-center justify-center py-2 px-10 rounded-lg ${
                status === "completed" && result
                  ? "bg-[#D1F7E8]"
                  : "bg-gray-300"
              }`}
            >
              <h1 className="text-center text-4xl max-lg:text-2xl font-semibold">
                {status === "completed" && result
                  ? "Terdaftar"
                  : status === "processing"
                  ? "Sedang Diproses"
                  : "Tidak Terdaftar"}
              </h1>
            </div>
          </div>

          <div className="border-2 border-black rounded-xl p-14 max-lg:p-8 flex flex-col items-center gap-10">
            <h2 className="text-center">
              Bahan Produk: {result?.ingredients ?? "Tidak tersedia"}
            </h2>
            <p className="text-center">{result?.description ?? ""}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-center font-semibold text-2xl">
            Apakah hasil analisis ini membantu?
          </h2>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-5 px-10 py-1 rounded-md bg-[#72d3bd] active:bg-[#1a6e6a] font-semibold">
              Ya
            </button>
            <button className="flex items-center gap-5 px-10 py-1 rounded-md border-2 bg-white active:bg-[#b2b2b2] border-[#72d3bd] active:border-[#1a6e6a] font-semibold">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
