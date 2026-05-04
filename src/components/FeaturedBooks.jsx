import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { BookOpen, Users, Star, Trophy } from 'lucide-react';

export const FeaturedBooks = async () => {
  let books = [];

  try {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    books = JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading data.json:", error);
    books = [];
  }

  const featured = Array.isArray(books) ? books.slice(0, 4) : [];

  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase">
            Top Picks
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-center text-gray-800 drop-shadow-sm">
            Featured <span className="text-blue-700">Books</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-center text-lg">
            Discover our hand-picked selection of the most popular and highly rated books available right now.
          </p>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((f) => (
              <div key={f.id} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200 group overflow-hidden">
                <figure className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image 
                    src={f.image_url}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-3 right-3 badge badge-primary font-semibold shadow-md">
                    {f.category}
                  </div>
                </figure>
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">By {f.author}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{f.description}</p>
                  
                  <div className="card-actions mt-auto justify-between items-center">
                    <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                      Qty: <span className="text-blue-700">{f.available_quantity}</span>
                    </div>
                    <Link href={`/books/${f.id}`} className="btn btn-primary btn-sm px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-base-200 rounded-2xl">
            <p className="text-xl text-gray-500">No featured books available at the moment.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/allBooks" className="btn btn-outline btn-primary btn-lg rounded-full px-10 hover:shadow-lg transition-all">
            View All Books
          </Link>
        </div>
      </div>

      <div className="mt-24 mb-10 container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center group hover:bg-blue-50 transition-colors duration-300">
            <div className="p-4 bg-blue-100 rounded-2xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <BookOpen size={28} />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">12,000+</h4>
            <p className="text-gray-500 font-medium">Total Books</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center group hover:bg-indigo-50 transition-colors duration-300">
            <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Users size={28} />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">5,400+</h4>
            <p className="text-gray-500 font-medium">Active Readers</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center group hover:bg-yellow-50 transition-colors duration-300">
            <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-600 mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-all">
              <Star size={28} />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">4.9/5</h4>
            <p className="text-gray-500 font-medium">User Rating</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center group hover:bg-emerald-50 transition-colors duration-300">
            <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Trophy size={28} />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">98%</h4>
            <p className="text-gray-500 font-medium">Daily Return Rate</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-8 lg:px-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-900 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 gap-10">
            <div className="text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Join Our Reading Community
              </h2>
              <p className="text-blue-100 text-lg">
                Subscribe to our newsletter to receive the latest updates and exclusive book recommendations.
              </p>
            </div>

            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-lg w-full rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button type="submit" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg bg-blue-500 border-none text-white hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks;