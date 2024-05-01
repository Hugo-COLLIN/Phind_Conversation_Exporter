import {logWelcome} from "../../shared/utils/consoleMessages";
import appInfos from "../../../infos.json";
import {defineExtractor} from "../extractor/defineExtractor";
import {defineExportMethod} from "../export/defineExportMethod";
import {updateClickIconCount} from "../../background/icon/clickCount/clickIconCountContext";

/**
 * @description - Launch the export process
 * @returns {Promise<void>}
 */
export async function launchScrapping(domain) {
  logWelcome();
  const extractor = await defineExtractor(domain);
  const extracted = await extractor.launch();

  if (extracted.markdownContent === null) {
    alert(`${appInfos.APP_SNAME}: No content to export!`);
    return;
  }

  await defineExportMethod(domain, extracted);
  console.log("Export done!")

  // Increment click icon count
  updateClickIconCount();
}