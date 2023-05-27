"use client"

import 'styles/globals.css';
import { useRouter } from 'next/navigation';

export function SignUpForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form input values
    const username = event.target.username.value;
    const adminAccessToken = event.target.adminAccessToken.value;
    const password = event.target.password.value;

    // Perform signup logic
    router.push('');
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="adminAccessToken" className="block text-gray-700 font-bold mb-2">
          Admin Access Token:
        </label>
        <input
          type="password"
          id="adminAccessToken"
          className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#2a2e12] hover:bg-[#556347] text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </form>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="m-[10%]">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <SignUpForm />
        </div>
      </div>
    </html>
  );
}
