import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { orange } from 'assets/colors';

const RadioOrange = withStyles({
  root: {
    color: '#000000',
    paddingTop: 0,
    '&$checked': {
      color: orange,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default RadioOrange;
