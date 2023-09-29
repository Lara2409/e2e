const DEFAULT_TIMEOUT = 100_000;

export const getCurrentUrl = async () => {
  return await browser.getUrl();
};

export const waitUntilUrlContains = async (path) => {
  return browser.waitUntil(
    async () => {
      const url = await getCurrentUrl();
      return url.includes(path);
    },
    {
      timeout: DEFAULT_TIMEOUT,
      timeoutMsg: `Expected path: ${path} did not appear in the received url after ${DEFAULT_TIMEOUT / 1000} sec`,
    },
  );
};
