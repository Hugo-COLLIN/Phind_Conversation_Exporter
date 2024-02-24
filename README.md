# <img alt="SaveMyPhind logo" src="./src/assets/icons/icon-128.png" style="width:40px"> Save my Chatbot - AI Conversation Exporter
### 🚀 Download your Phind, Perplexity and MaxAI-Google search threads into markdown files!

😎 Why Save my Chatbot?
- To keep AI generated information offline,
- To share threads with others,
- To read and process in a knowledge base / note-taking app (like Obsidian),
- To improve the Phind website usability.

👉 When you are on Phind, Perplexity or Google (with MaxAI integration), simply click on the extension icon. It will automatically export the thread you are currently on into a formatted markdown file.

😮 This extension also adds export options directly inside the Phind interface. Now, you can export all your threads clicking on a simple button!

✅ Enjoy!

✏️ Please note that this project is not affiliated with Phind, Perplexity nor MaxAI.

<br>

## ❓ Extension usage
### How to install?
Simply go to the store and click on the install button: 
#### [⏩click here to install Save my Chatbot on Chromium browsers (Chrome, Edge, Opera, Brave, etc.)](https://chrome.google.com/webstore/detail/agklnagmfeooogcppjccdnoallkhgkod)
#### [⏩click here to install Save my Chatbot on Firefox](https://addons.mozilla.org/fr/firefox/addon/save-my-phind)
<br>

You can also install it manually following these steps 
- Chromium browsers:
1. On GitHub, click on Releases (in the right side menu), go on the latest version and download the `save-my-phind_x.y.z.crx` file.
2. Go on `chrome://extensions` (or `[yourChromiumBasedBrowser]://extensions`), then enable "Developer mode" (toggle on the top right) and reload the page.
3. Drag and drop the .crx file on the page, then click on "Add extension" in the appearing popup window.

- Firefox:
1. On GitHub, click on Releases (in the right side menu), go on the latest version and download the `save-my-phind_x.y.z.xpi` file.
2. Go on `about:addons`, then click on the gear icon on the top right and select "Install Add-on From File...".
3. Select the .xpi file you just downloaded and click on "Add" in the appearing popup window.
4. Right-click on the extension icon and select "Always allow for www.phind.com / www.perplexity.ai".

✅ You're done!

### How to use?
Simple!
1. Go to a Phind search thread.
2. Click on the extension icon. 

👉 It will automatically download a structured markdown file containing the conversation.

<br>

## 🪶 Contribution and usages
### The project
Feel free to contribute to this project by forking it and making pull requests. You can also open an issue if you find a bug or have any suggestion.
However, you can't distribute this project without contacting me first. 

This project is licensed under the [RMD-C v1.0 License](LICENSE.txt). Please check for more details.

### Libraries licenses
This project uses third-party libraries. See the [license list](licenses.txt) for more details about libraries' licenses.

<br>

## 🗺️ Roadmap

### Main features:
- [ ] Phind: Export tables into markdown (Turndown rule)
- [ ] Export ChatGPT threads
- [x] Improve Perplexity UI
  - [x] Update modal
  - [x] Donation modal
- [x] Donation popup when user reaches a certain number of clicks (Paypal, BuyMeACoffee, etc.) (in chrome.storage.sync)
- [x] Export Perplexity threads
- [x] Search bar above threads list to filter threads
- [x] Open a form when uninstalled to ask for feedback
- [x] Add type (Phind Search, Phind Pair, ChatGPT) between date and title in filename + in header link
- [x] Update modal to inform users about the new features
- [x] "Export All Threads": Downloading several threads at once, as text files, (into as a zip file - later).
  - All in one tab (with a "loading" message?) or open each thread in a new tab (permission tabs? + browser resources lags?)
- [x] Pair programmer: Put correct index before links both in sources and all search results list
- [x] Pair programmer: Export All Search results correctly
- [x] Pair programmer: Export Sources correctly
  => https://www.phind.com/agent?cache=clk8kpsu00011jq08l0gi6a0m
- [x] Make icon adapted to each site (Phind, ChatGPT, etc.)
- [x] Web: Export if tag main, article,
  => Need to think about the behavior enabling to choose if we need to export the content and what to export
- [x] Export webpages : Turndown rules to filter interesting content
- [x] Make Save my Phind available on Firefox
- [x] Export Phind Pair Programming conversations
- [x] Title stops at the first line break (and ending whitespaces are removed)
- [x] Copy to clipboard when clicking on the extension icon (in addition to file download)
- [x] Reduce file title length and move the next as the subtitle
```md
# My title...
### ... is too long
```
- [x] Export complete user questions unfolding and refolding them (Unfold user questions before exporting and refold them after)
- [x] Model name instead of "AI Answer" (e.g. "GPT-3.5 Answer", "Phind Answer")
- [x] Source numbers next to the source links (numbered list corresponding to citations)
- [x] Export question above sources
- [x] Code type (language) specified in codeblocks (👍 Thanks to @nhuhoang0701)
- [x] Include AI response quotes after the response
- [x] Export source links
- [x] Link to the Phind original search on the file top
- [x] Export conversation to markdown

### Features to think about:
- [ ] Save threads content in chrome.storage.sync to be able to search inside threads content (+ instant export all threads)
    => Keep only the last x threads or the last x days? Or keep all???
- [ ] Side buttons for each response card to export it individually
    - [ ] Download
    - [ ] Copy to clipboard
    - [ ] Share to Obsidian
    - [ ] Share to Roam
    - [ ] Share to Notion
    - [ ] Share to Evernote
    - [ ] Share to Google Keep
- [ ] Option page : choose file format (markdown, html, txt)
- [ ] Option page : choose subfolder to save files in (or custom download location)
- [ ] Option page: option to disable "Export all threads" button (for all/per site)
- [ ] Option page: option to disable UI improvements (per site)
- [ ] Link to the downloaded file in the currently opened note in Obsidian
    - Redirect link to confirm donation (variable "donation level" in sessionStorage: no popup if recurrely donating, no popup during x time if single donation, popup if not)
- [ ] "Export All Threads": into as a zip file.
- [ ] "Export All Threads": Modal when export is finished or stopped (with stats + CTA review/donation)
- [ ] Help bubbles hovering on ? circles next to elements
- [ ] Phind guide to discover the website
- [ ] (Copy the last response to the clipboard when clicking on the extension icon (instead of the entire response) )
      - Phind Search : click on the copy button
      - Phind Pair : export the last answer div
- [ ] (Export next search result pages (sources side panel))
- [ ] ~~Automatically download the conversation?~~
- [ ] ~~Automatically copy the last response to the clipboard (without clicking on the extension icon)?~~

### Bugs/Issues:
- [ ] Detect when connected or something to anticipate and specify the "Export all threads" button usability
- [ ] "Export All Threads": Button "Stop exporting" always visible after export is finished
  => Redirect to homepage when export is finished
- [ ] (Web: Exported links beginning with # prepended by page url)
- [x] Extension icon not updated on Firefox
  => User needs to click or manually allow the extension to access websites
- [x] Export bug on Perplexity thread: https://www.perplexity.ai/search/Quel-nom-donner-TTxbvUcKQ9ib8r0O_I4tjQ?s=c
- [x] Perplexity: Export error when sending file
  https://www.perplexity.ai/search/9afe2327-9ca6-473b-8ec6-9ebcd8d862fe?s=u
- [x] "Rate on Chrome Web Store" for Firefox users
  => Specify both links in infos.json(?) and change for each browser (when bundle?)
- [x] Page title bug:
  https://www.phind.com/agent?cache=clkf6wi1n000djx074ar4fpfo
- [x] Fix link formatting with < and > characters
- [x] Fix text formatting with < and > characters
- [x] Update icon for already opened tabs in windows
- [x] Fix bug "charAt not a function" on some specific threads
- [x] File title error in "Pair programmer" due to removed textbox
- [x] Make extension icon with transparent background
- [x] Web: Exported links beginning with / prepended by page url
- [x] Too long file names can cause issues with OS or Git (cf. Reduce title length feature)
- [x] Import line breaks in user questions and search bar (Phind uses spaces as line breaks)
- [x] Long user question are cut off in the middle so are not entirely exported
- [x] Special characters in title are not correctly formatted (e.g. "\n" should be "\\n")
- [x] Fix broken quotes links
- [x] Fix bug not exporting correctly (AI begins with backtick?, citations so the HTML structure is different?)
- [x] Icons instead of sources
- [x] Code is not correctly formatted when converting Html to md
- [x] Not longer exporting AI answers and source links
  => stronger CSS selectors (try not to use styling classes)
- [x] Inconsistent spaces between questions and answers
- [x] Fix bug "AI Answer" with user question
- [x] File title is the last followup question (= tab title)
  => title taken from search bar
- [ ] ~~(Prevision) Fix browser alert "Do you want this site to open external application?"~~


### Security and maintenance:
- [ ] Auto logs (to Sentry?)
- [ ] Make unit/e2e tests:
  - https://www.phind.com/search?cache=gy05phy0cc7am86g73qgdxrs
  - https://www.phind.com/search?cache=inrm4ux0ema3bsz43g9dcf3c : unfold questions
  - https://www.phind.com/agent?cache=clnfunmyk000jml08x0xmg0qe
- [ ] Use the Phind (official/unofficial?) API instead of scraping the HTML?
- [ ] CI/CD pipeline?
- [x] Structure UI improver files: (modules + separate files for each site)
- [x] New branding: new name: Save my Chatbot, and new logos (SaveMyAI + Perplexity)
- [x] Externalize popup text into an external file (txt, JSON?)
- [x] Fetch extension infos from json to chrome storage when installed
- [x] Divide contentScript code into modules
- [x] Externalize background.js functions into modules
- [x] Module structure improvements
- [x] Remove unused libraries
- [x] Divide code into modules
- [x] Use `npm` to manage dependencies
- [x] License list generation
- [x] Build automation
- [x] Comments + better code structuration
- [x] Update repo structure and README: extension focus
- [x] Add a license
- [x] Sanitize HTML code
