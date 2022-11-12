import { Wrapper, Label, Input, Icon } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  return (
    <Wrapper>
      <Label>
        <Input placeholder="Search" />
        <Icon />
      </Label>
    </Wrapper>
  );
};
