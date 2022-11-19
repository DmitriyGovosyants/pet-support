import { isAlphanumeric, isLength, matches } from 'validator';

export const isPassword = password =>
  isAlphanumeric(password) && isLength(password, { min: 7, max: 32 });
export const isCity = city => matches(city, /([a-zA-Z0-9]+)(, [a-zA-Z0-9]+)/g);

export const isName = name => 
isAlphanumeric(name) && isLength(name, { min: 2, max: 16 });

export const isBreed = breed => 
isAlphanumeric(breed) && isLength(breed, { min: 2, max: 16 });

export const isComment = comments => 
isAlphanumeric(comments) && isLength(comments, { min: 8, max: 120 });