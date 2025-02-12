import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-600">Computers for a Cause</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl">
          Bridging the digital divide, one computer at a time. We refurbish and donate computers to those in need.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Learn More
          </Link>
          <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
            Get Involved
          </Link>
        </div>
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Computers for a Cause</h1>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/about" className="text-white hover:underline">About</Link>
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
