
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('/pages/Layout/layout.js'), {
  ssr: false,
});

const Title = dynamic(() => import('/pages/Layout/title.js'), {
  ssr: false,
});

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password) {
      setError('Email and password are required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else {
      try {
        const res = await login();
        console.log(res);
        if (res && res.message === 'success') {
          router.push('/profile'); // Adjust the route to match your actual route
        } else {
          setError('User not found');
        }
      } catch (error) {
        console.error(error);
        setError('User not found');
      }
    }
  };

  async function login() {
    try {
      const response = await axios.post('http://localhost:3000/customer/login', {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <Title page="Login" />
      <Layout>
        <div className="mx-auto max-w-md p-6 bg-white border rounded-md shadow-md mt-10 animate-fade-in">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
