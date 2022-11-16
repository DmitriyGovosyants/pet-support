// import { useState } from 'react';
import {
  FriendItem,
  ItemTitle,
  ItemNetwork,
  ImgItem,
  InfoItem,
  InfoItemUl,
  InfoItemLi,
  // InfoItemTime,
} from './OurFriendsItem.styled';

export const OurFriendsItem = ({
  url,
  title,
  img,
  address,
  addressUrl,
  email,
  phone,
  workDays,
}) => {
  return (
    <FriendItem>
      <ItemTitle>
        <a href={url}>{title}</a>
      </ItemTitle>
      <ItemNetwork>
        <ImgItem src={img} alt="Sponsor Logo" width="120px" />
        <InfoItem>
          <InfoItemUl>
            <InfoItemLi>
              <button>
                <p>Time:</p>
                {workDays}
              </button>
            </InfoItemLi>
            <InfoItemLi>
              <p>Adress:</p>
              <a href={addressUrl} target="_blank" rel="noopener noreferrer">
                {address}{' '}
              </a>
            </InfoItemLi>
            <InfoItemLi>
              <p>Email:</p>
              <a href={`mailto:${email}`}>{email}</a>
            </InfoItemLi>
            <InfoItemLi>
              <p>Phone:</p>
              <a href={`tel:${phone}`}>{phone}</a>
            </InfoItemLi>
          </InfoItemUl>
        </InfoItem>
      </ItemNetwork>
    </FriendItem>
  );
};
