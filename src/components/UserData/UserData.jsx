import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { useGetUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import imageNotFound from '../../data/img/no-image.webp';
import { SpinnerFixed, UserDataItem } from 'components';
import { orderUserFields } from 'constants/constants';
import { handleUploadFile } from 'helpers';
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

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [isCancelEdit, setIsCancelEdit] = useState(false);
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
    const id = e.currentTarget.id;
    setIsShowForm(id);
    setIsEditBtnDisabled(true);

    setIsCancelEdit(true);
    window.addEventListener('keydown', handleKeyDown);
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
      setAvatar();
      refetch();
    }
  };

  const handleKeyDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleCardWrapper = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onClose = () => {
    setIsShowForm('');
    setIsEditBtnDisabled(false);
    setIsCancelEdit(false);
    window.removeEventListener('keydown', handleKeyDown);
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <UserCardWrapper onClick={handleCardWrapper}>
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
                  disabled={isEditBtnDisabled}
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
              isEditBtnDisabled={isEditBtnDisabled}
              allUserData={userData}
              setIsShowForm={setIsShowForm}
              setIsEditBtnDisabled={setIsEditBtnDisabled}
              isCancelEdit={isCancelEdit}
            />
          ))}
        </UserDataList>
      </UserCardWrapper>
      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
