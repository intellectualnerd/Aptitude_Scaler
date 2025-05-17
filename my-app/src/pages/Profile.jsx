import { useEffect, useState } from "react";
import { supabase } from ".../utils/supabaseClient"; // adjust path as needed
import ProfileCard from "./ProfileCard"; // adjust path

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

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
        console.warn("Profile not found");
        window.location.href = `${import.meta.env.VITE_BASE_URL}/signup`;
        return;
      }

      setProfile(data);
      setFormData(data);
    };

    checkSession();
  }, []);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("profiles")
      .update(formData)
      .eq("id", profile.id);

    if (error) {
      alert("Update failed");
    } else {
      alert("Profile updated");
      setEditMode(false);
      setProfile(formData);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <ProfileCard
        profile={profile}
        editMode={editMode}
        setEditMode={setEditMode}
        formData={formData}
        setFormData={setFormData}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default Profile;
