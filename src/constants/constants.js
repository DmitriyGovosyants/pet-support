export const categories = [
  'sell',
  'lost/found',
  'In good hands',
  'Favorite ads',
  'My ads',
];

export const categoriesWithoutAuth = ['sell', 'lost/found', 'In good hands'];

export const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export const ORDER_USER_FIELDS = [
  'name',
  'email',
  'birthdate',
  'phone',
  'city',
];

export const validationError = {
  name: 'Name should have only letters and don`t start with a space',
  email: 'email must contain a domain name .com, .net, .org, .ua, .ru, .gov, .ca',
  birthdate: 'Please, type in DD.MM.YYYY format and past date',
  phone: 'Please, type + and 12 numbers',
  city: 'You should type location in format: City, Region',
  avatarData: 'File too large',
}