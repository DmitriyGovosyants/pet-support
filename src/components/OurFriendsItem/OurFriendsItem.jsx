import { useState } from 'react';
import {
  title,
  friendItem,
  itemTitle,
  ItemNetwork,
  imgItem,
  infoItem,
  infoItemUl,
  infoItemTime,
  infoItemAddress,
  friendItemEmail,
  friendItemPhone,
} from './OurFriendsItem.styled';

export const OurFriendsItem = ({
  petData: { title, photo, time, address, email, phone },
}) => {};

const FriendsItem = ({
  url,
  title,
  img,
  address,
  addressUrl,
  email,
  phone,
  timeWork,
  itemInfoList,
}) => {
  return (
    <li className={friendItem}>
      <h3 className={itemTitle}>
        <a href={url}>{title}</a>
      </h3>
      <div className={ItemNetwork}>
        <img src={img} alt="Sponsor Logo" width="120px" className={imgItem} />
        <div className={infoItem}>
          <ul className={infoItemUl}>
            <li className={itemInfoList}>
              {timeWork && (
                <button className={infoItemTime}>
                  Time:
                  <br />
                  {timeWork[0].from}-{timeWork[0].to}
                </button>
              )}
            </li>
            <li className={itemInfoList}>
              <address className={infoItemAddress}>
                <a href={addressUrl}>
                  Address:
                  <br />
                  {address}
                </a>
              </address>
            </li>
            <li className={itemInfoList}>
              <a href={`mailto:${email}`} className={friendItemEmail}>
                Email:
                <br />
                {email}
              </a>
            </li>
            <li className={itemInfoList}>
              <a href={`tel:${phone}`} className={friendItemPhone}>
                Phone:
                <br />
                {phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
