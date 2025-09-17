import "./Waitlist.css";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
  ExternalLink,
} from "lucide-react";
import { Leaf1, Leaf2, Leaf3, Leaf4, Logo } from "./Assets";
import toast, { Toaster } from "react-hot-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!category) {
      toast.error("Please select a category");
      return;
    }

    setIsLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxM4TChzqrcG8_X4T16t-eVTgTkGqcJexPihwPqw6V5YShoNyMo29Tb1pjwpxYUTioO2A/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, category }),
        }
      );

      toast.success("Thank you! We'll notify you when we launch 🚀");
      setEmail("");
      setCategory("");
    } catch (err) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    "Agriculture",
    "Technology",
    "Sustainability",
    "Investment",
    "Research",
    "Innovation",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#005231,#273F2B)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            margin: "10px",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "0.9rem",
          },
          success: {
            style: {
              background: "#dcfce7",
              color: "#065f46",
              border: "1px solid #4ade80",
            },
          },
          error: {
            style: {
              background: "#fee2e2",
              color: "#991b1b",
              border: "1px solid #f87171",
            },
          },
        }}
      />
      {/* Floating Leaves  */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-20 sm:top-40 left-4 sm:left-16 lg:left-32 animate-bounce scale-50 sm:scale-75 lg:scale-100"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <Leaf1 />
        </div>
        <div
          className="absolute bottom-20 sm:bottom-10 left-6 sm:left-20 lg:left-40 animate-bounce scale-50 sm:scale-75 lg:scale-100"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <Leaf2 />
        </div>
        <div
          className="absolute top-12 sm:top-24 right-4 sm:right-20 lg:right-96 animate-bounce scale-50 sm:scale-75 lg:scale-100"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        >
          <Leaf3 />
        </div>
        <div
          className="absolute bottom-40 sm:bottom-60 right-2 sm:right-10 lg:right-20 animate-bounce scale-50 sm:scale-75 lg:scale-100"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <Leaf4 />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight">
            Get Notified When We&apos;re Launching
          </h1>

          <div className="space-y-6 max-w-md mx-auto">
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select your category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-[80%] m-auto bg-[#78EB54] text-green-900 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#78EB54] flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-green-900 border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                "Notify Me"
              )}
            </button>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center pt-6 text-white">
              <Facebook className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto">
        {/* Donate Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-6">
          {/* Donate Button */}
          <a
            href="https://havesta.com/donation"
            className="group border border-green-600 hover:from-green-300 hover:to-green-400 text-green-400 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:animate-pulse" />
            Support Our Mission
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70" />
          </a>

          {/* Optional Separator for larger screens */}
          <div className="hidden sm:block w-px h-8 bg-green-300 opacity-30"></div>

          {/* Additional Call-to-Action Text */}
          <p className="text-green-200 text-xs sm:text-sm text-center max-w-xs">
            Help us grow sustainable solutions for tomorrow
          </p>
        </div>

        {/* Copyright Footer */}
        <div className="border-t border-green-600 border-opacity-30 bg-black bg-opacity-20">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-green-200 text-xs sm:text-sm text-center sm:text-left">
                © 2025 Havesta. All Rights Reserved
              </p>

              {/* Additional Links (Optional) */}
              <div className="flex gap-4 text-xs sm:text-sm">
                <a
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
