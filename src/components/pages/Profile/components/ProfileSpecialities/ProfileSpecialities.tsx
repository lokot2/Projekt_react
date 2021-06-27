import React, { useContext } from 'react';

import ProfileTags from './components/ProfileTags/ProfileTags'
import { ProfileContext } from 'contexts/profile.context';

import { ProfileLabel } from '../../Profile.styles';
import { ProfileSpecialitiesWrapper } from './ProfileSpecialities.styles';

const ProfileSpecialities = () => {
  const { profileTags, removeProfileTag, addProfileTag } = useContext(ProfileContext);

  const handleTagRemove = (tagId: number) => removeProfileTag(tagId);

  const handleTagSave = (value: string, category: string) => addProfileTag(value, category);

  return (
  <ProfileSpecialitiesWrapper>

    <ProfileLabel>Expertise</ProfileLabel>
    <ProfileTags tags={profileTags} category={'expertise'} onTagRemove={handleTagRemove} onTagSave={handleTagSave} />

    <ProfileLabel>Specialities</ProfileLabel>
    <ProfileTags tags={profileTags} category={'specialities'} onTagRemove={handleTagRemove} onTagSave={handleTagSave} />

    <ProfileLabel>Admission to practice law</ProfileLabel>
    <ProfileTags tags={profileTags} category={'admissions'} onTagRemove={handleTagRemove} onTagSave={handleTagSave} />

    <ProfileLabel>Countries</ProfileLabel>
    <ProfileTags tags={profileTags} category={'countries'}  onTagRemove={handleTagRemove} onTagSave={handleTagSave} />

  </ProfileSpecialitiesWrapper>
)};

export default ProfileSpecialities;