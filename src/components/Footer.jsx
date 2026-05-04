import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 py-10 mt-10">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity">
            Borrow-A-Book
          </Link>
          <p className="text-sm opacity-80 max-w-xs leading-relaxed">
            Your friendly neighborhood book borrowing platform. Discover new worlds, share knowledge, and connect with fellow readers.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold tracking-wide uppercase text-base-content/70">Contact Us</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-3 hover:text-primary transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>hello@borrowabook.com</span>
            </li>
            <li className="flex items-start gap-3 hover:text-primary transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3 hover:text-primary transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>123 Library Street, Booktown</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold tracking-wide uppercase text-base-content/70">Follow Us</h3>
          <p className="text-sm opacity-80 leading-relaxed">Stay connected with us on social media for updates and book recommendations.</p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 mt-10 pt-6 pb-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Borrow-A-Book. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;