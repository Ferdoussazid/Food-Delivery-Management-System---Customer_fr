import { useState } from 'react';
import Layout from "./Layout/layout";
import Title from "./Layout/title";
import axios from 'axios';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !phone || !address || !status) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        await postData()
        setError("User created successfully");
      } catch (e) {
        setError(e);
      }
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('status', status);

      const response = await axios.post('http://localhost:3000/customer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Title page="Registration" />
      <Layout>
        <h1 className="text-3xl font-semibold mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Name</label>
            <input type="text" name="name" value={name} onChange={handleChangeName} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Email</label>
            <input type="email" name="email" value={email} onChange={handleChangeEmail} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Password</label>
            <input type="password" name="password" value={password} onChange={handleChangePassword} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Confirm Password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Phone</label>
            <input type="number" name="phone" value={phone} onChange={handleChangePhone} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Address</label>
            <input type="address" name="address" value={address} onChange={handleChangeAddress} className="input" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">Status</label>
            <input type="status" name="status" value={status} onChange={handleChangeStatus} className="input" />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Layout>
    </>
  );
}
