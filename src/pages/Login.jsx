import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app, auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import bgAdv from '../assets/bgAdv.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login Successfully');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen" 
        style={{ backgroundImage: `url(${bgAdv})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <form
                className="w-full max-w-xl p-8 bg-customBeigeMuda bg-opacity-90 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h2 className="mb-6 text-2xl font-bold text-center text-customMaroon">Login</h2>
                <label htmlFor="email" className="block mb-4">
                    <span className="block text-sm font-semibold text-customMaroon">Email:</span>
                    <input
                        type="email"
                        className="w-full px-4 py-2 mt-1 text-white bg-customMochaBrown border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="password" className="block mb-6">
                    <span className="block text-sm font-semibold text-customMaroon">Password:</span>
                    <input
                        type="password"
                        className="w-full px-4 py-2 mt-1 text-white bg-customMochaBrown border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-white font-semibold bg-customMochaBrown rounded-lg hover:bg-customMaroon focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Login
                </button>
                <p className="mt-4 text-sm text-center text-customMaroon font-semibold">
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-medium text-blue-500 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
