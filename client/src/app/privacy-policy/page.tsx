'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-text font-burnr flex flex-col">
      <Header />

      <section className="w-full px-4 py-16 bg-gradient-to-br from-[#e5f2ff] via-white to-[#e6ccff]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mb-16 mt-4">
            We value your privacy. This policy outlines how we collect, use, and protect your data on Burnr.
          </p>

          <div className="w-full text-left space-y-10">
            {/* 1. Info Collection */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">What Information We Collect</h2>
              <p className="text-text-muted">
                Burnr does not collect or require any personal information from users. All temporary email addresses and inboxes are anonymous and deleted after 24 hours.
              </p>
            </div>

            {/* 2. How We Use It */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">How We Use Your Data</h2>
              <p className="text-text-muted">
                We do not use or store any personally identifiable data. Messages you receive are stored temporarily and automatically removed after 24 hours.
              </p>
            </div>

            {/* 3. Cookies */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Cookies</h2>
              <p className="text-text-muted">
                We may use cookies to improve user experience and analyze usage trends. These cookies do not store personal data.
              </p>
            </div>

            {/* 4. Third-party Ads */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Third-party Services and Ads</h2>
              <p className="text-text-muted">
                Burnr uses third-party advertising platforms like Google AdSense. These services may use cookies or web beacons to serve ads based on your prior visits to this or other websites.
              </p>
              <p className="text-text-muted">
                You can opt out of personalized advertising by visiting the{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Ads Settings
                </a>.
              </p>
            </div>

            {/* 5. Data Retention */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Data Retention</h2>
              <p className="text-text-muted">
                Emails and related metadata are automatically deleted after 24 hours. We do not retain user activity beyond what is necessary for functionality.
              </p>
            </div>

            {/* 6. Children’s Privacy */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Children’s Privacy</h2>
              <p className="text-text-muted">
                Burnr is not intended for children under 13. We do not knowingly collect information from children.
              </p>
            </div>

            {/* 7. Changes to Policy */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Changes to This Policy</h2>
              <p className="text-text-muted">
                We may update this policy from time to time. All changes will be posted on this page with a revised date.
              </p>
            </div>

            {/* 8. Contact */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Contact</h2>
              <p className="text-text-muted">
                If you have any questions or concerns about this privacy policy, contact us at{" "}
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