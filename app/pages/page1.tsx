"use client"; // If you're using the App Router

import React from 'react';
import Link from 'next/link';

const Page1 = () => {
  return (
    <main className="relative bg-gray-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Page 2</h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          This is a simple test page to help you verify your Next.js setup.
        </p>
        <div className="text-center">
          <Link href="/">
            <a className="text-blue-600 underline">Go back to Home</a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page1;
