"use client";

import Link from "next/link";

// components/Header.js
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold whitespace-nowrap">
          <Link href="/">渋沢栄一伝記資料 可視化サイト</Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/storymap" className="hover:text-blue-200">
            ストーリーマップ
          </Link>
          <Link href="/timeline" className="hover:text-blue-200">
            タイムライン
          </Link>
        </nav>
      </div>
    </header>
  );
}
