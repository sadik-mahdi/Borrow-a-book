import React from 'react';
import Link from 'next/link';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Story',
      description: 'Immerse yourself in captivating narratives and unforgettable characters.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:border-blue-300'
    },
    {
      id: 2,
      name: 'Science',
      description: 'Explore the wonders of the universe and the laws of nature.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:border-emerald-300'
    },
    {
      id: 3,
      name: 'Tech',
      description: 'Stay updated with the latest in technology and programming.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:border-purple-300'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center mb-12 space-y-3">
          <h2 className="font-extrabold text-4xl md:text-5xl text-center text-gray-800">
            Browse by <span className="text-blue-700">Category</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-center text-lg">
            Find exactly what you are looking for by browsing through our extensive collection of categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link href={`/books?category=${category.name.toLowerCase()}`} key={category.id} className="block group">
              <div className={`p-8 rounded-3xl bg-white border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 ${category.hoverColor}`}>
                <div className={`w-20 h-20 rounded-2xl ${category.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.name}</h3>
                <p className="text-gray-500 line-clamp-3">{category.description}</p>
                <div className="mt-6 flex items-center text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Explore Category 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
