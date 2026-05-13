'use client';
import React, { useState } from 'react';
import { Mail, Lock, Eye as EyeIcon, EyeOff } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

export default function SignInForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        })

        if (error) {
            console.error(error);
            setErrorMsg(error.message || 'An error occurred during sign in.');
            return;
        }

        console.log("Signin successful:", data);
        router.push('/');
    };

    const handleGoogle = async() => {
            await authClient.signIn.social({
            provider: "google"
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-slate-800">Sign in to Your Account</h1>
                </div>

                {errorMsg && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={onSubmit} className="space-y-4">

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <EyeIcon size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-slate-600 text-sm">
                    Register a new account <a href="/signup" className="text-primary font-semibold hover:underline">Sign Up</a>
                </p>

                <p className='text-center'>Or</p>

                <div>
                    <button onClick={handleGoogle} className='btn text-center w-full'><FaGoogle />Sign in with Google</button>
                </div>

            </div>

            
        </div>
    );
}