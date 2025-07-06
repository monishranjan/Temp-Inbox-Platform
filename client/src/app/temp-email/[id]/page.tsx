'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { MailOpen, ClipboardCopy, ArrowLeft, Copy, RefreshCcw } from 'lucide-react';

export default function InboxPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const [emailData, setEmailData] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInbox = async () => {
    try {
      const res = await fetch(`https://burnr-backend.onrender.com/api/emails/${id}/inbox`);
      const data = await res.json();
      setMessages(data['hydra:member'] || []);
    } catch (err) {
      console.error('Failed to fetch inbox:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    // Get email details
    fetch(`https://burnr-backend.onrender.com/api/emails`)
      .then(res => res.json())
      .then(data => {
        const found = data.find((e: any) => e._id === id);
        setEmailData(found || null);
      });

    fetchInbox();
  }, [id]);

  const handleCopy = () => {
    if (emailData?.email) {
      navigator.clipboard.writeText(emailData.email);
      alert("Email copied to clipboard!");
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchInbox();
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-text font-burnr items-center">
      <Header />

      <section className="w-full max-w-4xl px-4 py-10 space-y-8">
        {/* Back + Refresh */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => router.push('/temp-email')}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Email List
          </button>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 text-sm hover:font-medium text-surface bg-primary rounded-lg px-4 py-2"
          >
            <RefreshCcw size={18} />
            Refresh Emails
          </button>
        </div>

        {/* Inbox Title */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-primary">Inbox</h1>
          <p className="text-text-muted text-lg">
            Messages received for your temporary email.
          </p>

          {emailData?.email && (
            <div className="flex justify-center items-center gap-3 mt-2">
              <span className="text-xl font-medium text-primary">{emailData.email}</span>
              <button
                onClick={handleCopy}
                className="text-text-muted hover:text-primary transition"
              >
                <Copy size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Inbox Messages */}
        {loading ? (
          <p className="text-center text-text-muted">Loading emails...</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-text-muted">No messages found.</p>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-surface p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between gap-6"
              >
                <div>
                  <p className="text-text-muted text-sm mb-1 font-medium">
                    <span className="text-text">{msg.from.address}</span>
                  </p>
                  <h2 className="text-lg font-semibold text-primary mb-4">
                    {msg.subject || '(No Subject)'}
                  </h2>
                  <p className="text-base text-text line-clamp-2">{msg.intro}</p>
                </div>

                <div className="text-sm text-text-muted text-right flex flex-col justify-between items-end">
                  <p className="mb-3">{formatTimeAgo(msg.createdAt)}</p>
                  <button className="flex items-center gap-2 text-sm px-4 py-2 border border-primary rounded-md text-primary hover:bg-accent hover:text-text transition">
                    <MailOpen size={16} />
                    View Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Note */}
        <div className="text-center mt-8 text-sm text-text-muted">
          ⚠️ Emails are automatically deleted after 24 hours.
        </div>
      </section>
    </main>
  );
}

// Utility function for "x min ago"
function formatTimeAgo(isoDate: string) {
  const diff = Date.now() - new Date(isoDate).getTime();
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return 'Just now';
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hr ago`;
  return `${Math.floor(hr / 24)} day ago`;
}
