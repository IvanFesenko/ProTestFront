import ProgressBarStyled from './ProgressBar.style';

function ProgressBar({ lenght, currentPosition }) {
  const width = ((currentPosition + 1) * 100) / lenght;
  return <ProgressBarStyled width={`${width}%`} />;
}

export default ProgressBar;
