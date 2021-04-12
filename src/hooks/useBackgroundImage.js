import { isMobileDevice, isTabletDevice } from 'services/utils';
import mobileImg from 'assets/images/background/mob.jpg';
import tabletImg from 'assets/images/background/tablet.jpg';
import desktopImg from 'assets/images/background/desktop.jpg';

export const useBackgroundImage = () => {
  if (isMobileDevice) {
    return { img: mobileImg };
  }
  if (isTabletDevice) {
    return { img: tabletImg };
  }
  return { img: desktopImg };
};
