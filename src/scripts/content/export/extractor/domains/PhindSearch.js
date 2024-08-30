import {clickElements} from "../../../interact/interact";
import {capitalizeFirst, formatLineBreaks} from "../../../../shared/formatter/formatText";
import {safeExecute} from "../../../../shared/utils/jsShorteners";
import {extractPageContent as extractor} from "../extractPageContent";
import {extractSources} from "../extractSources";

export async function extractPageContent(format, metadata) {
  safeExecute(clickElements('.fe-chevron-down'));
  const result = await extractor(format, metadata, processMessage);
  safeExecute(clickElements('.fe-chevron-up'));
  return result;
}

export async function processMessage(content, format) {
  const selectUserQuestion = content.querySelector('span, textarea') ?? "";
  const selectAiModel = content.querySelector('[name^="answer-"] h6');
  const selectAiAnswer = selectAiModel !== null ? selectAiModel.parentNode : "";
  const selectPagination = content.querySelectorAll('.pagination button');

  const userPart = `\n## User\n` + format(formatLineBreaks(selectUserQuestion.innerHTML)).replace("  \n", "") + '\n';

  let aiName;
  if (selectAiModel !== null) {
    aiName = format(selectAiModel.innerHTML).split("|")[1].split("Model")[0].trim();
  }
  const aiIndicator = "## " + capitalizeFirst((aiName ? aiName + " " : "") + "answer") + "\n";
  const aiAnswer = format(selectAiAnswer.innerHTML);
  const index = aiAnswer.indexOf('\n\n');
  const aiPart = `\n` + aiIndicator + aiAnswer.substring(index + 2);

  const sourcesData = {
    selectors: [
      {

      }
    ]
  }

  const paginationPart = selectPagination.length > 0
    ? `\n\n---\n**Sources:**` + await safeExecute(extractSources(content, format, sourcesData, selectPagination)) + "\n\n"
    : "";

  return userPart + aiPart + paginationPart;
}
