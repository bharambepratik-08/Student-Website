import React from "react";
import SettingTopBar from "../components/Setting/SettingTopBar";
import SettingNavbar from "../components/Setting/SettingNavbar";

const Setting = () => {
  return (
    <div className="SettingPage">
      <div className="padding-24">
        <SettingTopBar />
      </div>
      <div className="display">
        <SettingNavbar />
      </div>
    </div>
  );
};

export default Setting;
