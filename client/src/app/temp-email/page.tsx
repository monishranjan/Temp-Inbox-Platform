'use client';

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { ClipboardCopy, Inbox } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TempEmailPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/emails")
      .then(res => res.json())
      .then(data => {
        setEmails(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Failed to fetch emails:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const handleViewInbox = (id: string) => {
    router.push(`/temp-email/${id}`);
  };

  const toggleReveal = (id: string) => {
    setRevealedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-text font-burnr">
      <Header />

      <section className="w-2/4 px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-text-muted font-normal text-2xl">Your Temporary</h1>
          <h1 className="text-4xl font-semibold text-primary">Email Addresses</h1>
          <p className="text-text-muted mt-3 text-lg">
            Select an email address to view messages or copy to use elsewhere.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-text-muted text-lg">⏳ Loading emails...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">
            ❌ Failed to fetch emails. Please try again later.
          </p>
        ) : emails.length === 0 ? (
          <p className="text-center text-text-muted text-lg">No emails found.</p>
        ) : (
          <div className="space-y-6">
            {emails.map((emailObj: any) => {
              const { _id, email, messageCount, lastActive } = emailObj;
              const isRevealed = revealedIds.includes(_id);
              return (
                <div
                  key={_id}
                  className="bg-surface rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                  <div className="flex flex-col items-start">
                    <h2 className="text-xl font-medium mb-1">Burnr Email</h2>
                    <p className="text-lg text-primary mb-2 select-all">
                      {isRevealed ? email : maskEmail(email)}
                    </p>

                    {!isRevealed && (
                      <button
                        onClick={() => toggleReveal(_id)}
                        className="text-base text-text-muted hover:underline hover:text-primary hover:font-medium mb-2"
                      >
                        👁️ Reveal Email
                      </button>
                    )}

                    <button
                      onClick={() => handleCopy(email)}
                      className="bg-primary text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-primary-dark transition"
                    >
                      <ClipboardCopy size={16} />
                      Copy Email
                    </button>
                  </div>

                  <div className="text-sm text-text-muted space-y-2 text-right sm:text-left">
                    <p>
                      📥 Total Messages:{" "}
                      <span className="font-medium text-text">{messageCount || 0}</span>
                    </p>
                    <p>
                      🕒 Last Activity:{" "}
                      <span className="font-medium text-text">
                        {formatTimeAgo(lastActive)}
                      </span>
                    </p>
                    <button
                      onClick={() => handleViewInbox(_id)}
                      className="mt-3 inline-flex items-center gap-2 text-sm px-4 py-2 border border-primary rounded-md text-primary hover:bg-accent hover:text-text transition"
                    >
                      <Inbox size={16} />
                      View Inbox
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

// Mask email like ab***yz@domain.com
function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  if (name.length <= 4) return `${name[0]}***@${domain}`;
  const first = name.slice(0, 2);
  const last = name.slice(-2);
  return `${first}***${last}@${domain}`;
}

// Format ISO date to "2 min ago" etc.
function formatTimeAgo(isoDate: string) {
  if (!isoDate) return "N/A";
  const diff = Date.now() - new Date(isoDate).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  return `${Math.floor(hours / 24)} day ago`;
}
