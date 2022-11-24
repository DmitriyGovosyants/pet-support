import { Spinner, UserDataItem, ValidationError } from 'components';
import {
  UserDataTitle,
  UserCardWrapper,
  UserWrapper,
  AvatarPhotoWrapper,
  AvatarWrapper,
  Avatar,
  AvatarPhotoEditButton,
  UserDescriptionWrapper,
  UploadLabel,
  UploadInput,
  ConfirmBtnAvatar,
} from './UserData.styled';
import { theme } from 'styles';
import { HiCamera } from 'react-icons/hi';
import { useState } from 'react';
import imageNotFound from '../../data/img/no-image.webp';
import { normalizeData } from '../../helpers';
import { ORDER_USER_FIELDS } from '../../constants/constants';
import { useFetchUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { validationErrMsg } from '../../constants/constants';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState('');
  const [newAvatar, setNewAvatar] = useState();
  const [isFileValid, setIsFileValid] = useState(true);
  const [isShowLoadFile, setIsShowLoadFile] = useState(false);
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const { data } = useFetchUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

  const fetchData = data?.data?.user;

  const [normalizedData, { avatar }] = normalizeData(
    fetchData,
    ORDER_USER_FIELDS
  );

  const handleShowForm = e => {
    const id = e.currentTarget.id;
    setIsShowForm(id);
    setIsEditBtnDisabled(true);
  };

  const handleSubmit = async newValue => {
    const oldData = fetchData[Object.keys(newValue)];
    const newData = Object.values(newValue)[0];

    if (oldData !== newData) {
      try {
        await editContact(newValue);
      } catch (error) {
        console.log(error);
      }
    }

    setIsShowForm('');
    setIsEditBtnDisabled(false);
  };
  const handleLoadFileForm = () => {
    setIsShowLoadFile(true);
  };
  const handleFile = e => {
    const fileData = e.target.files[0];

    if (fileData['size'] > 1000000) {
      setIsFileValid(false);
      return;
    }

    setAvatarData(fileData);
    setIsFileValid(true);

    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onloadend = () => {
      const base64data = reader.result;
      setNewAvatar(base64data);
    };
  };

  const onFileSubmit = async () => {
    if (!avatarData) {
      setIsShowLoadFile(false);
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append('avatar', avatarData);
      await editContact(formdata);
    } catch (error) {
      console.log(error);
      setNewAvatar('');
    } finally {
      setIsShowLoadFile(false);
      setAvatarData('');
    }
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <UserCardWrapper>
        <UserWrapper>
          <AvatarWrapper>
            <Avatar
              src={newAvatar || avatar || imageNotFound}
              alt="user-avatar"
              onError={e => {
                e.target.src = imageNotFound;
              }}
            />
            <ValidationError
              message={validationErrMsg.avatar}
              isHidden={isFileValid}
            />
            <AvatarPhotoWrapper>
              {!isShowLoadFile && (
                <AvatarPhotoEditButton
                  type="button"
                  onClick={handleLoadFileForm}
                >
                  <HiCamera size={20} color={theme.colors.accent} />
                  <span>Edit photo</span>
                </AvatarPhotoEditButton>
              )}
              {isShowLoadFile && (
                <div>
                  <form action="" encType="multipart/form-data">
                    <div>
                      <UploadLabel htmlFor="upload-photo">
                        {!avatarData ? 'search...' : avatarData.name}
                      </UploadLabel>
                      <UploadInput
                        type="file"
                        name="photo"
                        id="upload-photo"
                        aria-hidden="true"
                        onChange={e => handleFile(e)}
                      />
                    </div>
                    <ConfirmBtnAvatar
                      type="button"
                      disabled={isEditLoading}
                      onClick={e => onFileSubmit(e)}
                    >
                      {avatarData ? 'Confirm' : 'Close'}
                    </ConfirmBtnAvatar>
                  </form>
                </div>
              )}
            </AvatarPhotoWrapper>
          </AvatarWrapper>

          <UserDescriptionWrapper>
            {normalizedData.map(([title, fieldValue]) => (
              <UserDataItem
                key={title}
                title={title}
                value={fieldValue}
                isShowForm={isShowForm}
                onShowForm={handleShowForm}
                onSubmit={handleSubmit}
                isEditLoading={isEditLoading}
                isEditBtnDisabled={isEditBtnDisabled}
              />
            ))}
          </UserDescriptionWrapper>
        </UserWrapper>
      </UserCardWrapper>
    </>
  );
};
