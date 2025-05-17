import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";
import "./login.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${import.meta.env.VITE_BASE_URL}/`,
      },
    });

    if (error) setErrorMsg(error.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (
        error.message.toLowerCase().includes("invalid login credentials") ||
        error.message.toLowerCase().includes("user not found")
      ) {
        // Redirect to signup if user not found
        navigate("/signup");
      } else {
        setErrorMsg(error.message);
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="left-panel">
          <h1>Welcome Back</h1>
          <p>Sign in to access your dashboard</p>
          <div className="floating-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
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
        </div>

        <div className="right-panel">
          <h2>Login to your account</h2>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Continue with Google
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <form onSubmit={handleSubmit} className="myform">
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <i
                  className={`myeye fas ${
                    !showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                />
              </button>
            </div>

            <div className="checkbox-container small-black">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button className="submit-btn" type="submit">
              Sign In
            </button>
          </form>

          <div className="login-link">
            Don't have an account? <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
