import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/User/UserContext";

const ProfileSetting = () => {
  const context = useContext(UserContext);
  const { getUser, editUser, users } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
    // eslint-disable-next-line
  }, []);

  const [formData, setFormData] = useState({
    name: users.name,
    email: users.email,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(formData.name, formData.email);
  };

  return (
    <div className="profileSettingBox padding-24 display displayColumn borderRadius-8">
      <div className="TopBarProfileSetting padding-12">
        <h2>Proifle</h2>
        <p className="profileSettingTopBarP">
          Update your personal information and public profile photo.
        </p>    
      </div>
      <div className="ProfileSettingContext padding-24 display displayColumn gap-12">
        <form action="">
          <div className="nameChangeProfile display gap-8 alignItemsC">
            <label htmlFor="nameChange">Name:</label>
            <input
              type="text"
              className="nameChange profileSettingInput padding-4 borderRadius-8"
              value={formData.name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="emailChangeProfile display gap-8 alignItemsC">
            <label htmlFor="emailChange">Email:</label>
            <input
              type="text"
              className="emailChange profileSettingInput padding-4 borderRadius-8"
              value={formData.email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div>
            <button className="btnOutlineBorder saveChangeBtn padding-8 borderRadius-16" type="submit" onClick={onSubmit}>
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
