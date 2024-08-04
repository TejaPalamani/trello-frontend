'use client'; // Correct directive

import { appUrl } from '@/app/components/dummyData';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    //  authentication logic pending
    console.log('Email:', email);
    console.log('Password:', password);

    const userDetails = {
      name,
      email,
      password,
    };

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(`${appUrl}/user/signup`, option);

      if (response.ok) {
        const data = await response.json();
        alert(data.mesg);
        router.push('/user/signin');
      } else {
        const data = await response.json();
        const error = data.error;
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Welcome to <span className="text-purple-500">Workflo</span>!
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 pb-1">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Your name!"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex flex-row justify-between items-center mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                className="border-none focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i onClick={() => setShowPassword(!showPassword)}>icon</i>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <span className="text-blue-500 hover:text-red-600">
            <a href="/user/signin">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
}
