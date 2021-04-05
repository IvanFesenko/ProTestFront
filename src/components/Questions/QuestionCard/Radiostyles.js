import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const RadioOrange = withStyles({
  root: {
    color: '#000000',
    paddingTop: 0,
    '&$checked': {
      color: '#FF6B09',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default RadioOrange;
