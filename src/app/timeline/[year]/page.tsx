// app/timeline/[year]/page.tsx
import Timeline from "@/components/Timeline";
import years from "@/data/timeline/list.json";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  // 現在の`year`のインデックスを取得
  const currentIndex = years.indexOf(year);
  const prevYear = currentIndex > 0 ? years[currentIndex - 1] : null;
  const nextYear =
    currentIndex < years.length - 1 ? years[currentIndex + 1] : null;

  return (
    <main>
      {/* 前後リンク */}
      <div className="flex justify-between m-6">
        {prevYear ? (
          <Link
            href={`/timeline/${prevYear}`}
            className="text-blue-600 hover:text-blue-800"
          >
            &larr; 前へ ({prevYear})
          </Link>
        ) : (
          <span />
        )}
        {nextYear ? (
          <Link
            href={`/timeline/${nextYear}`}
            className="text-blue-600 hover:text-blue-800"
          >
            次へ ({nextYear}) &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
      <Timeline year={year} />
    </main>
  );
}
