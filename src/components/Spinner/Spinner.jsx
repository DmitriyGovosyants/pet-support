import { Dna } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = ({ h = '140', w = '140' }) => {
  return (
    <SpinnerWrapper>
      <Dna
        visible={true}
        height={h}
        width={w}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SpinnerWrapper>
  );
};
