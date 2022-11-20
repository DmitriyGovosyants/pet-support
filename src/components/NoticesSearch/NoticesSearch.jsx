import { useState, useMemo } from 'react';
import { Wrapper, Label, Input, Icon } from './NoticesSearch.styled';
import { setWord } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

export const NoticesSearch = () => {
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();

  const changeInputValue = e => {
    setKeyWord(e.target.value);
  };

  const debouncedChangeQuery = useMemo(
    () =>
      debounce(e => {
        dispatch(setWord(e.target.value));
      }, 500),
    [dispatch]
  );

  const onChangeHandler = e => {
    changeInputValue(e);
    debouncedChangeQuery(e);
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
