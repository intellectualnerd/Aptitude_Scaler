import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const Home = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session || !session.user) {
        window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
        return;
      }

      setProfile(data);
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="home-container">
      <h1>Welcome, {profile.name}!</h1>
      <p>
        <strong>College:</strong> {profile.college}
      </p>
      <p>
        <strong>City:</strong> {profile.city}
      </p>
      <p>
        <strong>State:</strong> {profile.state}
      </p>
      <p>
        <strong>Country:</strong> {profile.country}
      </p>

      <div>
        <h3>Social Links</h3>
        <p>Twitter: {profile.twitter}</p>
        <p>Instagram: {profile.instagram}</p>
        <p>LinkedIn: {profile.linkedin}</p>
      </div>

      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
