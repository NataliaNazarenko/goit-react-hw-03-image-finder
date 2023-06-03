export const theme = Object.freeze({
  colors: {
    accent: '#303f9f',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #f2f2f2, #9e9e9e)'],
    tagBackground: ['linear-gradient(to bottom, #3f51b5, #3f51b5)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '24px',
  },
  spacing: value => `${4 * value}px`,
});
