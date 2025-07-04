"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchEmails } from "../../lib/api";

type Email = {
  id: number;
  from: string;
  subject: string;
  preview: string;
};

export default function EmailPage() {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    fetchEmails().then(setEmails);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Choose an Email</h2>
      <ul className="space-y-4">
        {emails.map((email) => (
          <li key={email.id}>
            <Link href={`/email/${email.id}`} className="block p-4 border rounded-md shadow hover:bg-gray-50">
              <div className="font-semibold">{email.subject}</div>
              <div className="text-sm text-gray-500">From: {email.from}</div>
              <p className="text-gray-600 mt-1">{email.preview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
