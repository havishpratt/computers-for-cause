import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-md z-0" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover opacity-60 z-0"
      >
        <source src="/montage.mp4" type="video/mp4" />
      </video>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 z-10">
        <h1 className="text-4xl font-bold text-white">Computers for Cause</h1>
        <p className="text-lg mt-4 max-w-2xl text-white">
          Bridging the digital divide, one computer at a time. We refurbish and donate computers to those in need.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/about" className=" bg-blue-600 rounded-lg text-white px-6 py-2 transform hover:scale-105 transition-transform duration-300">
            Learn More
          </Link>
          <Link href="/contact" className="bg-green-600 rounded-lg text-white px-6 py-2 transform hover:scale-105 transition-transform duration-300">
            Get Involved
          </Link>
        </div>
      </main>
    </div>
  );
}
