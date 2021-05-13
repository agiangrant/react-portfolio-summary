import { SET_THEME } from './actions';

export const defaultTheme = {
  colors: {
    white: '#fff',
    positive: '#072',
    negative: '#ea1200',
    neutral: '#666',
    cardBackground: '#f6f7fa',
    cardShadow: 'rgba(0,0,0,0.25)',
    defaultFont: '#404040',
    background: '#fff',
  },
  palette: {
    themePrimary: '#0b5',
  },
};

const theme = (state = defaultTheme, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, ...action.theme };
    default:
      return state;
  }
};

export default {
  theme,
};
