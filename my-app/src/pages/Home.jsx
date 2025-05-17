import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";

const Home = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session || !session.user) {
        window.location.href = `${import.meta.env.VITE_BASE_URL}/signup`;
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error || !data) {
        console.warn("Profile not found, redirecting to signup...");
        window.location.href = `${import.meta.env.VITE_BASE_URL}/signup`;
        return;
      }

      setProfile(data);
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = `${import.meta.env.VITE_BASE_URL}/signup`;
  };

  return (
    <>
      {!profile ? (
        <p>Loading profile...</p>
      ) : (
        <div className="home-container">
          <h1>Welcome, {profile.name}!</h1>

        </div>
      )}
      
    </>
  );
};

export default Home;
