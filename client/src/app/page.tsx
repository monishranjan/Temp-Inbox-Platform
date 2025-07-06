'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col text-text font-burnr"
      style={{
        backgroundImage: "linear-gradient(135deg, #e5f2ff, #fff, #e6ccff)"
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-text">Temporary</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Email & Phone</h1>
          <h1 className="text-xl sm:text-2xl font-light text-gray-400">Made Simple</h1>
        </div>

        <p className="text-base sm:text-lg text-text-muted mt-6">
          Protect your privacy with disposable email addresses and phone numbers.
          <br className="hidden sm:block" />
          No registration required, instant access, completely free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/temp-email"
            className="flex gap-3 bg-primary text-surface px-8 py-3 rounded-xl shadow-lg items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Mail strokeWidth={1.5} />
            <span className="text-lg font-medium">Get a Temp Email</span>
          </Link>

          <Link
            href="/temp-number"
            className="flex gap-3 border-2 border-primary bg-surface text-primary px-8 py-3 rounded-xl shadow-lg items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Phone strokeWidth={1.5} />
            <span className="text-lg font-medium">Get a Temp Number</span>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid- lg:grid-cols-3 gap-6 mt-20 w-full max-w-6xl px-4">
          <div className="bg-surface py-10 px-6 sm:px-8 rounded-xl shadow-md text-center flex flex-col items-center">
            <Shield size={48} className="text-primary mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-text">Privacy First</h2>
            <p className="text-text-muted text-sm">
              Your real information stays completely private and secure.
            </p>
          </div>

          <div className="bg-surface py-10 px-6 sm:px-8 rounded-xl shadow-md text-center flex flex-col items-center">
            <Clock size={48} className="text-primary mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-text">Instant Access</h2>
            <p className="text-text-muted text-sm">
              Get temporary contacts immediately. No waiting or setup needed.
            </p>
          </div>

          <div className="bg-surface py-10 px-6 sm:px-8 rounded-xl shadow-md text-center flex flex-col items-center">
            <Mail size={48} className="text-primary mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-text">Completely Free</h2>
            <p className="text-text-muted text-sm">
              No hidden costs, subscriptions, or premium features required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
