import Link from 'next/link'
export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Computers for Cause</h1>
          <div className="flex space-x-4">
            <Link href="/" className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">Home</Link>
            <Link href="/about" className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">About</Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }
