import { PetsListStyled } from './PetsList.styled';
import { useFetchPetsQuery } from 'redux/usersApi';
import { PetItem, Spinner } from 'components';

export const PetsList = () => {
  const { data, isLoading, isError, error } = useFetchPetsQuery();

  if (isLoading) return <Spinner />;

  if (isError) {
    // if (error?.status === 404) {
    //   return <div>...</div>;
    // }
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
