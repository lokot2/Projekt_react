import React from 'react';

import ProfileGeneralInfo from "./components/ProfileGeneralInfo/ProfileGeneralInfo";
import ProfileSpecialities from "./components/ProfileSpecialities/ProfileSpecialities";
import ProfilePanelInformations from './components/ProfilePanelInformations/ProfilePanelInformations'

const Profile: React.FC = () => (
  <div>
    <ProfileGeneralInfo />
    <ProfileSpecialities />
    <ProfilePanelInformations />
  </div>
);
export default Profile;