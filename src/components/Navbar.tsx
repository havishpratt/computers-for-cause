import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-300 flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Computers for Cause"
              width={40}
              height={40}
              className="rounded-lg scale-150"
            />
            <span className="text-white text-xl font-bold font">Computers for Cause</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/about" className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">About</Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }
