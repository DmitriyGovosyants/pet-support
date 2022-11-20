export const normalizeData = (object = {}, options = []) => {
  const avatar = {};
  avatar.avatar = object.avatar;
  const data = [];

  for (let index = 0; index < options.length; index++) {
    Object.entries(object).map(item => {
      if (item[0] === options[index]) {
        data.push(item);
      }
      return item;
    });
  }

  return [data, avatar];
};
