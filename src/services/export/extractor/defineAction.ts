import {clickElements} from "../../interact/cs/interact";
import {sleep} from "../../../utils/jsShorteners";


//TODO: currently for Claude artifacts, needs to be genericized
async function clickActClose(markdown: string | undefined, format: ((html: string) => string) | undefined) {
  const pane = document.querySelector("div.fixed.flex");

  // selector duplication with processMessage in ClaudeChat.js and ClaudeChat.json
  for (const artifact of document.querySelectorAll('.font-claude-message button')) {
    artifact.click();
    await sleep(1000);

    document.querySelector("[data-testid=\"undefined-code\"][data-state=\"off\"]")?.click();

    const artifactContent = pane?.querySelector(".code-block__code, .font-claude-message")?.textContent;
    console.log(artifactContent);
    markdown = markdown?.replace("{{@CAPTURE_ARTIFACT_CONTENT}}", format?.(artifactContent ?? "") ?? "");
  }

  pane?.querySelector(".justify-end > button")?.click(); // close artifact

  return markdown;
}

export async function defineAction(action: {
  type: any;
  selector?: string
}, markdown?: string, format?: (html: string) => string): Promise<string | void | null> {
  switch (action.type) {
    case "click":
      return clickElements(action.selector);
    case "click_act_close":
      return await clickActClose(markdown, format);
    // case "scroll":
    //   return scrollElements;
    // case "type":
    //   return typeElements;
    // case "wait":
    //   return wait;
    default:
      return null;
  }
}
