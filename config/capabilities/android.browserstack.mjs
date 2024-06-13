/**
 * @return { import('@wdio/types').Options.WebdriverIO['capabilities'] }
 */
export const createAndroidCapability = () => ({
  browserName: 'Android',
  device: process.env.ANDROID_DEVICE_NAME,
  osVersion: process.env.ANDROID_OS_VERSION,
});
