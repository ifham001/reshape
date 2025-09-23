"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";



const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  return (
    <header className="pt-10">
      <div className="w-[95%] mx-auto flex items-center justify-between bg-gray-700 rounded-full px-6 py-3 shadow-sm relative">
        <div className="text-3xl font-bold">
          <Link href="/" className="hover:opacity-80 transition">
            <span className="md:hidden text-white">R</span>
            <span className="md:hidden text-[#ff5e1a] font-extrabold">.</span>
            <span className="hidden md:inline text-white">
              Reshape<span className="text-[#ff5e1a] font-extrabold text-4xl">.</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex font-sans items-center gap-6 text-sm text-white">
          <Link href="#" className="hover:text-black transition">Home</Link>
          <Link href="#" className="hover:text-black transition">Tech</Link>
          <Link href="#" className="hover:text-black transition">Marketplace</Link>
          <Link href="#" className="hover:text-black transition">About Us</Link>
          <Link href="#" className="hover:text-black transition">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={()=>{router.push('/contact-us')}} className="px-4 py-3 font-extrabold text-white text-sm bg-[#ff5e1a] rounded-md hover:bg-orange-600 transition">
         Contact
          </button>
        </div>

        <div className="flex md:hidden items-center gap-5">
          <button onClick={()=>{router.push('/contact-us')}} className="px-3 py-2 font-extrabold text-white text-sm bg-[#ff5e1a] rounded-md hover:bg-orange-600 transition">
          Contact
          </button>
          <button
            className="text-[#f5f5f5]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f5f5f5] text-gray-700 rounded-lg shadow-lg mt-3 p-6 flex flex-col gap-4 md:hidden z-50">
            <Link href="#" className="hover:text-black transition border-b border-gray-200 pb-2">Products</Link>
            <Link href="#" className="hover:text-black transition">Templates</Link>
            <Link href="#" className="hover:text-black transition">Marketplace</Link>
            <Link href="#" className="hover:text-black transition">Learn</Link>
            <Link href="#" className="hover:text-black transition">Pricing</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
