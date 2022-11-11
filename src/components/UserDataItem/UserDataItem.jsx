import {
  AvatarWrapper,
  Avatar,
  UserInfoWrapper,
  ItemWrapper,
  Item,
  EditWrapper,
} from './UserDataItem.styled';
export const UserDataItem = ({
  user: { avatar, name, email, birthDay, phone, city },
}) => {
  return (
    <>
      <div>
        <AvatarWrapper>
          <Avatar src="#" alt={avatar} />
          <button>Edit photo</button>
        </AvatarWrapper>

        <UserInfoWrapper>
          <ItemWrapper>
            <Item>
              Name:
              <EditWrapper>
                {name}
                <button>Edit</button>
              </EditWrapper>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Email:
              <EditWrapper>
                {email}
                <button>Edit</button>
              </EditWrapper>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Birthday:
              <EditWrapper>
                {birthDay}
                <button>Edit</button>
              </EditWrapper>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Phone:
              <EditWrapper>
                {phone}
                <button>Edit</button>
              </EditWrapper>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              City:
              <EditWrapper>
                {city}
                <button>Edit</button>
              </EditWrapper>
            </Item>
          </ItemWrapper>
        </UserInfoWrapper>
      </div>
    </>
  );
};
