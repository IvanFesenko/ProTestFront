import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { orange } from 'assets/colors';

export const Loading = withStyles({
  root: {
    color: `${orange}`,
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
  },
})(props => <CircularProgress {...props} />);
