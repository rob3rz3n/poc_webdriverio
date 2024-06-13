/**
 * @return { import('@wdio/types').Options.WebdriverIO['capabilities'] }
 */
export const createAndroidCapability = () => ({
  platformName: 'Android',
  browserName: 'chrome',
  browserVersion: process.env.CHROME_BROWSER_VERSION,
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': process.env.ANDROID_DEVICE_NAME,
  'appium:avd': process.env.ANDROID_VIRTUAL_DEVICE,
});
