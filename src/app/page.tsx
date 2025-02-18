import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-foreground">Computers for Cause</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Bridging the digital divide, one computer at a time. We refurbish and donate computers to those in need.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">
            Learn More
          </Link>
          <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transform hover:scale-105 transition-transform duration-300">
            Get Involved
          </Link>
        </div>
      </main>
    </div>
  );

}
