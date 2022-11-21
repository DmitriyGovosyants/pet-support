import { isLength, matches } from 'validator';

export const isPassword = password =>
  matches(password, /^[0-9a-zA-Zа-яА-Я!@#$%^&+=*,:;><'"~`?/.|\S+]{7,32}$/);
export const isCity = city => matches(city, /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+, [a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/);
export const isTitle = title => isLength(title, { min: 2, max: 48 }) && matches(title, /^[^ 0-9][a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/);
export const isName = name => isLength(name, { min: 2, max: 16 }) && matches(name, /^[^ 0-9][a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/);
export const isBreed = breed => isLength(breed, { min: 2, max: 24 }) && matches(breed, /^[^ 0-9][a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/);
export const isPrice = price => isLength(price, { min: 1, max: 10 }) && matches(price, /^[1-9][0-9]*$/);
export const isComments = comments => isLength(comments, { min: 8, max: 120 }) && matches(comments, /^[0-9a-zA-Zа-яА-Я!@#$%^&+=*,:;><'"~`?/.|\s]{8,120}$/);
export const isDate = data => matches(data, /(((0[1-9])|([12][0-9])|(3[01]))\.((0[0-9])|(1[012]))\.((20[012]\d|19\d\d)|(1\d|2[0123])))/);
export const isDatePast = data => {
  return new Date() >
      new Date(
        `${data.value.slice(3, 5)}-${data.value.slice(
          0,
          2
        )}-${data.value.slice(6)}`
      );
}
