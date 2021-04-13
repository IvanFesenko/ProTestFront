import { isMobileDevice, isTabletDevice } from 'services/utils';

export const useCanvasSize = () => {
  if (isMobileDevice) {
    return { canvasWidth: 280, canvasHeight: 530 };
  }
  if (isTabletDevice) {
    return { canvasWidth: 350, canvasHeight: 530 };
  }
  return { canvasWidth: 800, canvasHeight: 280 };
};
