"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const sessionUser = session?.user;
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signIn");
        },
      },
    });
  };

  const navLinks = (
    <>
      <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
      <li><Link href="/allBooks" className="transition-colors">All Books</Link></li>
      {sessionUser && (
        <li><Link href="/profile" className="hover:text-primary transition-colors">My Profile</Link></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
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
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {!sessionUser ? (
          <div className="flex gap-4">
            <Link href="/signIn" className="btn btn-primary btn-sm px-6">Sign In</Link>
            <Link href="/signup" className="btn btn-primary btn-sm px-6">Sign Up</Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold hidden sm:block">
                {sessionUser.name}
              </span>
              <Avatar size="sm">
                <Avatar.Image 
                  alt={sessionUser.name || "User"} 
                  src={sessionUser.image} 
                />
                <Avatar.Fallback>
                  {sessionUser.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>
            </div>
            
            <Button 
              onPress={handleLogout} 
              variant="solid" 
              size="sm" 
              className="font-bold shadow-md hover:scale-105 transition-transform bg-red-500 text-white"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;