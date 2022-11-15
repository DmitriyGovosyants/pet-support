import { useState } from 'react';
import {
  ItemTitle,
  FriendsList,
  FriendItem,
  ItemNetwork,
  ImgItem,
  InfoItem,
  InfoItemUl,
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
            <li>
              <button>
                Time:
                {workDays}
                {/* {workDays[0].from}-{workDays[0].to} */}
              </button>
            </li>
            <li>
              <a href={addressUrl}>
                Address:
                {address}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`}>
                Email:
                {email}
              </a>
            </li>
            <li>
              <a href={`tel:${phone}`}>
                Phone:
                {phone}
              </a>
            </li>
          </InfoItemUl>
        </InfoItem>
      </ItemNetwork>
    </FriendItem>
  );
};
