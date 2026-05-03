"use client";

import React from 'react';

const Newsletter = () => {
  return (
    <div className="py-20 bg-base-200">
      <div className="container mx-auto px-8 lg:px-16 relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-700 to-indigo-900 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 gap-10">
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Join Our Reading Community
            </h2>
            <p className="text-blue-100 text-lg mb-0">
              Subscribe to our newsletter to receive the latest updates, exclusive book recommendations, and special offers straight to your inbox.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input input-bordered input-lg w-full rounded-full shadow-inner bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300" 
                required 
              />
              <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none bg-blue-500 hover:bg-blue-400 text-white">
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-3 text-center sm:text-left">
              We care about your data. Read our <a href="#" className="underline hover:text-white">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
