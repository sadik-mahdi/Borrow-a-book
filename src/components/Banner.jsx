import React from 'react';
import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';

const Banner = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden shadow-2xl group ">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        style={{ backgroundImage: "url('/images/book_banner_bg.png')" }}
      ></div>
      
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-8 lg:px-16 flex flex-col items-start justify-center h-full w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-primary-content text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-lg">
            Welcome to Borrow-Book
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl">
            Find Your <br/>
            <span className="text-primary drop-shadow-lg">Next Read</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow-md">
            Dive into thousands of captivating stories, insightful non-fiction, and timeless classics. Your next great adventure is just a click away.
          </p>
          
          <div className="pt-6">
            <Link 
              href="/allBooks" 
              className="btn btn-primary btn-lg rounded-full border-none hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 px-10 group/btn"
            >
              <span className="text-lg animate__backOutRight">Browse Now</span>
             <FaCircleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;