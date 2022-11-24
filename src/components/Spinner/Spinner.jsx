import { Dna } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = ({ button }) => {
  return (
    <SpinnerWrapper button={button}>
      <Dna
        visible={true}
        height={button ? '80' : '180'}
        width={button ? '80' : '180'}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SpinnerWrapper>
  );
};
