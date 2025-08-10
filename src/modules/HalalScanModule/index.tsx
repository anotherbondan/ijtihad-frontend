"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HalalScanModule() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Pilih file dulu!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/halal-scan`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Gagal upload file");

      const data = await response.json();
      router.push(`/halal-scan/${data.task_id}`);
    } catch (err) {
      alert((err as Error).message);
    }
  };

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
          Ijtihad adalah Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do
        </p>

        <div className="flex max-lg:flex-col justify-between gap-5">
          <div className="w-1/2 max-lg:w-full inline-flex flex-col justify-between lg:justify-center items-center gap-10">
            <div className="max-lg:w-65 max-lg:h-65 w-80 h-80 p-1" >
              <img src="/halalscan-logo.svg" alt="logo" className="h-full w-auto"/>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-7">
              <div className="self-stretch justify-start text-black text-3xl font-semibold">
                Riwayat
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="self-stretch h-14 px-3 rounded-lg outline-2 outline-offset-[-2px] outline-black inline-flex justify-between items-center"
                  >
                    <div className="text-center justify-start text-black text-2xl max-lg:text-lg font-semibold">
                      Nama Produk
                    </div>
                    <div className="text-center justify-start text-black text-2xl max-lg:text-lg font-semibold">
                      {i % 2 === 0 ? "Terdaftar" : "Tidak Terdaftar"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 max-lg:w-full flex flex-col gap-10 items-center">
            <h1 className="self-stretch text-center justify-start text-black text-5xl font-semibold max-lg:hidden">
              Halal/Haram Checker
            </h1>
            <p className="w-full text-center justify-start text-black text-xl font-medium max-lg:hidden">
              Ijtihad adalah Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do
            </p>

            <label
              htmlFor="photo-upload"
              className="w-3/4 h-46 border-4 border-dashed flex items-center justify-center cursor-pointer"
            >
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />
              <div className="flex flex-col justify-center items-center gap-7">
                <img src="/file.svg" alt="file" className="w-12 h-auto" />
                <h5 className="text-h5 text-Text">
                  {file ? file.name : "Drop photo here"}
                </h5>
              </div>
            </label>

            <h4 className="text-h4">atau</h4>

            <div className="w-3/4 max-lg:w-full h-14 pl-3 pr-2.5 py-2.5 rounded-lg outline-2 outline-offset-[-2px] outline-black inline-flex justify-start items-center gap-2.5">
              <input
                type="text"
                placeholder="nama/merk produk"
                className="text-2xl font-semibold px-3 py-2 rounded w-full focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="w-40 h-14 rounded-lg inline-flex justify-center items-center gap-5">
              <button
                type="button"
                className="flex items-center gap-5 px-14 py-2 rounded-md bg-[#72d3bd] active:bg-[#1a6e6a]"
                onClick={uploadFile}
              >
                <span className="font-semibold text-2xl">Check</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
