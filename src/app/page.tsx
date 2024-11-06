// "use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
      <div className=" bg-white p-10 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-300">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
          渋沢栄一伝記資料 可視化サイト
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          本サイトは、<em>『渋沢栄一伝記資料』</em>
          のテキストデータを利用した可視化サイトです。
          以下のリンク先で公開されているデータを活用しています。
        </p>
        <ul className="text-left list-disc ml-6 mb-10">
          <li className="text-gray-600">
            <a
              href="https://github.com/shibusawa-dlab/lab1"
              className="text-blue-700 hover:text-blue-500 hover:underline"
            >
              TEIを用いた『渋沢栄一伝記資料』テキストデータの再構築と活用
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Timeline Menu Item */}
          <Link
            href="/timeline"
            className="block bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1 border border-gray-300"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              タイムライン
            </h2>
            <p className="mt-2 text-gray-600">出来事を時系列で探索</p>
          </Link>

          {/* StoryMap Menu Item */}
          <Link
            href="/storymap"
            className="block bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1 border border-gray-300"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              ストーリーマップ
            </h2>
            <p className="mt-2 text-gray-600">日付ごとの地図を表示</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
