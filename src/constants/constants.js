export const categories = [
  'sell',
  'lost/found',
  'In good hands',
  'Favorite ads',
  'My ads',
];

export const categoriesWithoutAuth = ['sell', 'lost/found', 'In good hands'];

export const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const ORDER_USER_FIELDS = [
  'name',
  'email',
  'birthdate',
  'phone',
  'city',
];

export const validationErrMsg = {
  name: 'Name should have only letters and don`t start with a space',
  email: 'Email only on English and with @ and must contain a domain name .com, .net, .org, .ua, .ru, .gov, .ca',
  password: 'Password length should have at 7 to 32 symbol and does not contain a space',
  birthdate: 'Please, type in DD.MM.YYYY format and past date',
  phone: 'Please, type + and 12 numbers',
  city: 'You should type location in format: City, Region',
  avatar: 'File too large',
  category: 'Choose category',
  title: 'Title should have only 2-48 letters',
  petName: 'Name should have only 2-16 letters',
  breedAddPet: 'Breed should have only 2-16 letters',
  breed: 'Breed should have only 2-24 letters',
  sex: 'Choose sex',
  price: 'Price couldn\'t start from 0, only numbers',
  comments: 'Comments should have only 8-120 letters',
}