import UAParser from 'ua-parser-js';

export const isMobileDevice = UAParser().device.type === 'mobile';

export const isTabletDevice = UAParser().device.type === 'tablet';
