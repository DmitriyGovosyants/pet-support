import { contImgs } from '../../data/img/homePage';
import { size } from 'styles/mediaquery';
import {
  BackgroundWrapper,
  HomePageContainer,
  Title,
  PictureStyled,
} from './HomePage.styled';

const HomePage = () => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  let viewHeight = window.innerHeight;
  let pageHeight = document.documentElement.clientHeight;
  console.log(viewHeight, pageHeight, scrollHeight);

  return (
    <BackgroundWrapper>
      <HomePageContainer>
        <Title>Take good care of your small pets</Title>
        <PictureStyled>
          <source
            srcSet={`${contImgs.womanDesktop1x} 1x, ${contImgs.womanDesktop2x} 2x`}
            media={`(min-width: ${size.desktop})`}
            type="image/jpeg"
          />
          <source
            srcSet={`${contImgs.womanTablet1x} 1x, ${contImgs.womanTablet2x} 2x`}
            media={`(min-width: ${size.tablet})`}
            type="image/jpeg"
          />
          <source
            srcSet={`${contImgs.womanMobile1x} 1x, ${contImgs.womanMobile2x} 2x`}
            media={`(min-width: ${size.mobile})`}
            type="image/jpeg"
          />
          <img
            src={contImgs.womanMobile1x}
            alt="American-woman-enjoys-company-of-small-pedigree-dog"
          />
        </PictureStyled>
      </HomePageContainer>
    </BackgroundWrapper>
  );
};

export default HomePage;
