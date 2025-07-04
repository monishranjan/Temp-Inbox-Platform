import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-6">🕶️ Monish Temp Inbox</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Get temporary emails and phone numbers instantly. No signup needed.
      </p>

      <div className="flex gap-6">
        <Link
          href="/email"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Temp Email
        </Link>
        <Link
          href="/phone"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Temp Phone
        </Link>
      </div>
    </main>
  );
}
