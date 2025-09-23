"use client";

import { FC } from "react";
import Link from "next/link";
import { SiGitter, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        <div>
          <h4 className="text-[#ff5e1a] font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#ff5e1a] font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#ff5e1a] font-bold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/business">For Business</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/features">Features</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#ff5e1a] font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex flex-wrap gap-3">
            <Link href="https://twitter.com" target="_blank" className="bg-[#ff5e1a] text-white p-3 rounded-full hover:bg-purple-900 transition">
              <SiGitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="bg-[#ff5e1a] text-white p-3 rounded-full hover:bg-purple-900 transition">
              <SiInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://tiktok.com" target="_blank" className="bg-[#ff5e1a] text-white p-3 rounded-full hover:bg-purple-900 transition">
              <SiTiktok className="w-5 h-5" />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="bg-[#ff5e1a] text-white p-3 rounded-full hover:bg-purple-900 transition">
              <SiYoutube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
