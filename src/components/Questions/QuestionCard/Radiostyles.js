import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { orange } from 'assets/colors';

const RadioOrange = withStyles({
  root: {
    color: '#000000',
    padding: 0,
    marginRight: '20px',
    '&$checked': {
      color: orange,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default RadioOrange;
