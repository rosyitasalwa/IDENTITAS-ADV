import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import bgAdv from '../assets/bgAdv.jpg';

const SignUp = () => {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            // Create user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            
            // Save additional user data to Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                nama: nama,
                email: email,
                role: 'user', // Default role is user
            });

            console.log("Account Created")
            setNama('')
            setEmail('')
            setPassword('')
            navigate('/')
        } catch(err) {
            setError(err.message);
            console.log(err)
        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen'
    style={{ backgroundImage: `url(${bgAdv})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <form className='w-full max-w-xl p-8 bg-customBeigeMuda bg-opacity-90 rounded-lg shadow-md' onSubmit={handleSubmit}>
            <h2 className='mb-6 text-2xl font-bold text-center text-customMaroon'>Sign Up</h2>
            <label htmlFor="nama" className="block mb-4 font-semibold text-customMaroon">
                Nama:
                <input 
                type="text" 
                className='w-full px-4 py-2 mt-1 text-white bg-customMochaBrown border border-customMaroon rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setNama(e.target.value)}
                value={nama}
                required
                />
            </label>
            <label htmlFor="email" className="block mb-4 font-semibold text-customMaroon">
                Email:
                <input 
                type="email" 
                className='w-full px-4 py-2 mt-1 text-white bg-customMochaBrown border border-customMaroon rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
            </label>
            <label htmlFor="password" className="block mb-4 font-semibold text-customMaroon">
                Password:
                <input 
                type="password" 
                className='w-full px-4 py-2 mt-1 text-white bg-customMochaBrown border border-customMaroon rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
            </label>
            {error && <p className='text-red-500'>{error}</p>}  
            <button 
            type='submit'
            className='w-full px-4 py-2 mt-6 text-white font-semibold bg-customMochaBrown rounded-lg hover:bg-customMaroon focus:outline-none focus:ring-2 focus:ring-blue-400'>
                Sign Up
            </button>
            <p className='mt-6 text-sm text-center text-customMaroon font-semibold'>
                Already Registed? {' '} 
            <Link 
            to="/login" 
            className="font-medium text-blue-500 hover:underline">
                Login
            </Link></p>
        </form>
        </div>
  )
}

export default SignUp