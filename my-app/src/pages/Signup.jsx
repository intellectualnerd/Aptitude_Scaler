import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./signup.css";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    college: "",
    city: "",
    state: "",
    country: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSocialChange = (platform, value) => {
    setFormData((prev) => ({ ...prev, [platform]: value }));
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { email, password } = formData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Check your email for confirmation link.");
      setStep(2);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/signup",
      },
    });
    if (error) setError(error.message);
  };

  const validateForm = () => {
    const { name, college, city, state, country, agreed } = formData;
    if (!name || !college || !city || !state || !country) {
      setError("Please fill in all required fields marked with *.");
      return false;
    }
    if (!agreed) {
      setError("You must agree to the Terms & Conditions.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setLoading(true);
    setError(null);
  
    const {
      name,
      college,
      city,
      state,
      country,
      twitter,
      instagram,
      linkedin,
    } = formData;
  
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
  
    if (userError || !user) {
      setError("User not found. Please sign in again.");
      setLoading(false);
      return;
    }
  
    const { error: insertError } = await supabase.from("profiles").insert([
      {
        id: user.id,
        name,
        college,
        city,
        state,
        country,
        twitter,
        instagram,
        linkedin,
      },
    ]);
  
    setLoading(false);
  
    if (insertError) {
      setError(insertError.message);
    } else {
      alert("Profile created successfully!");
      // You can redirect or reset the form here
      
    window.location.href = "http://localhost:5173/";
    }
  };
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          // ✅ Run your function here after Google sign-in
          setStep(2);
          console.log("User signed in", session.user);
          // Example: fetch user profile, redirect, show message, etc.
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Section */}
        <div className="signup-left">
          <h1>Join Our Community</h1>
          <p>Connect with passionate minds and grow together</p>
          <div className="social-icons">
            <div className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-icon">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="social-icon">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="testimonial">
            "I made some great friends and mentors here!"
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <h2>{step === 1 ? "Step 1: Sign Up" : "Step 2: Your Details"}</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={step === 2 ? handleSubmit : undefined}>
            {step === 1 && (
              <>
                <button className="google-btn" onClick={handleGoogleSignIn}>
                  <img src="https://www.google.com/favicon.ico" alt="Google" />
                  Continue with Google
                </button>

                <div className="divider">
                  <span>OR</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="submit-btn"
                  onClick={handleEmailSignUp}
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Next"}
                </button>

                <div className="login-link">
                  Already have an account? <a href="/login">Login</a>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="college">
                    College/University<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="college"
                    placeholder="Your Institution"
                    value={formData.college}
                    onChange={handleChange}
                  />
                </div>

                <div className="address-row">
                  <div className="form-group">
                    <label htmlFor="city">
                      City<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">
                      State<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">
                      Country<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="social-handles">
                  <div className="form-group">
                    <div className="social-icon-box">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={formData.twitter}
                      onChange={(e) =>
                        handleSocialChange("twitter", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <div className="social-icon-box">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={formData.instagram}
                      onChange={(e) =>
                        handleSocialChange("instagram", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <div className="social-icon-box">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) =>
                        handleSocialChange("linkedin", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="agreed">
                    I agree to the <a href="#">Terms & Conditions</a>
                    <span className="required">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>

                <div className="login-link">
                  Already have an account? <a href="/login">Login</a>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
