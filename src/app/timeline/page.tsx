// app/page.tsx
import Link from "next/link";
import years from "@/data/timeline/list.json";
export default function Home() {
  // const years = [1868, 1869, 1870, 1871];

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        タイムライン
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {years.map((year, i) => (
          <li
            key={i}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 border border-gray-200"
          >
            <Link
              href={`/timeline/${year}`}
              className="block text-xl font-semibold text-center text-blue-600 hover:text-blue-400"
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}