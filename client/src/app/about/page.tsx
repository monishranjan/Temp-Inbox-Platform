'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-text font-burnr flex flex-col">
      <Header />

      <section className="w-full px-4 py-16 bg-gradient-to-br from-[#e5f2ff] via-white to-[#e6ccff]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">About Burnr</h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mb-16 mt-4">
            Burnr is a privacy-first platform offering disposable email and phone numbers to help you stay anonymous and secure online.
          </p>

          <div className="w-full text-left space-y-12">
            {/* Mission */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🌐 Our Mission</h2>
              <p className="text-text-muted">
                The internet should be a safe place for everyone. Burnr was created to give users a hassle-free way to protect their privacy by using temporary email addresses and phone numbers while signing up on websites, accessing gated content, or avoiding spam.
              </p>
            </div>

            {/* Privacy */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🛡️ Built with Privacy in Mind</h2>
              <p className="text-text-muted">
                We do not ask for your personal information. All email inboxes are temporary and automatically deleted after 24 hours. We do not store your identity, and all messages are discarded permanently. This makes Burnr one of the safest tools for anonymous communication.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🚀 Features</h2>
              <ul className="list-disc list-inside space-y-1 ml-4 text-text-muted">
                <li>Instantly generate temporary email addresses</li>
                <li>View inbox and read emails online</li>
                <li>Automatic deletion of emails after 24 hours</li>
                <li>No registration or sign-up required</li>
                <li>Mobile-friendly interface</li>
              </ul>
            </div>

            {/* Ads */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">📣 Ad-Supported</h2>
              <p className="text-text-muted">
                Burnr is completely free to use. To keep our services free and sustainable, we serve ads through trusted platforms like Google AdSense. We ensure that no intrusive ads interrupt your experience. For more details, please read our{' '}
                <a href="/privacy" className="text-primary underline">
                  Privacy Policy
                </a>.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">📬 Contact Us</h2>
              <p className="text-text-muted">
                For any questions, support, or business inquiries, feel free to reach out to us at{' '}
                <a href="mailto:monishranjan9@gmail.com" className="text-primary underline">
                  monishranjan9@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
