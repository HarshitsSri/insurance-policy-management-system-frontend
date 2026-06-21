import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile,
} from "../../api/customerApi";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    nomineeName: "",
    nomineeRelation: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const profile = await getProfile();

      setFormData({
        dateOfBirth: profile.dateOfBirth || "",
        address: profile.address || "",
        city: profile.city || "",
        state: profile.state || "",
        pinCode: profile.pinCode || "",
        nomineeName: profile.nomineeName || "",
        nomineeRelation: profile.nomineeRelation || "",
      });
    } catch (error) {
      console.log(error);
      alert("Unable to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(formData);

      alert("✅ Profile Updated Successfully");

      navigate("/customer/profile/view");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl">

        <h1 className="text-2xl font-bold mb-6">
          Update Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >
          <div>
            <label>Date Of Birth</label>

            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Address</label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>State</label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Pin Code</label>

            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Nominee Name</label>

            <input
              type="text"
              name="nomineeName"
              value={formData.nomineeName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Nominee Relation</label>

            <input
              type="text"
              name="nomineeRelation"
              value={formData.nomineeRelation}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded mt-4"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;