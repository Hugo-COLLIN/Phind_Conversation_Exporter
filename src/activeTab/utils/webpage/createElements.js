/*
--- ELTS CREATION ---
 */

import {getAppInfos} from "../../../common/appInfos";

export async function createSideMenuBtn(title, icon, display = 'block') {
// Step 2: Create the tbody element.
  var button = document.createElement('tbody');

// Step 3: Create the tr element and set its style.
  var tr = document.createElement('tr');
  tr.style.cursor = 'pointer';

// Step 4: Create the td element.
  var td = document.createElement('td');

// Step 5: Create the first div with the class row.
  var div1 = document.createElement('div');
  div1.classList.add('row');

// Step 6: Create the col-1 fs-5 div
  var div2 = document.createElement('div');
  div2.classList.add('col-1', 'fs-5');

// Step 7: Create the fw-bold col-10 fs-5 div.
  var div3 = document.createElement('div');
  div3.classList.add('fw-bold', 'col-10', 'fs-5');

// Step 8: Create the i element with the class 'mx-2 fe fe-message-square'
  var iElement = document.createElement('i');
  iElement.classList.add('mx-2', 'fe', icon);

// Step 9: Set the rest of the div's innerHTML.
  div3.innerHTML += title;

// Step 10: Append the iElement to div3 before the text.
  div3.insertBefore(iElement, div3.childNodes[0]);

// Step 11: Append the div2 and div3 to div1.
  div1.appendChild(div2);
  div1.appendChild(div3);

// Step 12: Append div1 to td.
  td.appendChild(div1);

// Step 13: Append td to tr.
  tr.appendChild(td);

// Step 14: Append tr to tbody.
  button.appendChild(tr);

  button.setAttribute("extension", await getAppInfos().APP_SNAME);

  return button;
}

export async function createTopBtn(title, icon, classElt = '') {
  let buttonElement = document.createElement('button');

// Step 3: Set the type and class attributes of the button.
  buttonElement.setAttribute('type', 'button');
  buttonElement.classList.add('btn', 'btn-primary', 'btn-sm');

// Step 4: Create the i element and set its class.
  var iElement = document.createElement('i');
  iElement.classList.add('mx-2', 'fe', icon);

// Step 5: Set the button's innerHTML.
  buttonElement.innerHTML = title;

  buttonElement.style.margin = '2px';

// Step 6: Append the iElement to the button before the text.
  buttonElement.insertBefore(iElement, buttonElement.childNodes[0]);

  if (classElt !== '') buttonElement.classList.add(classElt);

  buttonElement.setAttribute("extension", await getAppInfos().APP_SNAME);

  return buttonElement;
}

export async function createModalUpdate(modalBackground) {
  var outerDiv = document.createElement('div');
  outerDiv.setAttribute('role', 'dialog');
  outerDiv.setAttribute('aria-modal', 'true');
  outerDiv.classList.add('fade', 'modal', 'show');
  outerDiv.style.display = 'block';

// Step 3: Create the modal-dialog div element.
  var modalDialogDiv = document.createElement('div');
  modalDialogDiv.classList.add('modal-dialog');

// Step 4: Create the modal-content div element.
  var modalContentDiv = document.createElement('div');
  modalContentDiv.classList.add('modal-content');

// Step 5: Create the modal-body div element.
  var modalBodyDiv = document.createElement('div');
  modalBodyDiv.classList.add('bg-light', 'modal-body');

  // Title
  var innerDivImage = document.createElement('span');
  innerDivImage.style.marginRight = '10px';
  var innerDivImageImg = document.createElement('img');
  innerDivImageImg.src = chrome.runtime.getURL('img/icons/icon-48.png');
  innerDivImageImg.alt = `${await getAppInfos().APP_SNAME} icon`;
  innerDivImageImg.width = '48';
  innerDivImageImg.height = '48';
  innerDivImage.appendChild(innerDivImageImg);

  var modalTitleDiv = document.createElement('div');
  modalTitleDiv.classList.add('mb-5', 'modal-title', 'h2');
  modalTitleDiv.innerHTML = "Hey, what's up?";
  modalBodyDiv.appendChild(modalTitleDiv);

  modalTitleDiv.prepend(innerDivImage);

  var modalSubtitleDiv = document.createElement('div');
  modalSubtitleDiv.classList.add('mb-5', 'modal-title', 'h3');
  modalSubtitleDiv.innerHTML = `Latest updates of the ${await getAppInfos().APP_NAME} extension:`;
  modalBodyDiv.appendChild(modalSubtitleDiv);

  let innerDiv1 = createModalTextGroup("⨠ Now inside the Phind interface!", "You can now export a Phind thread using the button inside the page (but you always can click on the extension icon).");
  let innerDiv2 = createModalTextGroup("⨠ Export all your threads in 1 click!", "Just click on the \"Export All Threads\" button! It could be long, so you have time to drink your triple coffee dose 🙃.");
  let innerDiv3 = createModalTextGroup("⨠ Some bugs solved", "File names, title bugs, these kind of things...");

  var innerDivLink = document.createElement('a');
  innerDivLink.target = '_blank';
  innerDivLink.classList.add('mb-0');
  innerDivLink.href = await getAppInfos().APP_WEBSTORE_URL + "/reviews";
  innerDivLink.innerHTML = "⭐ If this extension helps you, please leave it a review on the Chrome Web Store! ⭐";

  let innerDiv4 = createModalTextGroup(`Enjoy!<br>Hugo <small>- ${await getAppInfos().APP_SNAME} creator</small>`, "I'm not affiliated with the Phind.com developers, I just love this website and I wanted to make it even better."); //I'm not affiliated with Phind, I just love this website and I wanted to make it better for me and for you. If you want to support me, you can donate at https://www.paypal.com/paypalme/${await getAppInfos().APP_SNAME}

  modalBodyDiv.appendChild(innerDiv1);
  modalBodyDiv.appendChild(innerDiv2);
  modalBodyDiv.appendChild(innerDiv3);
  modalBodyDiv.appendChild(document.createElement('br'));
  modalBodyDiv.appendChild(innerDivLink);
  modalBodyDiv.appendChild(document.createElement('br'));
  modalBodyDiv.appendChild(document.createElement('br'));
  modalBodyDiv.appendChild(innerDiv4);

// Step 8: Create the Close button.
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('m-1', 'btn', 'btn-primary');
  closeButton.innerHTML = "Let's Phind!";

// Step 9: Append the inner divs and the Close button to the modal-content div.
  modalContentDiv.appendChild(modalBodyDiv);
  modalContentDiv.appendChild(closeButton);

// Step 10: Append the modal-dialog div to the outer div.
  modalDialogDiv.appendChild(modalContentDiv);

// Step 11: Append the outer div to the body.
  outerDiv.appendChild(modalDialogDiv);

  closeButton.addEventListener('click', function () {
    outerDiv.remove();
    modalBackground.remove();
  });

  outerDiv.setAttribute("extension", await getAppInfos().APP_SNAME);

  return outerDiv;
}

function createModalTextGroup(bigText, smallText) {
  let innerDiv = document.createElement('div');
  innerDiv.classList.add('pb-2');
  innerDiv.style.opacity = '1';

  let p2 = document.createElement('p');
  p2.classList.add('mb-0', 'fs-4');
  p2.innerHTML = bigText;

  let desc2 = document.createElement('p');
  desc2.classList.add('mb-0', 'fs-5');
  // desc2.innerHTML = "Just click on the button \"Export All Threads\" and wait for the export to finish.";
  desc2.innerHTML = smallText;

  innerDiv.appendChild(p2);
  innerDiv.appendChild(desc2);

  return innerDiv;
}

export function createModalBg() {
  var divElement = document.createElement('div');
  divElement.classList.add('fade', 'modal-backdrop', 'show');

  return divElement;
}