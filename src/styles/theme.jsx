export const theme = Object.freeze({
  colors: {
    textMain: '#111111',
    textSecond: '#ffffff',
    textThird: '#111321',
    textLowOpacity: '#11111199',
    textLink: '#3091EB',
    black: '#000000',

    accent: '#F59256',
    hover: '#FF6101',

    bgMain: '#fdf7f2',
    bgSecond: '#ffffff',

    dark: '#181C27',
    btnTransperent: 'rgba(255, 255, 255, 0.6)',
  },

  shadows: {
    mainShadow: '14px 10px 14px rgba(49, 21, 4, 0.07)',
    shadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    modalShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    shadowWorkDays: '4px 4px 8px rgba(0, 0, 0, 0.25)',
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
  animation: {
    cubicBezierAverageSpeed: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    cubicBezierMaxSpeed: '400ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    cubicBezierSlowSpeed: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
