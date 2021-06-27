import React, { useContext } from 'react';

import EditableParagraph from "components/EditableParagraph/EditableParagraph";
import AvatarURL from 'assets/images/avatar-placeholder.jpg';
import { ProfileContext } from 'contexts/profile.context';

import { GridWrapper, ProfileAvatarWrapper, ProfileContactDetails, ProfileGeneralDetails } from './ProfileGeneralInfo.styles';

const ProfileGeneralInfo: React.FC = () => {
  const {name, setName, company, setCompany, city, setCity, email, setEmail, phone, setPhone, workPosition, setWorkPosition} = useContext(ProfileContext);

  const handleNameSave = (value: string) => setName(value);
  const handleCompanySave = (value: string) => setCompany(value);
  const handleCitySave = (value: string) => setCity(value);
  const handleWorkPositionSave = (value: string) => setWorkPosition(value);
  const handleEmailSave = (value: string) => setEmail(value);
  const handlePhoneSave = (value: string) => setPhone(value);

  return (
    <GridWrapper>
    <ProfileAvatarWrapper>
      <img src={AvatarURL}/>
      <a href={"#"}>See profile</a>
    </ProfileAvatarWrapper>
    <ProfileGeneralDetails>
      <strong><EditableParagraph onSave={handleNameSave}>{name}</EditableParagraph></strong>
      <strong><EditableParagraph onSave={handleCompanySave}>{company}</EditableParagraph></strong>
      <br/>
      <EditableParagraph onSave={handleCitySave}>{city}</EditableParagraph>
      <EditableParagraph onSave={handleWorkPositionSave}>{workPosition}</EditableParagraph>
    </ProfileGeneralDetails>
    <ProfileContactDetails>
      <EditableParagraph onSave={handleEmailSave}>{email}</EditableParagraph>
      <EditableParagraph onSave={handlePhoneSave}>{phone}</EditableParagraph>
    </ProfileContactDetails>
  </GridWrapper>
  )
}
export default ProfileGeneralInfo;