import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-white/90 w-4/5 sm:max-w-96 mx-auto text-black sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Don&apos;s Computer <br /> Repair Shop
          </h1>
          <address>Songpa, Seoul</address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:123-4567-8910" className="hover:underline">
            123-4567-8910
          </Link>
        </div>
      </main>
    </div>
  );
}
