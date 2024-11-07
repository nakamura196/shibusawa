// app/page.tsx
import Link from "next/link";
import dates from "@/data/storymap/list.json";

export default function Home() {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        ストーリーマップ
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dates.map((date, i) => (
          <li
            key={i}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 border border-gray-200"
          >
            <Link
              href={`/storymap/${date}`}
              className="block text-xl font-semibold text-center text-blue-600 hover:text-blue-400"
            >
              {date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
