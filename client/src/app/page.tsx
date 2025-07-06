import Link from "next/link";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, Phone, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-text font-burnr" style={{
      backgroundImage: "linear-gradient(135deg, #e5f2ff, #fff, #e6ccff)"
    }}>
      {/* Sticky Header */}
      <Header />

      {/* Main content */}
      <section className="flex flex-col items-center text-center px-4 py-16">
        <div className="">
          <h1 className="text-5xl font-light text-text">Temporary</h1>
          <h1 className="rounded-xl text-6xl font-bold text-primary my-1">Email & Phone</h1>
          <h1 className="text-3xl font-light text-gray-400">Made Simple</h1>
        </div>

        <div className="description my-10">
          <p className="text-lg text-text-muted">Protect your privacy with disposable email addresses and phone numbers. <br /> No registration required, instant access, completely free.</p>
        </div>

        <div className="buttons flex flex-col sm:flex-row gap-6 mt-4">
          {/* Filled Button */}
          <Link href="/temp-email" className="filledButton flex gap-3 bg-primary text-surface px-10 py-3 rounded-xl shadow-lg items-center transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <Mail strokeWidth={1.5} />
            <h1 className="font-normal text-lg">Get a Temp Email</h1>
          </Link>

          {/* Outlined Button */}
          <Link href="/temp-number" className="outlinedButton flex gap-3 border-2 border-primary bg-surface text-primary px-10 py-3 rounded-xl shadow-lg items-center transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <Phone strokeWidth={1.5} />
            <h1 className="font-normal text-lg">Get a Temp Number</h1>
          </Link>
        </div>

        <div className="flex gap-8 mt-20">
          <div className="card1 flex flex-col items-center bg-surface py-10 px-10 rounded-xl shadow-sm">
            <Shield size={48} className="text-primary mb-4"/>
            <h1 className="text-text font-semibold text-lg mb-3">Privacy First</h1>
            <p className="text-text-muted text-base leading-snug">Your real information stays <br />completely private and secure</p>
          </div>
          <div className="card2 flex flex-col items-center bg-surface py-10 px-10 rounded-xl shadow-sm">
            <Clock size={48} className="text-primary mb-4"/>
            <h1 className="text-text font-semibold text-lg mb-3">Instant Access</h1>
            <p className="text-text-muted text-base leading-snug">Get temporary contacts <br />immediately, no waiting or <br /> setup</p>
          </div>
          <div className="card3 flex flex-col items-center bg-surface py-10 px-10 rounded-xl shadow-sm">
            <Mail size={48} className="text-primary mb-4"/>
            <h1 className="text-text font-semibold text-lg mb-3">Privacy First</h1>
            <p className="text-text-muted text-base leading-snug">No hidden costs, premium <br />features, or subscription <br />required.</p>
          </div>
        </div>

        {/* <Footer /> */}
      </section>
    </main>
  );
}
