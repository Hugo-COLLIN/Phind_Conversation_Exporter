export async function launchScraper(tab: chrome.tabs.Tab) {
  if (!tab || tab.url?.startsWith("chrome://")) {
    console.info(`Tab ${tab?.id || ''} is not injectable`);
    return;
  }
  try {
    console.info("Injecting script")
    await chrome.storage.local.set({isInjecting: true});
    // console.log(chrome.storage.local.get(['isInjecting']));

    await chrome.scripting.executeScript({
      target: {tabId: tab.id || 0},
      files: ['tab.js']
    });

  } catch (error) {
    console.error("Error executing script: ", error);
  }
}
