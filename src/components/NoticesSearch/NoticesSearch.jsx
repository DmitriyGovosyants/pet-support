import { useState } from 'react';
import { Wrapper, Label, Input, Icon } from './NoticesSearch.styled';
import { setWord } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const NoticesSearch = () => {
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    dispatch(setWord(e.target.value));
    setKeyWord(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Wrapper>
      <Label>
        <Input
          placeholder="Search"
          value={keyWord}
          onChange={onChangeHandler}
        />
        <Icon />
      </Label>
    </Wrapper>
  );
};
