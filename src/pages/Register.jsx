import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { updateProfile } from "firebase/auth";
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError("");
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/");
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required />
                        
                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL" />
                        
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />
                        
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />
                        
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;