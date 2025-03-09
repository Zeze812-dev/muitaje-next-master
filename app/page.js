import Image from "next/image";
import Link from "next/link";
import main_girls from "@/assets/gif/main_girls.webp";


export default function Home() {
  return (
      <>
        <title>Muiraje</title>
        <div
            className="flex justify-center w-full h-screen sm:items-center pt-10 px-2 bg-center bg-cover bg-gradient-gray">
          <div className="relative w-[800px]">
            <Image unoptimized src={main_girls} className="" alt="" priority/>
            <Link className="absolute top-24 h-full sm:top-36 sm:text-center w-full" href="/catalog">
              <h1 className="font-ztformom text-7xl sm:text-6xl text-shadow text-white shadow-black">Click to join
                the office
                sleepover.</h1>
            </Link>
          </div>

        </div>
      </>
  );
}
