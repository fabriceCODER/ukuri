"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Linkedin, Loader2, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirm = confirmPassword.trim();

    // Basic field checks
    if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirm) {
      toast.error("All fields are required.");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (trimmedPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (trimmedPassword !== trimmedConfirm) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Signup successful! Redirecting…");
        router.push("/login");
      } else {
        toast.error(data?.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96"
      >
        <div className="text-center mb-6">
          <User className="w-12 h-12 mx-auto text-blue-500" />
          <h2 className="text-2xl font-bold mt-2">Create an Account</h2>
          <p className="text-gray-500 text-sm">Join us and start your journey!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center bg-blue-500 text-white p-2 rounded-md transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition"
            >
              <Facebook className="mr-2" />
              Sign Up with GitHub
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition"
            >
              <Linkedin className="mr-2" />
              Sign Up with LinkedIn
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
