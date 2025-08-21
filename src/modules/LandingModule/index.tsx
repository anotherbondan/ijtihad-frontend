import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingModule() {
  const logos = [
    "/halalscan-logo.svg",
    "/chatbot-logo.svg",
    "/contractcheck-logo.svg",
  ];
  return (
    <main className="py-36 px-4">
      <div className="flex flex-col gap-24 items-center justify-center">
        <Image
          src="/home-left.svg"
          alt="bg left"
          width={500}
          height={800}
          className="absolute -z-10 left-0 top-0 h-screen w-auto animate-pulse"
        />
        <Image
          src="/home-right.svg"
          alt="bg right"
          width={500}
          height={800}
          className="absolute -z-10 right-0 top-0 h-screen w-auto animate-pulse"
        />
        <div className="flex flex-col items-center justify-center gap-14 px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-center">
            Selamat datang di Ijtihad!
          </h1>
          <p className="max-w-prose text-center text-xl">
            Pilih layanan yang Anda butuhkan: cek halal produk, analisis dokumen, atau tanya jawab Syariah!
          </p>
          <Link href="/login">
            <Button label="Login" icon="/user.svg" />
          </Link>
        </div>

        <div className="flex max-lg:flex-col mx-auto justify-evenly max-w-screen gap-20 items-center max-lg:justify-center">
          {["Halal/Haram Checker", "Syariah Chatbot", "Contract Checker"].map(
            (title, idx) => (
              <div
                key={idx}
                className="w-80 h-96 p-[1px] rounded-2xl bg-gradient-primary"
              >
                <div className="w-full h-full bg-white rounded-2xl flex flex-col justify-center items-center gap-14">
                  <div className="w-44 h-44">
                    <img
                      src={logos[idx]}
                      alt="logo"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="self-stretch text-center justify-start text-transparent text-3xl font-semibold bg-gradient-primary bg-clip-text">
                    {title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word}
                        {i !== title.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
