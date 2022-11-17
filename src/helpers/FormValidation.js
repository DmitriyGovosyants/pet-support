import { isAlphanumeric, isLength, matches } from 'validator';

export const isPassword = password =>
  isAlphanumeric(password) && isLength(password, { min: 7, max: 32 });
export const isCity = city => matches(city, /([a-zA-Z0-9]+)(, [a-zA-Z0-9]+)/g);
