import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import spongebobImage from './public/images/spongebob.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [warning, setWarning] = useState('');

  useEffect(() => {
    if (localStorage.getItem('redirectAfterLogin')) {
      setWarning('Anda harus login terlebih dahulu');
      localStorage.removeItem('redirectAfterLogin');
    }
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email dan password harus diisi.');
      return;
    }

    // Gunakan variabel lingkungan dari .env
    // const apiUrl = `${import.meta.env.VITE_API_URL}?search=${email}&password=${password}`;

    try {
      const response = await fetch(`https://660faf72356b87a55c520ca4.mockapi.io/AkunUser?search=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok || data.length === 0) {
        throw new Error('Data yang Anda masukkan salah.');
      }
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      document.getElementById('error_modal').showModal();
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={spongebobImage} className="max-w-sm rounded-lg shadow-2xl" style={{ marginLeft: '50px' }} />
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ marginRight: '50px' }}>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {error && <p className="text-error">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {warning && <div className="alert alert-warning">{warning}</div>}
      {/* Modal untuk menampilkan pesan kesalahan */}
      <dialog id="error_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Kesalahan!</h3>
          <p className="py-4">{error}</p>
          <button className="btn" onClick={() => document.getElementById('error_modal').close()}>Tutup</button>
        </div>
      </dialog>
    </div>
  );
}