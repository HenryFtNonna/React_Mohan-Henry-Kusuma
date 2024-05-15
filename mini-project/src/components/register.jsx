import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Semua kolom harus diisi.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }

    try {
      const response = await axios.post('https://660faf72356b87a55c520ca4.mockapi.io/AkunUser', {
        email,
        password,
      });

      if (response.status === 201) {
        navigate('/login');
      } else {
        setError('Pendaftaran gagal. Silakan coba lagi.');
      }
    } catch (error) {
      setError('Pendaftaran gagal. Silakan coba lagi.');
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">    
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ marginRight: '50px' }}>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Konfirmasi Password</span>
                </label>
                <input type="password" placeholder="Konfirmasi Password" className="input input-bordered" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover"><Link to="/login">sudah mempunyai akun?</Link></a>
              </label>
              {error && <p className="text-error">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
