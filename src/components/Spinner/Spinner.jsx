import { Dna } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = ({ button }) => {
  return (
    <SpinnerWrapper button={button}>
      {button && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          color="white"
        />
      )}
      {!button && (
        <Dna
          visible={true}
          height="180"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </SpinnerWrapper>
  );
};
