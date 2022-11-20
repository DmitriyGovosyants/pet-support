import { isAlphanumeric, isLength, matches } from 'validator';

export const isPassword = password =>
  isAlphanumeric(password) && isLength(password, { min: 7, max: 32 });
export const isCity = city => matches(city, /([a-zA-Z0-9]+)(, [a-zA-Z0-9]+)/g);
export const isTitle = title => isLength(title, { min: 2, max: 48 }) && matches(title, /^[a-zA-Zа-яА-Я\s]*$/);
export const isName = name => isLength(name, { min: 2, max: 16 }) && matches(name, /^[a-zA-Zа-яА-Я\s]*$/);
export const isBreed = breed => isLength(breed, { min: 2, max: 24 }) && matches(breed, /^[a-zA-Zа-яА-Я\s]*$/);
export const isPrice = price => isLength(price, { min: 1, max: 10 }) && matches(price, /^[1-9][0-9]*$/);
export const isComments = comments => isLength(comments, { min: 8, max: 120 }) && matches(comments, /^[0-9a-zA-Zа-яА-Я!@#$%^&+=*,:;><'"~`?/.|\s]{8,120}$/);

