'use client';

import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { ClipboardCopy, Inbox } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import VideoAdModal from '@/components/VideoAdModal';

type EmailEntry = {
  _id: string;
  email: string;
  messageCount: number;
  lastActive: string;
};

export default function TempEmailPage() {
  const [afterAdAction, setAfterAdAction] = useState<() => void>(() => () => { });
  const [showAd, setShowAd] = useState(false);
  // const [pendingInboxId, setPendingInboxId] = useState<string | null>(null);
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://burnr-backend.onrender.com/api/emails');
        const data: EmailEntry[] = await res.json();
        setEmails(data);
      } catch (err) {
        console.error('❌ Failed to fetch emails:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  // const handleViewInbox = (id: string) => {
  //   setPendingInboxId(id);
  //   setShowAd(true);
  // };


  const toggleReveal = (id: string) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-text font-burnr">
      <Header />

      <section className="w-full px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-text-muted text-xl sm:text-2xl font-normal">Your Temporary</h1>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary">Email Addresses</h1>
          <p className="text-text-muted mt-3 text-base sm:text-lg">
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
            {emails.map(({ _id, email, messageCount, lastActive }) => {
              const isRevealed = revealedIds.includes(_id);
              return (
                <div
                  key={_id}
                  className="bg-surface rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
                >
                  {/* Left side - Email + Buttons */}
                  <div className="w-full sm:w-1/2 flex flex-col gap-3">
                    <h2 className="text-lg sm:text-xl font-medium text-text">Burnr Email</h2>
                    <p className="text-lg text-primary select-all break-all">
                      {isRevealed ? email : maskEmail(email)}
                    </p>

                    {!isRevealed && (
                      <button
                        onClick={() => {
                          setAfterAdAction(() => () => toggleReveal(_id));
                          setShowAd(true);
                        }}
                        className="text-sm text-left text-text-muted hover:underline hover:text-primary "
                      >
                        👁️ Reveal Email
                      </button>
                    )}

                    <button
                      onClick={() => handleCopy(email)}
                      className="bg-primary text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-primary-dark transition w-fit"
                    >
                      <ClipboardCopy size={16} />
                      Copy Email
                    </button>
                  </div>

                  {/* Right side - Stats + Inbox Button */}
                  <div className="w-full sm:w-1/2 flex flex-col gap-2 text-sm text-text-muted text-left sm:text-right">
                    <p>
                      📥 Total Messages:{' '}
                      <span className="font-medium text-text">{messageCount || 0}</span>
                    </p>
                    <p>
                      🕒 Last Activity:{' '}
                      <span className="font-medium text-text">
                        {formatTimeAgo(lastActive)}
                      </span>
                    </p>
                    <div className="mt-2 sm:mt-4">
                      <button
                        onClick={() => {
                          setAfterAdAction(() => () => router.push(`/temp-email/${_id}`));
                          setShowAd(true);
                        }}
                        className="inline-flex items-center gap-2 text-sm px-4 py-2 border border-primary rounded-md text-primary hover:bg-accent hover:text-text transition w-fit"
                      >
                        <Inbox size={16} />
                        View Inbox
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <VideoAdModal
        isOpen={showAd}
        onClose={() => {
          setShowAd(false);
          setAfterAdAction(() => () => { });
        }}
        onComplete={() => {
          afterAdAction(); // ✅ This executes the stored action
          setShowAd(false);
          setAfterAdAction(() => () => { });
        }}
      />


      <Footer />
    </main>
  );
}

// Mask email like ab***yz@domain.com
function maskEmail(email: string): string {
  const [name, domain] = email.split('@');
  if (!name || !domain) return email;
  if (name.length <= 4) return `${name[0] || '*'}***@${domain}`;
  const first = name.slice(0, 2);
  const last = name.slice(-2);
  return `${first}***${last}@${domain}`;
}

// Format ISO date to "2 min ago" etc.
function formatTimeAgo(isoDate: string): string {
  if (!isoDate) return 'N/A';
  const diff = Date.now() - new Date(isoDate).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  return `${Math.floor(hours / 24)} day ago`;
}