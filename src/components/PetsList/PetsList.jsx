import { PetsListStyled } from './PetsList.styled';
import { useGetPetsQuery } from 'redux/usersApi';
import { PetItem } from 'components';

export const PetsList = () => {
  const { data, isError, error } = useGetPetsQuery();

  if (isError) {
    if (error?.status === 404) {
      return <div>...Not Found...</div>;
    }
  }

  if (data) {
    const {
      data: { pet: pets },
    } = data;

    return (
      <PetsListStyled>
        {pets.map(({ _id, avatarURL, name, birthdate, breed, comments }) => {
          return (
            <PetItem
              key={_id}
              id={_id}
              image={avatarURL}
              name={name}
              dateOfBirth={birthdate}
              breed={breed}
              comments={comments}
            />
          );
        })}
      </PetsListStyled>
    );
  }
};
