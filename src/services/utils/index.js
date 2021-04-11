import UAParser from 'ua-parser-js';

export const isMobileDevice = UAParser().device.type === 'mobile';
