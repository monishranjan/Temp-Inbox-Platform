'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-text font-burnr flex flex-col">
      <Header />

      <section className="w-full px-4 py-16 bg-gradient-to-br from-[#e5f2ff] via-white to-[#e6ccff]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Terms & Conditions</h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mb-16 mt-4">
            Please read these terms and conditions carefully before using Burnr.
          </p>

          <div className="w-full text-left space-y-10">
            {/* 1. Acceptance */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Acceptance of Terms</h2>
              <p className="text-text-muted">
                By accessing or using Burnr, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service.
              </p>
            </div>

            {/* 2. Description of Service */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Description of Service</h2>
              <p className="text-text-muted">
                Burnr provides disposable, temporary email and phone numbers to help users maintain privacy and reduce spam.
              </p>
            </div>

            {/* 3. User Responsibility */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">User Responsibilities</h2>
              <p className="text-text-muted">
                You agree not to use Burnr for any illegal activities, spam, or abuse. Burnr is not liable for misuse of the platform.
              </p>
            </div>

            {/* 4. No Guarantee of Delivery */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">No Guarantee of Message Delivery</h2>
              <p className="text-text-muted">
                We do not guarantee that messages sent to Burnr addresses will be received or stored. Messages are auto-deleted after 24 hours.
              </p>
            </div>

            {/* 5. Ads and Revenue */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Advertisements</h2>
              <p className="text-text-muted">
                We display third-party ads to support our free service. Burnr does not endorse the content of ads and is not responsible for third-party services or links.
              </p>
            </div>

            {/* 6. Service Changes */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Changes to the Service</h2>
              <p className="text-text-muted">
                We reserve the right to change or discontinue the service at any time without prior notice.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Limitation of Liability</h2>
              <p className="text-text-muted">
                Burnr is not liable for any direct or indirect damages arising from the use or inability to use the platform.
              </p>
            </div>

            {/* 8. Changes to Terms */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Modifications to Terms</h2>
              <p className="text-text-muted">
                We may revise these Terms at any time. Continued use of Burnr constitutes acceptance of any changes.
              </p>
            </div>

            {/* 9. Contact */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Contact</h2>
              <p className="text-text-muted">
                For any questions or concerns regarding these Terms, contact us at{" "}
                <a
                  href="mailto:monishranjan9@gmail.com"
                  className="text-primary underline"
                >
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
