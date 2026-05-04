
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCopy } from 'react-icons/fa';

const BookDetailsPage =  async({ params }) => {
  const { id } = await params;
  
  const res = await fetch('https://borrow-book-server.onrender.com/books', { cache: 'no-store' }).catch(() => null);
  let allBooks = [];
  if (res) {
    allBooks = await res.json();
  }

  const book = allBooks.find((b) => b.id == id);

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-base-100">
        <h2 className="text-3xl font-bold text-gray-800">Book Not Found</h2>
        <p className="text-gray-500 mt-2">The book you are looking for does not exist.</p>
        <Link href="/allBooks" className="btn btn-primary mt-6">Go Back to All Books</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left Side: Large Book Cover */}
          <div className="w-full lg:w-5/12 bg-gray-100 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8 lg:p-12">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-100 opacity-50"></div>
            
            <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-lg shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image 
                src={book.image_url} 
                alt={book.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
            <div className="badge badge-primary badge-outline mb-4 font-semibold px-4 py-3">
              {book.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
              {book.title}
            </h1>
            
            <p className="text-xl text-gray-600 font-medium mb-6">
              By <span className="text-blue-600 font-semibold">{book.author}</span>
            </p>

            <div className="divider mb-6"></div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">About this book</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8 flex items-center gap-4 border border-blue-100">
              <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                <FaRegCopy />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Availability</p>
                <p className="text-lg font-bold text-gray-800">
                  <span className={book.available_quantity > 0 ? "text-green-600" : "text-red-500"}>
                    {book.available_quantity} copies left
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-auto ">
              <Link href='/'><button className='border btn btn-primary rounded-2xl hover:touch-pinch-zoom'>
                Borrow this Book
              </button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;