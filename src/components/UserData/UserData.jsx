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

export const UserData = () => {
  const [file, setFile] = useState('');
  const [isShowLoadFile, setIsShowLoadFile] = useState(false);
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const { data, isLoading, refetch } = useFetchUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

  if (isLoading) return <Spinner />;

  const fetchData = data?.data?.user;

  const [normalizedData, avatar] = normalizeData(fetchData, ORDER_USER_FIELDS);
  console.log(avatar);

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
        refetch();
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
    const file = e.target.files[0];
    setFile(file);
  };

  const onFileSubmit = async () => {
    try {
      const formdata = new FormData();
      formdata.append('avatar', file);
      await editContact(formdata);
      await refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setIsShowLoadFile(false);
      setFile('');
    }
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <UserCardWrapper>
        <UserWrapper>
          <AvatarWrapper>
            <Avatar
              src={avatar.avatar || imageNotFound}
              alt={avatar || imageNotFound}
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
                        {!file ? 'search...' : file.name}
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
