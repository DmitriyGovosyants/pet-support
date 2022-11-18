import { PetsListStyled } from './PetsList.styled';
import { useFetchPetsQuery } from 'redux/petApi';
import { PetItem } from 'components';

//удалить const pets, когда прийдут данные из бекенда
// const pets = [
//   {
//     id: '1',
//     image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Jack',
//     dateOfBirth: '22.04.2018',
//     breed: '22.04.2018',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//   },
//   {
//     id: '2',
//     image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Nick',
//     dateOfBirth: '25.04.2018',
//     breed: '25.04.2018',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//   },
// ];

export const PetsList = () => {
  const { data } = useFetchPetsQuery();

  return (
    <PetsListStyled>
      {data &&
        data.data.pet.map(
          ({ _id, avatarURL, name, birthdate, breed, comments }) => {
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
          }
        )}
    </PetsListStyled>
  );
};
