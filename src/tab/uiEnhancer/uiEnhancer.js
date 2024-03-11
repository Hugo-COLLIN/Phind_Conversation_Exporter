import {appendModalContainer} from "./modals/appendModalContainer";
import ModalUpdate from "./modals/ModalUpdate";
import ModalMessage from "./modals/ModalMessage";


export async function uiEnhancer(domain) {
  window.addEventListener('load', async function () {
    // Create modal container
    await appendModalContainer();

    // Create "last update" modal if needed
    chrome.storage.sync.get(['displayModalUpdate'], async function (result) {
      if (result.displayModalUpdate)
      {
        await new ModalUpdate(domain).appendModal()
        chrome.storage.sync.set({displayModalUpdate: false}, function () {
          console.log("Last update modal will not be displayed until the next update");
        });
      }
    });

    // Create "welcome" modal if needed
    chrome.storage.sync.get(['displayModalWelcome'], async function (result) {
      if (result.displayModalWelcome) {
        await new ModalMessage('assets/modalMessages/modalTutorial.md').appendModal();
      }
      chrome.storage.sync.set({ displayModalWelcome: false });
    });
  });
}
