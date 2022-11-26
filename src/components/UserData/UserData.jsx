import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsCheckLg } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { useFetchUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import imageNotFound from '../../data/img/no-image.webp';
import { SpinnerFixed, UserDataItem } from 'components';
import {
  orderUserFields,
  validFileExtension,
  validationErrMsg,
} from 'constants/constants';
import {
  UserDataTitle,
  UserCardWrapper,
  AvatarWrapper,
  UserAvatar,
  AvatarForm,
  UserDescriptionWrapper,
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';
import { theme } from 'styles';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState('');
  const [avatar, setAvatar] = useState();
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const {
    data: {
      data: { user: userData },
    },
  } = useFetchUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

  const handleShowForm = e => {
    const id = e.currentTarget.id;
    setIsShowForm(id);
    setIsEditBtnDisabled(true);
  };

  const handleSubmit = async newValue => {
    const oldData = userData[Object.keys(newValue)];
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

  const handleFile = e => {
    const file = e.target.files[0];
    const fileNameSplit = file.name.split('.');
    const isValidFileExtension = validFileExtension.includes(
      fileNameSplit[fileNameSplit.length - 1]
    );

    if (file.size > 1000000) {
      toast.error(validationErrMsg.avatarIsTooLarge);
      setAvatar();
      setAvatarData();
      return;
    }

    if (!isValidFileExtension) {
      toast.error(validationErrMsg.avatarExtensionFailure);
      setAvatar();
      setAvatarData();
      return;
    }

    setAvatarData(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setAvatar(base64data);
    };
  };

  const onCancelSubmit = () => {
    setAvatar();
    setAvatarData();
  };

  const onFileSubmit = async e => {
    e.preventDefault();

    if (isShowForm) return;

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

  const onClose = () => {
    setIsShowForm('');
    setIsEditBtnDisabled(false);
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
                  disabled={isEditBtnDisabled}
                  accept=".png, .jpeg, .jpg, .webp"
                  onChange={e => handleFile(e)}
                />
                <HiCamera size={20} color={theme.colors.accent} />
                Edit photo
              </UploadLabel>
            )}
            {avatarData && (
              <BtnBox>
                <Btn type="button" onClick={() => onCancelSubmit()}>
                  <CloseIcon style={{ fill: 'black' }} />
                </Btn>
                <Btn type="submit">
                  <BsCheckLg />
                </Btn>
              </BtnBox>
            )}
          </AvatarForm>
        </AvatarWrapper>

        <UserDescriptionWrapper>
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
              onClose={onClose}
            />
          ))}
        </UserDescriptionWrapper>
      </UserCardWrapper>
      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
