import { useEffect, useState } from "react";
import { getProfile } from "../../api/customerApi";

const ViewProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      console.log(data);

      setProfile(data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        Loading Profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-6">
        No Profile Found
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-6">
          Customer Profile
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <span className="font-semibold">
              Customer ID:
            </span>{" "}
            {profile.customerId}
          </div>

          <div>
            <span className="font-semibold">
              Full Name:
            </span>{" "}
            {profile.fullName}
          </div>

          <div>
            <span className="font-semibold">
              Email:
            </span>{" "}
            {profile.email}
          </div>

          <div>
            <span className="font-semibold">
              Mobile:
            </span>{" "}
            {profile.mobileNumber}
          </div>

          <div>
            <span className="font-semibold">
              Date Of Birth:
            </span>{" "}
            {profile.dateOfBirth}
          </div>

          <div>
            <span className="font-semibold">
              Address:
            </span>{" "}
            {profile.address}
          </div>

          <div>
            <span className="font-semibold">
              City:
            </span>{" "}
            {profile.city}
          </div>

          <div>
            <span className="font-semibold">
              State:
            </span>{" "}
            {profile.state}
          </div>

          <div>
            <span className="font-semibold">
              Pin Code:
            </span>{" "}
            {profile.pinCode}
          </div>

          <div>
            <span className="font-semibold">
              Nominee:
            </span>{" "}
            {profile.nomineeName}
          </div>

          <div>
            <span className="font-semibold">
              Relation:
            </span>{" "}
            {profile.nomineeRelation}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewProfile;