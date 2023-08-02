import {createModalBg, createModalUpdate, createSideMenuBtn, createTopBtn} from "./createElements";
import {launchExport} from "../scraper/scraper";
import {setBtnsExport} from "./styleElements";
import {waitAppend} from "./insertElements";

export function improveUI() {
  window.addEventListener('load', function () {
    if (window.location.href.includes("phind.com")) {
      chrome.runtime.sendMessage({message: 'LOAD_COMPLETE'}, function (response) {
        if (response.message === 'exportAllThreads finished')
          window.location.href = "https://www.phind.com";
        else if (response.message === 'LOAD_COMPLETE processed' || response.message === 'exportAllThreads in progress') {
          let isExporting = response.message === 'exportAllThreads in progress';
          // addStyle();

          // Create elements to add to the page
          let exportAllThreadsSideBtn = createSideMenuBtn('Export All Threads', 'fe-share');
          let stopExportAllThreadsSideBtn = createSideMenuBtn('Stop Exporting Threads', 'fe-x', 'none');

          let exportAllThreadsTopBtn = createTopBtn('Export All Threads', 'fe-share', 'smallScreens');
          let stopExportAllThreadsTopBtn = createTopBtn('Stop Exporting Threads', 'fe-x', 'smallScreens');
          let exportThreadTopBtn = createTopBtn('Save This Thread', 'fe-save');

          // Events on buttons
          exportThreadTopBtn.addEventListener('click', function () {
            launchExport();
          });

          exportAllThreadsSideBtn.addEventListener('click', function () {
            let redirect = false;
            if (window.location.href !== "https://www.phind.com/" && window.location.href !== "https://www.phind.com") {
              window.location.href = "https://www.phind.com";
              redirect = true;
            }
            chrome.runtime.sendMessage({
              message: 'exportAllThreads',
              length: document.querySelectorAll(".table-responsive tr").length,
              redirect: redirect
            }, function (response) {
              console.log(response.message);
            });
            setBtnsExport(true, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn);
          });

          stopExportAllThreadsSideBtn.addEventListener('click', function () {
            chrome.runtime.sendMessage({message: 'stopExportingThreads'}, function (response) {
              console.log(response.message);
            });
            setBtnsExport(false, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn);
            window.location.href = "https://www.phind.com";
          });

          exportAllThreadsTopBtn.addEventListener('click', function () {
            let redirect = false;
            if (window.location.href !== "https://www.phind.com/" && window.location.href !== "https://www.phind.com") {
              window.location.href = "https://www.phind.com";
              redirect = true;
            }

            chrome.runtime.sendMessage({
              message: 'exportAllThreads',
              length: document.querySelectorAll(".table-responsive tr").length,
              redirect: redirect
            }, function (response) {
              console.log(response.message);
            });
            setBtnsExport(true, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn);
          });

          stopExportAllThreadsTopBtn.addEventListener('click', function () {
            chrome.runtime.sendMessage({message: 'stopExportingThreads'}, function (response) {
              console.log(response.message);
            });
            setBtnsExport(false, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn);
            window.location.href = "https://www.phind.com";
          });


          // Show/hide buttons
          if (response.message === 'exportAllThreads in progress') {
            setBtnsExport(true, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn)
          } else {
            setBtnsExport(false, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn)
          }

          // Append buttons
          waitAppend(".col-lg-2 > div > div > table", [exportAllThreadsSideBtn, stopExportAllThreadsSideBtn], 'appendChild');

          waitAppend(":not(.row.justify-content-center) > div > .container-xl", [exportThreadTopBtn], 'prepend')

          let doublePlace = [
            {
              selector: ".row.justify-content-center > div > .container-xl",
              mode: 'append'
            },
            {
              selector: ":not(.row.justify-content-center) > div > .container-xl",
              mode: 'prepend'
            }
          ];
          waitAppend(doublePlace, [exportAllThreadsTopBtn, stopExportAllThreadsTopBtn]);

          chrome.storage.sync.get(['displayModalUpdate'], function (result) {
            if (result.displayModalUpdate) {
              // Create modal
              let modalbg = createModalBg()
              let modalUpdateLogs = createModalUpdate(modalbg);

              // Append modal
              waitAppend("body", [modalbg, modalUpdateLogs], 'appendChild');

              // Update storage
              chrome.storage.sync.set({displayModalUpdate: false}, function () {
                console.log("Last update modal will not be displayed anymore");
              });
            }
          });

          window.addEventListener('resize', function () {
            setBtnsExport(isExporting, exportAllThreadsSideBtn, exportAllThreadsTopBtn, stopExportAllThreadsSideBtn, stopExportAllThreadsTopBtn)
          });
        }
      });
    }
  });

}