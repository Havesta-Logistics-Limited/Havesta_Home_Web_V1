import "./Waitlist.css";
import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#005231,#273F2B)] p-8 relative overflow-hidden">
      {/* Toaster (global toast container) */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            margin: "15px ",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "0.9rem",
          },
          success: {
            style: {
              background: "#dcfce7", // Tailwind green-100
              color: "#065f46", // Tailwind green-900
              border: "1px solid #4ade80", // Tailwind green-400
            },
          },
          error: {
            style: {
              background: "#fee2e2", // Tailwind red-100
              color: "#991b1b", // Tailwind red-900
              border: "1px solid #f87171", // Tailwind red-400
            },
          },
        }}
      />

      {/* Floating Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 left-32 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <Leaf1 />
        </div>
        <div
          className="absolute bottom-10 left-40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <Leaf2 />
        </div>
        <div
          className="absolute top-24 right-96 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        >
          <Leaf3 />
        </div>
        <div
          className="absolute bottom-60 right-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <Leaf4 />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-1">
        <Logo />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
            Get Notified When We&apos;re launching
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
              className="w-[80%] bg-[#78EB54] m-auto text-green-900 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#78EB54] flex items-center justify-center gap-2"
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

            {/* Social Media Icons (moved below button) */}
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
      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-green-200 text-sm">
          © Copyright 2025. All Rights Reserved
        </p>
      </footer>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 right-6 z-10">
        <div className="w-8 h-12 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}

      <div className="absolute bottom-6 right-6 z-10">
        <div className="w-8 h-12 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
