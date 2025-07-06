'use client';

import Header from "@/components/Header";
import { useState } from "react";
import { ClipboardCopy, Inbox, Eye } from "lucide-react";

export default function TempEmailPage() {
  const [showFullEmail, setShowFullEmail] = useState(false);
  const email = "ab12xytgkd@burnrmail.com"; // Sample email
  const maskedEmail = maskEmail(email);

  const lastActive = "2 minutes ago"; // This could be dynamic
  const messageCount = 5;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const handleRevealEmail = () => {
    // triggerAd() → show rewarded ad logic here before revealing
    setShowFullEmail(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-text font-burnr">
      <Header />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-4xl text-primary flex flex-col">
            <h1 className="text-text-muted font-normal text-2xl">Your Temporary</h1>
            <h1 className="font-semibold">Email Addresses</h1>
          </div>
          <p className="text-text-muted mt-3 text-lg">Select an email address to view messages or copy to use elsewhere</p>
        </div>

        {/* Email Card */}
        <div className="bg-surface rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-medium mb-1">Burnr Email</h2>
            <p className="text-lg text-primary mb-3 select-all">
              {showFullEmail ? email : maskedEmail}
            </p>

            {!showFullEmail && (
              <button
                onClick={handleRevealEmail}
                className="text-sm text-blue-600 hover:underline mb-2"
              >
                👁️ View full email (Ad)
              </button>
            )}

            <button
              onClick={handleCopy}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-primary-dark transition"
            >
              <ClipboardCopy size={16} />
              Copy Email
            </button>
          </div>

          <div className="text-sm text-text-muted space-y-2">
            <p>📥 Total Messages: <span className="font-medium text-text">{messageCount}</span></p>
            <p>🕒 Last Activity: <span className="font-medium text-text mb-3">{lastActive}</span></p>
            <button className="mt-3 inline-flex items-center gap-2 text-sm px-4 py-2 border border-primary rounded-md text-primary hover:bg-accent hover:text-text transition">
              <Inbox size={16} />
              View Inbox
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Util to mask the email
function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (name.length <= 5) return "***@" + domain;

  const first = name.slice(0, 2);
  const last = name.slice(-2);
  return `${first}***${last}@${domain}`;
}
