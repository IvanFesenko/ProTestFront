import UAParser from 'ua-parser-js';

export const isMobileDevice = () => {
  return UAParser().device.type === 'mobile';
};
