import { useState } from "react";
const ProfileCard = ({
  profile,
  editMode,
  setEditMode,
  formData,
  setFormData,
  handleUpdate,
}) => {
  const handleChange = (e) => {
    setFormData({
      ...profile,
      [e.target.name]: e.target.value,
    });
      
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
      <div className="gradient-bg p-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Profile</h2>
        <button
          onClick={() => (editMode ? handleUpdate() : setEditMode(true))}
          className="bg-white text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 transition-all"
        >
          <i className={`fas ${editMode ? "fa-save" : "fa-edit"} mr-1`}></i>
          {editMode ? "Save" : "Edit"}
        </button>
      </div>

      <div className="p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-3">
            <i className="fas fa-user text-purple-600 text-4xl"></i>
          </div>
          {editMode ? (
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="text-xl font-semibold text-center border-b border-gray-300 mb-2"
            />
          ) : (
            <h3 className="text-xl font-semibold text-gray-800">
              {profile.name}
            </h3>
          )}
          <p className="text-purple-600 font-medium">
            Rank: #{profile.rank || "N/A"}
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-gray-500 text-sm">College</p>
            {editMode ? (
              <input
                name="college"
                value={formData.college || ""}
                onChange={handleChange}
                className="w-full border-b border-gray-300"
              />
            ) : (
              <p className="font-medium">{profile.college}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Location</p>
            {editMode ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  name="city"
                  value={formData.city || ""}
                  onChange={handleChange}
                  placeholder="City"
                  className="border-b border-gray-300"
                />
                <input
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                  placeholder="State"
                  className="border-b border-gray-300"
                />
                <input
                  name="country"
                  value={formData.country || ""}
                  onChange={handleChange}
                  placeholder="Country"
                  className="border-b border-gray-300"
                />
              </div>
            ) : (
              <p className="font-medium">
                {[profile.city, profile.state, profile.country]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600 font-medium mb-2">Social Media</p>
          {editMode ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                name="instagram"
                value={formData.instagram || ""}
                onChange={handleChange}
                placeholder="Instagram URL"
                className="border border-gray-300 rounded-md px-3 py-1"
              />
              <input
                name="twitter"
                value={formData.twitter || ""}
                onChange={handleChange}
                placeholder="Twitter URL"
                className="border border-gray-300 rounded-md px-3 py-1"
              />
              <input
                name="linkedin"
                value={formData.linkedin || ""}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="border border-gray-300 rounded-md px-3 py-1"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 mt-2">
              {profile.instagram && (
                <button
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full flex items-center space-x-2 transition"
                >
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </button>
              )}
              {profile.twitter && (
                <button
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 rounded-full flex items-center space-x-2 transition"
                >
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </button>
              )}
              {profile.linkedin && (
                <button
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded-full flex items-center space-x-2 transition"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
