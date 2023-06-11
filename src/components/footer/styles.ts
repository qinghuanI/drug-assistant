import { createUseStyles } from 'react-jss';

type RuleNames = 'footer' | 'nav';

export const useStyles = createUseStyles<RuleNames>({
  footer: {
    position: 'fixed',
    overflowY: 'overlay',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(39, 39, 39)',
    color: '#fff',
    fontSize: '12px',
    lineHeight: '22px',
  },
  nav: {
    backgroundColor: '#1a1a1a',

    '& > span': {
      display: 'inline-flex',
      margin: '0 15px',
      cursor: 'pointer',

      '& > a': {
        color: '#fff',
        textDecoration: 'none',
      },

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});
