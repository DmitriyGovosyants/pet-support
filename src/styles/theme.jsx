export const theme = Object.freeze({
  colors: {
    textMain: '#111111',
    textSecond: '#ffffff',
    textThird: '#111321',
    textLowOpacity: '#11111199',
    textLink: '#3091EB',
    black: '#000000',
    red: '#f8064be1',
    
    accent: '#F59256',
    hover: '#FF6101',

    bgMain: '#fdf7f2',
    bgSecond: '#ffffff',

    dark: '#181C27',
    btnTransperent: 'rgba(255, 255, 255, 0.6)',
    shadow: 'rgba(49, 21, 4, 0.07)',
  },
  spacing: value => `${4 * value}px`,
  header: {
    mobileHeight: '74px',
    tabletAndDesktopHeight: '88px',
  },
  // fontSizes: {
  //   titleMain: '30px',
  //   titleBig: '40px',
  //   small: '14px',
  //   medium: '18px',
  //   large: '24px',
  // },
  // 12, 14, 16, 18, 20, 24, 28, 32
  // animation: {
  //   cubicBezierAverageSpeed: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  //   cubicBezierMaxSpeed: '400ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  // },
});
