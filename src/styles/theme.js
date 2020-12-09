export const theme = {
  palette: {
    primary: {
      light: '#f6f7fa',
      main: '#dee0e9'
    },
    white: '#ffffff',
    black: '#2b2b2b',
    gray: {
      main: '#667285',
      lighter: '#8d95a3'
    },
    orange: {
      main: '#e75a2b'
    }
  },
  headerHeight: 100,
  colWidth: '33%',
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '700',
    extraBold: '800'
  },
  breakpoints: {
    upSm: '@media (min-width: 576px)',
    upMd: '@media (min-width: 768px)',
    upLg: '@media (min-width: 992px)',
    upXl: '@media (min-width: 1200px)'
  },
  spacing: (value) => value * 8
}
