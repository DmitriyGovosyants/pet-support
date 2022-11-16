import { PetsListStyled } from './PetsList.styled';
// import { useFetchPetsQuery } from 'redux/petApi';
import { PetItem } from 'components';

//удалить const pets, когда прийдут данные из бекенда
const pets = [
  {
    id: '1',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'Jack',
    dateOfBirth: '22.04.2018',
    breed: '22.04.2018',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '2',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'Nick',
    dateOfBirth: '25.04.2018',
    breed: '25.04.2018',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
];

export const PetsList = () => {
  //раскоментить, когда прийдут данные из бекенда
  // const { data: pets } = useFetchPetsQuery();

  return (
    <PetsListStyled>
      {pets.map(({ id, image, name, dateOfBirth, breed, comments }) => {
        return (
          <PetItem
            key={id}
            id={id}
            image={image}
            name={name}
            dateOfBirth={dateOfBirth}
            breed={breed}
            comments={comments}
          />
        );
      })}
    </PetsListStyled>
  );
};
