"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

  const userData = authClient.useSession();
  const users = userData.data?.user;
  console.log(users);

  const [user, setUser] = useState(null);
  const navLinks = (
    <>
      <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
      <li><Link href="/allBooks" className=" transition-colors">All Books</Link></li>
      {user && (
        <li><Link href="/profile" className="hover:text-primary transition-colors">My Profile</Link></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
            BorrowBook
          </span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/allBooks" className="hover:text-primary transition-colors">All Books</Link></li>
          <li><Link href="/profile" className="hover:text-primary transition-colors">My Profile</Link></li>
        </ul>
      </div>

      {!users && <div className="navbar-end gap-5">
        <Link href="/signIn" className="btn btn-primary btn-sm px-6">
          <button>Sign In</button>
        </Link>
        <Link href="/signup" className="btn btn-primary btn-sm px-6">
          <button>Sign Up</button>
        </Link>
      </div>}
      {
        user && <div>
          
        </div>
      }
    </div>
  );
};

export default Navbar;