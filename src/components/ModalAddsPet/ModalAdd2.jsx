import { useState, useEffect } from 'react';
import {
  ModalAdd2Wrap,
  ModalAdd2Title,
  ModalAdd2Coment,
  ModalAdd2Form,
  ModalAdd2FotoWrap,
  ModalAdd2FotoLabel,
  ModalAdd2Input,
  ModalAdd2InputWrap,
  ModalAdd2Img,
  StyledPlusIcon,
  ModalAdd2InputWrapChoise,
  ModalAdd2InputErrorImg,
  ModalAdd2Label,
  ModalAdd2Text,
  ModalAdd2Comments,
  ModalAdd2TextError,
  ModalAdd2ButtonWrap,
  ModalAdd2ButtonCancel,
  ModalAdd2ButtonNext
} from './ModalAdd2.styled'

export const ModalAdd2 = ({
  toggleModal,
  setPage,
  createPetsPost,
  setModal2Values,
  modalDefaultValues,
}) => {
  const [inputActiveComments, setInputActiveComments] = useState(true);
  const [commentsValue, setCommentsValue] = useState(
    modalDefaultValues ? modalDefaultValues.comments : ''
  );
  const [required, setRequired] = useState(false);
  const [fileValue, setFileValue] = useState([]);
  const [picture, setPicture] = useState(
    modalDefaultValues ? modalDefaultValues.avatar : ''
  );

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'comments':
        if (value.length < 8) {
          setInputActiveComments(false);
        }

        if (value.length > 120) {
          setInputActiveComments(false);
        }

        setModal2Values(prevState => {
          return { ...prevState, comments: value };
        });

        setCommentsValue(value);
        break;

      default:
        return;
    }
  };

  const onClickBackBtn = e => {
    e.preventDefault();
    setPage(1);
  };

  const onClickDoneBtn = e => {
    e.preventDefault();

    if (!picture) {
      setRequired(true);
      return;
    }

    if (commentsValue.length < 8 || commentsValue.length > 120) {
      setInputActiveComments(false);
      setRequired(true);
      return;
    }

    const data = {
      comments: commentsValue,
      file: fileValue,
    };

    createPetsPost(data);
    toggleModal();
  };

  const handleChange = e => {
    setFileValue(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
        setModal2Values(prevState => {
          return { ...prevState, photo: base64data };
        });
      };
    }
  };

  useEffect(() => {
    if (toggleModal) {
      setRequired(false);
      setFileValue([]);

      setModal2Values({ comments: '', avatar: '' });
    }
  }, [toggleModal, setModal2Values]);

  return (
    <>
    <ModalAdd2Wrap>
      <ModalAdd2Title>Add pet</ModalAdd2Title>
      <ModalAdd2Coment>Add photo and some comments</ModalAdd2Coment>
      <ModalAdd2Form>
        <ModalAdd2FotoWrap>
          <ModalAdd2FotoLabel>
            <ModalAdd2Input
              type="file"
              name="file"
              accept="image/*, image/jpeg, image/jpg"
              required
              multiple
              onChange={handleChange}
            />
            <ModalAdd2InputWrap>
              {picture ? (
                <ModalAdd2Img
                  src={picture}
                  alt={fileValue?.name}
                />
              ) : (
                <StyledPlusIcon />
              )}
            </ModalAdd2InputWrap>
            {picture && (
              <ModalAdd2InputWrapChoise>Choose another photo</ModalAdd2InputWrapChoise>
            )}
            {required && !picture && (
              <ModalAdd2InputErrorImg>Please select a photo</ModalAdd2InputErrorImg>
            )}
          </ModalAdd2FotoLabel>
        </ModalAdd2FotoWrap>
        <ModalAdd2Label>
          <ModalAdd2Text>Comments</ModalAdd2Text>
          <ModalAdd2Comments 
            name="comments"
            value={commentsValue}
            onChange={handleInputChange}
            placeholder="Type comments"
            rows="5"
            required
          ></ModalAdd2Comments>
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length < 8 && (
              <ModalAdd2TextError>Must be at least 8 characters</ModalAdd2TextError>
            )}
          {!inputActiveComments &&
            commentsValue.length !== 0 &&
            commentsValue.length > 120 && (
              <ModalAdd2TextError>No more than 120 characters</ModalAdd2TextError>
            )}
          {required && commentsValue.length === 0 && (
            <ModalAdd2TextError>Required</ModalAdd2TextError>
          )}
        </ModalAdd2Label>
        <ModalAdd2ButtonWrap>
          <ModalAdd2ButtonCancel onClick={onClickBackBtn}>
            Back
          </ModalAdd2ButtonCancel>
          <ModalAdd2ButtonNext onClick={onClickDoneBtn}>
            Done
          </ModalAdd2ButtonNext>
        </ModalAdd2ButtonWrap>
      </ModalAdd2Form>
    </ModalAdd2Wrap>
    </>
  );
};