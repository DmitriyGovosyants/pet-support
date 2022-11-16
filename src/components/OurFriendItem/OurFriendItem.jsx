import { useState, useEffect } from 'react';
import partnerImg from '../../data/img/partner.png';
import {
  Card,
  FriendTitle,
  InfoWrapper,
  ImgWrapper,
  InfoList,
  InfoItem,
  AddressLink,
  TimeBtn,
  TimeDetails,
} from './OurFriendItem.styled';

const empty = '-'.repeat(30);

export const OurFriendItem = ({
  title,
  url,
  imageUrl,
  workDays,
  address,
  addressUrl,
  email,
  phone,
}) => {
  const [workDay, setWorkDay] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!workDays) {
      return;
    }

    const oneDay = workDays.find(el => el.isOpen === true);
    setWorkDay(oneDay);
  }, [workDays]);

  const closeDetails = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  return (
    <Card onClick={() => closeDetails()}>
      <FriendTitle>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </FriendTitle>
      <InfoWrapper>
        <ImgWrapper>
          <img src={imageUrl ? imageUrl : partnerImg} alt={title} />
        </ImgWrapper>
        <InfoList>
          <InfoItem>
            <TimeBtn
              type="button"
              disabled={workDays ? false : true}
              onClick={() => setShowDetails(s => !s)}
            >
              <p>Time:</p>
              {!workDay && <p>{empty}</p>}
              {workDay && (
                <p>
                  {workDay.from}-{workDay.to}
                </p>
              )}
            </TimeBtn>
            {showDetails && (
              <TimeDetails>
                <span>MN</span>
                <span>
                  {workDays[0].from} - {workDays[0].to}
                </span>
                <span>TU</span>
                <span>
                  {workDays[1].from} - {workDays[1].to}
                </span>
                <span>WE</span>
                <span>
                  {workDays[2].from} - {workDays[2].to}
                </span>
                <span>TH</span>
                <span>
                  {workDays[3].from} - {workDays[3].to}
                </span>
                <span>FR</span>
                <span>
                  {workDays[4].from} - {workDays[4].to}
                </span>
                <span>SA</span>
                <span>
                  {workDays[5].from} - {workDays[5].to}
                </span>
                <span>SU</span>
                <span>
                  {workDays[6].from} - {workDays[6].to}
                </span>
              </TimeDetails>
            )}
          </InfoItem>
          <InfoItem>
            <p>Adress:</p>
            {address && (
              <AddressLink
                underline
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </AddressLink>
            )}
            {!address && <p>{empty}</p>}
          </InfoItem>
          <InfoItem>
            <p>Email:</p>
            {email && (
              <AddressLink underline href={`mailto:${email}`}>
                {email}
              </AddressLink>
            )}
            {!email && <p>{empty}</p>}
          </InfoItem>
          <InfoItem>
            <p>Phone:</p>
            {phone && <AddressLink href={`tel:${phone}`}>{phone}</AddressLink>}
            {!phone && <p>{empty}</p>}
          </InfoItem>
        </InfoList>
      </InfoWrapper>
    </Card>
  );
};
