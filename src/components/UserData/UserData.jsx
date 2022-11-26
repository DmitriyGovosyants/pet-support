import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { useGetUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import imageNotFound from '../../data/img/no-image.webp';
import { SpinnerFixed, UserDataItem } from 'components';
import { orderUserFields } from 'constants/constants';
import {
  UserDataTitle,
  UserCardWrapper,
  AvatarWrapper,
  UserAvatar,
  AvatarForm,
  UserDataList,
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';
import { theme } from 'styles';
import { handleUploadFile } from 'helpers';
import { toast } from 'react-toastify';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const {
    data: {
      data: { user: userData },
    },
    refetch,
  } = useGetUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

  const handleShowForm = e => {
    console.log(e.currentTarget);
    const id = e.currentTarget.id;
    setIsShowForm(id);
    setIsEditBtnDisabled(true);
  };

  const handleSubmit = async newValue => {
    try {
      await editContact(newValue).unwrap();
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        toast.error('Invalid email try again');
      }
    }

    setIsShowForm('');
    setIsEditBtnDisabled(false);
    refetch();
  };

  const handleFile = e => {
    const file = e.target.files[0];
    handleUploadFile(file, setAvatar, setAvatarData);
  };

  const onCancelSubmit = () => {
    setAvatar();
    setAvatarData();
  };

  const onFileSubmit = async e => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append('avatar', avatarData);
      await editContact(formdata);
    } catch (error) {
      onCancelSubmit();
      console.log(error);
    } finally {
      setAvatarData();
    }
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <UserCardWrapper>
        <AvatarWrapper>
          <UserAvatar
            src={avatar || userData?.avatarURL || imageNotFound}
            alt="user avatar"
            onError={e => {
              e.target.src = imageNotFound;
            }}
          />
          <AvatarForm action="" onSubmit={onFileSubmit}>
            {!avatarData && (
              <UploadLabel>
                <UploadInput
                  type="file"
                  name="photo"
                  accept=".png, .jpeg, .jpg, .webp"
                  onChange={handleFile}
                />
                <HiCamera size={20} color={theme.colors.accent} />
                Edit photo
              </UploadLabel>
            )}
            {avatarData && (
              <BtnBox>
                <Btn
                  type="button"
                  disabled={isEditLoading}
                  onClick={() => onCancelSubmit()}
                >
                  <CloseIcon style={{ fill: 'black' }} />
                </Btn>
                <Btn type="submit" disabled={isEditLoading}>
                  <BsCheckLg />
                </Btn>
              </BtnBox>
            )}
          </AvatarForm>
        </AvatarWrapper>

        <UserDataList>
          {orderUserFields.map(el => (
            <UserDataItem
              key={el}
              title={el}
              value={userData[el]}
              isShowForm={isShowForm}
              onShowForm={handleShowForm}
              onSubmit={handleSubmit}
              isEditLoading={isEditLoading}
              isEditBtnDisabled={isEditBtnDisabled}
              allUserData={userData}
              setIsShowForm={setIsShowForm}
              setIsEditBtnDisabled={setIsEditBtnDisabled}
            />
          ))}
        </UserDataList>
      </UserCardWrapper>
      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
