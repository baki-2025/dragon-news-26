import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault()
    console.log(e.target)
    const form = e.target
    const name = form.name.value
    console.log(name)
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input type="email" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-5'>Already Have An Account ? {""}<Link className='text-secondary' to="/auth/login">Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;