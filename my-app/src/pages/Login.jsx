import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="left-panel">
          <h1>Welcome Back</h1>
          <p>Sign in to access your dashboard</p>

          <div className="floating-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" // << This is the key!
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <p className="small-text">
            Don't have an account? <a className="signup" href="/signup">Sign up</a>
          </p>
        </div>

        <div className="right-panel">
          <h2>Login to your account</h2>

          <button className="google-btn">
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Continue with Google
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <form>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <i
                  className={`myeye fas ${!showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </button>
            </div>

            <div className="checkbox-container small-black">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember small-text ">Remember me</label>
            </div>

            <button className="submit-btn" type="submit">
              Sign In
            </button>
          </form>

          <p className="small-black">
            By continuing, you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
