import { Spinner, UserDataItem } from 'components';
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
  const [fileError, setFileError] = useState(false);
  const [isShowLoadFile, setIsShowLoadFile] = useState(false);
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const { data, isLoading } = useFetchUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

  if (isLoading) return <Spinner />;

  const fetchData = data?.data?.user;

  const [normalizedData, avatar] = normalizeData(fetchData, ORDER_USER_FIELDS);

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
      setFileError(true);
      return;
    }

    setAvatarData(fileData);
    setFileError(false);

    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onloadend = () => {
      const base64data = reader.result;
      setNewAvatar(base64data);
    };
    console.log(newAvatar);
  };

  const onFileSubmit = async () => {
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
            {!newAvatar && (
              <Avatar
                src={avatar.avatar || imageNotFound}
                alt={avatar || imageNotFound}
              />
            )}
            {newAvatar && (
              <Avatar
                src={newAvatar || imageNotFound}
                alt={avatar || imageNotFound}
              />
            )}
            {fileError && <p>{validationErrMsg.avatar}</p>}
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
                      onClick={e => onFileSubmit(e)}
                    >
                      Confirm
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
