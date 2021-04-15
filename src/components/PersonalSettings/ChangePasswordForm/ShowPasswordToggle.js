import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { orange, subBlack } from 'assets/colors';

const StyleSwitch = withStyles({
  switchBase: {
    color: 'white',
    '&$checked': {
      color: orange,
    },
    '&$checked + $track': {
      backgroundColor: subBlack,
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles({
  root: {
    margin: '0',
    '& .MuiTypography-body1 ': {
      fontFamily: 'Montserrat',
      fontSize: '10px',
    },
  },
});

function ShowPasswordToggle({ showPassword, handleShowPassword }) {
  const styleToggle = useStyles();
  return (
    <FormControlLabel
      control={
        <StyleSwitch
          checked={showPassword}
          onChange={event => handleShowPassword(event.target.checked)}
          name="checkedB"
          color="primary"
        />
      }
      label="Show password"
      className={styleToggle.root}
    />
  );
}

export default ShowPasswordToggle;
