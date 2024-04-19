// import infos from "./infos";
import {
  detectPageLoad,
  domainExportChecker,
  domainLoadChecker
} from "./scripts/units/processing/checker/domainChecker.all";
import {launchExport} from "./scripts/units/processing/exportProcess";
import {checkClickCountAndDisplayModal} from "./scripts/units/interface/modals/clickCount.all";
import {uiEnhancer} from "./scripts/units/triggers/uiEnhancer";

async function tab() {
  // console.log(infos.APP_MODE)
  chrome.storage.local.get(['isInjecting'], async function (result) {
    result.isInjecting ? await actionExtensionIconClicked() : await actionPageLoaded();
    await chrome.storage.local.set({isInjecting: false});
  });
}

export async function actionExtensionIconClicked() {
  const domainPage = await domainExportChecker();
  if (domainPage === null) return;
  launchExport(domainPage);
  checkClickCountAndDisplayModal(domainPage);
}

export async function actionPageLoaded() {
  const domain = await domainLoadChecker();
  if (domain === null) return;
  const htmlCheck = detectPageLoad(domain);
  if (!htmlCheck) return;
  // scrapOnLoadListener();
  uiEnhancer(domain);
}

tab();
