import React, { useState } from "react";
import { auth } from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const check = e.target.check.checked;
    if (!check) {
      console.log("Please accept the terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        sendEmailVerification(auth.currentUser).then(()=> {
          console.log("Email verification sent");
        })
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-20 py-40">
      <h1 className="text-3xl font-bold mb-10">Create an account</h1>
      <form onSubmit={handleRegister} action="" className="flex flex-col gap-4">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              required
              placeholder="Password"
              name="password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <button
              onClick={() => setShow(!show)}
              className="btn btn-xs bg-gray-300 absolute right-1"
            >
              {show ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <label className="label">
          <input type="checkbox" className="checkbox" name="check" />
          Remember me
        </label>
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <div>
        <p>
          Already Have an account?? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
