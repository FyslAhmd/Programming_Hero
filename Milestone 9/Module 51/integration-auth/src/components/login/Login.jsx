import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="card-body">
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 border border-white p-4 shrink-0 shadow-2xl shadow-white/30">
          <h1 className="text-3xl text-center font-bold mb-2">Login Now</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="mt-2">
            New to this site?? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
