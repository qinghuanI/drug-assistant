import { createUseStyles } from 'react-jss';

type RuleNames = 'tableWrapper';

export const useStyles = createUseStyles<RuleNames>({
  tableWrapper: {
    marginBottom: '40px',
  },
});
