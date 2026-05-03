import React from 'react';
import Image from 'next/image';

const AllBooksPage = async () => {
  let allBooks = [];
  try {
    const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' });
    allBooks = await res.json();
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Books Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allBooks.map((book) => (
          <div key={book.id} className="card bg-base-100 shadow-xl border">
            <figure className="relative h-60 w-full">
              <Image 
                src={book.image_url} 
                alt={book.title} 
                fill 
                className="object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <div className="badge badge-secondary mb-2">{book.category}</div>
              <h2 className="card-title text-sm">{book.title}</h2>
              <p className="text-xs text-gray-500">By {book.author}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">Borrow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;