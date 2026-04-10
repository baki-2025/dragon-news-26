import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { userLogin, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");
        userLogin(email, password)
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => navigate("/"))
            .catch(err => setError(err.message));
    };

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(() => navigate("/"))
            .catch(err => setError(err.message));
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        
                        <div className="divider">OR</div>
                        <div className="flex flex-col gap-2">
                            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline">
                                Login with Google
                            </button>
                            <button onClick={handleGithubLogin} type="button" className="btn btn-outline">
                                Login with Github
                            </button>
                        </div>

                        <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary' to="/auth/register"> Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;