'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(''); // Add state for email
  const router = useRouter(); // Get router object

  const handleLogin = () => {
    // In a real app, you'd have authentication logic here.
    // For this prototype, we'll just set a flag and username in localStorage.
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', email.split('@')[0]); // Store username (part of email)
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#3b82f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image src="/Gove ease.png" alt="Gove ease logo" width={60} height={60} className="mb-6" />
          <h1 className="text-3xl font-bold mb-2">Sign in to your Account</h1>
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              value={email} // Bind value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image src="/eyeicon.webp" alt="Show password" width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="button" // Change type to button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={handleLogin} // Add onClick handler
          >
            Log In
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to the{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Data Processing Agreement</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
