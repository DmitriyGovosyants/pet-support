import { useRef, useState } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  CloseBtn,
  Title,
  Text,
  CategoryWrapper,
  Btn,
  StyledForm,
  StyledLabel,
  StyledField,
  ErrorMessageWrapper,
  MainBtn,
  DescriptionText,
  StyledRadioBtn,
  SexWrapper,
  CategoryLabel,
  PlusBtn,
  BtnWrapper,
} from './ModalAddNotice.styled';
import { PreviewImage } from 'components';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import { ReactComponent as MaleIcon } from 'data/img/male.svg';
import { ReactComponent as FemaleIcon } from 'data/img/female.svg';
import { ReactComponent as PlusIcon } from 'data/img/photo-plus-icon.svg';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/svg', 'image/png', 'image/jpg'];

export const ModalAddNotice = ({ toggleModal }) => {
  const [toggle, setToggle] = useState(false);
  const imageRef = useRef(null);

  return (
    <Container>
      <CloseBtn type="button" onClick={toggleModal}>
        <CloseIcon />
      </CloseBtn>
      <Title>Add pet</Title>
      {!toggle && (
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Text>
        </>
      )}

      <Formik
        initialValues={{
          category: 'sell',
          tittleOfAd: '',
          petName: '',
          dateOfBirth: '',
          breed: '',
          sex: '',
          location: '',
          price: '',
          comments: '',
          image: null,
        }}
        validationSchema={Yup.object({
          tittleOfAd: Yup.string()
            .min(10, '*Must be 10 characters or more')
            .required('*Required'),
          category: Yup.string().required('*Required'),
          petName: Yup.string(),
          dateOfBirth: Yup.string(),
          breed: Yup.string(),
          comments: Yup.string(),
          location: Yup.string().required('*Required'),
          sex: Yup.string().required('*Required'),
          price: Yup.string().required('*Required'),
          image: Yup.mixed()
            .nullable()
            .test(
              'FILE SIZE',
              'Uploaded file is too big',
              value => !value || value.size <= 1024 * 1024
            )
            .test(
              'FILE FORMAT',
              'Uploaded file has unsupported format',
              value =>
                !value || (value && SUPPORTED_FORMATS.includes(value?.type))
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, setFieldValue }) => (
          <StyledForm>
            {!toggle && (
              <>
                <CategoryWrapper>
                  <div>
                    <Field
                      id="lost/found-radio"
                      name="category"
                      type="radio"
                      value="lost/found"
                      checked={values.category === 'lost/found'}
                      style={{ display: 'none' }}
                    />
                    <CategoryLabel htmlFor="lost/found-radio">
                      lost/found
                    </CategoryLabel>
                  </div>

                  <div>
                    <Field
                      id="inGoodHands-radio"
                      name="category"
                      type="radio"
                      value="inGoodHands"
                      checked={values.category === 'inGoodHands'}
                      style={{ display: 'none' }}
                    />
                    <CategoryLabel htmlFor="inGoodHands-radio">
                      In good hands
                    </CategoryLabel>
                  </div>

                  <div>
                    <Field
                      id="sell-radio"
                      name="category"
                      type="radio"
                      value="sell"
                      checked={values.category === 'sell'}
                      style={{ display: 'none' }}
                    />
                    <CategoryLabel htmlFor="sell-radio">sell</CategoryLabel>
                  </div>
                </CategoryWrapper>
                <StyledLabel htmlFor="titleOfAd">
                  Tittle of ad
                  <span>*</span>
                </StyledLabel>
                <StyledField
                  id="titleOfAd"
                  name="tittleOfAd"
                  type="text"
                  placeholder="Type tittle of ad"
                />
                <ErrorMessageWrapper>
                  <ErrorMessage name="tittleOfAd" />
                </ErrorMessageWrapper>

                <StyledLabel htmlFor="petName">Name pet</StyledLabel>
                <StyledField
                  id="petName"
                  name="petName"
                  type="text"
                  placeholder="Type name pet"
                />

                <StyledLabel htmlFor="dateOfBirth">Date of birth</StyledLabel>
                <StyledField
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="text"
                  placeholder="Type date of birth"
                />

                <StyledLabel htmlFor="breed">Breed</StyledLabel>
                <StyledField
                  id="breed"
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                />
              </>
            )}

            {toggle && (
              <>
                <DescriptionText>
                  The sex<span>*</span>:
                </DescriptionText>
                <SexWrapper>
                  <div style={{ marginRight: '40px' }}>
                    <MaleIcon
                      style={{ display: 'block', marginBottom: '12px' }}
                    />
                    <StyledRadioBtn
                      id="male-radio"
                      name="sex"
                      type="radio"
                      value="male"
                    />
                    <StyledLabel htmlFor="male-radio">Male</StyledLabel>
                  </div>

                  <div>
                    <FemaleIcon
                      style={{ display: 'block', marginBottom: '12px' }}
                    />
                    <StyledRadioBtn
                      id="female-radio"
                      name="sex"
                      type="radio"
                      value="female"
                    />
                    <StyledLabel htmlFor="female-radio">Female</StyledLabel>
                  </div>
                </SexWrapper>
                <ErrorMessageWrapper>
                  <ErrorMessage name="sex" />
                </ErrorMessageWrapper>

                <StyledLabel htmlFor="location">
                  Location
                  <span>*</span>
                </StyledLabel>
                <StyledField
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Type location"
                />
                <ErrorMessageWrapper>
                  <ErrorMessage name="location" />
                </ErrorMessageWrapper>

                {values.category === 'sell' && (
                  <>
                    <StyledLabel htmlFor="price">
                      Price
                      <span>*</span>
                    </StyledLabel>
                    <StyledField
                      id="price"
                      name="price"
                      type="text"
                      placeholder="Type price"
                    />
                    <ErrorMessageWrapper>
                      <ErrorMessage name="price" />
                    </ErrorMessageWrapper>
                  </>
                )}

                <DescriptionText>Load the pet’s image</DescriptionText>
                <input
                  hidden
                  ref={imageRef}
                  name="image"
                  type="file"
                  onChange={e => {
                    setFieldValue('image', e.target.files[0]);
                  }}
                />
                {values.image && (
                  <PreviewImage
                    image={values.image}
                    style={{ marginBottom: '28px' }}
                  />
                )}
                {!values.image && (
                  <PlusBtn
                    onClick={() => {
                      imageRef.current.click();
                    }}
                  >
                    <PlusIcon />
                  </PlusBtn>
                )}
                <ErrorMessageWrapper>
                  <ErrorMessage name="image" />
                </ErrorMessageWrapper>

                <StyledLabel htmlFor="comments">Comments</StyledLabel>
                <StyledField
                  id="comments"
                  name="comments"
                  as="textarea"
                  placeholder="Type comments"
                />
              </>
            )}

            <BtnWrapper>
              {!toggle ? (
                <MainBtn type="button" onClick={() => setToggle(true)}>
                  Next
                </MainBtn>
              ) : (
                <MainBtn type="submit">Done</MainBtn>
              )}

              {!toggle ? (
                <Btn type="button" onClick={toggleModal}>
                  Close
                </Btn>
              ) : (
                <Btn type="button" onClick={() => setToggle(false)}>
                  Back
                </Btn>
              )}
            </BtnWrapper>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
