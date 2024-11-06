// app/StoryMap/[date]/page.tsx
import StoryMap from "@/components/Storymap";
import dates from "@/data/storymap/list.json";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  // 現在の`date`のインデックスを取得
  const currentIndex = dates.indexOf(date);
  const prevDate = currentIndex > 0 ? dates[currentIndex - 1] : null;
  const nextDate =
    currentIndex < dates.length - 1 ? dates[currentIndex + 1] : null;

  return (
    <main>
      {/* アラートメッセージ */}
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 m-6"
        role="alert"
      >
        <p className="font-bold">注意</p>
        <p>
          この情報は機械的に作成されており、誤った内容が含まれている可能性があります。
        </p>
      </div>

      {/* 前後リンク */}
      <div className="flex justify-between m-6">
        {prevDate ? (
          <Link
            href={`/storymap/${prevDate}`}
            className="text-blue-600 hover:text-blue-800"
          >
            &larr; 前の日付 ({prevDate})
          </Link>
        ) : (
          <span />
        )}
        {nextDate ? (
          <Link
            href={`/storymap/${nextDate}`}
            className="text-blue-600 hover:text-blue-800"
          >
            次の日付 ({nextDate}) &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>

      <StoryMap date={date} />
    </main>
  );
}
