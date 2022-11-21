import { FormNavLink, Text, Wrapper } from './FormText.styled';

export const FormText = ({ text, link, routesPath }) => {
  return (
    <Wrapper>
      <Text>
        {text}
        <FormNavLink to={routesPath}>{link}</FormNavLink>
      </Text>
    </Wrapper>
  );
};
