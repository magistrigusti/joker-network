import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { usersAPI } from '../../api/api';
import { useParams } from 'react-router-dom';

const ProfileContainer = ({ profile, setUserProfile }) => {
  const { profileId } = useParams();
  const userId = profileId || 1;

  useEffect(() => {
    const fetchProfile = async () => {
      if (!profile) {
        try {
          const response = await usersAPI.getProfile(userId);
          setUserProfile(response.data);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      }
    };

    fetchProfile();
  }, [profile, userId, setUserProfile]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileData,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
