import {createWindow} from "../../../core/utils/bg/managePopups";
import {defineStoreLink} from "../../../core/utils/defineStoreLink";
import {isEmojiSupported} from "../../../core/utils/isEmojiSupported";
import appInfos from "../../../data/infos.json";
import {launchScraper} from "../../scraper/bg/launchScraper";

export function buildContextMenu() {
  const emojiSupported = isEmojiSupported();
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "openOptions",
      title: (emojiSupported ? "⚙️ " : "") + "Export Options",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "tutorial",
      title: (emojiSupported ? "❓ " : "") + "User's Guide",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "separator",
      type: "separator",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "feedback",
      title: (emojiSupported ? "🤩 " : "") + "Share your feedback on the store",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "bugReport",
      title: (emojiSupported ? "🚀 " : "") + "Report a bug or suggest a feature",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "donation",
      title: (emojiSupported ? "❤️ " : "") + "Support the project",
      contexts: ["action"]
    });
    chrome.contextMenus.create({
      id: "exportPage",
      title: "Export this page",
      contexts: ["page"]
    });
  });

  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    switch (info.menuItemId) {
      case "openOptions":
        createWindow("options.html");
        break;
      case "feedback":
        await chrome.tabs.create({url: defineStoreLink().url});
        break;
      case "donation":
        await chrome.tabs.create({url: appInfos.URLS.SUPPORT});
        break;
      case "tutorial":
        await chrome.windows.create({url: appInfos.URLS.TUTORIALS, type: "popup", width: 500, height: 600});
        break;
      case "exportPage":
        await launchScraper(tab as chrome.tabs.Tab);
        break;
      case "bugReport":
        await chrome.tabs.create({url: appInfos.URLS.REPORT});
        break;
      // case "openIconPopup":
      //   setOneTimePopup("pages/popup.html");
      //   break;
    }
  });
}
