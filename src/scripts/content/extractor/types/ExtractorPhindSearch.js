import {clickElements} from "../../interact/interact";
import {capitalizeFirst, formatLineBreaks} from "../../../shared/formatter/formatText";
import {setFileHeader} from "../../../shared/formatter/formatMarkdown";
import {safeExecute} from "../../../shared/utils/jsShorteners";
import ExtractorSourcesPhindSearch from "../sources/ExtractorSourcesPhindSearch";
import {getPageTitle} from "../extractMetadata";
import {Extractor} from "./Extractor";

async function processPhindSearchMessage(content, format) {
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

  const paginationPart = selectPagination.length > 0
    ? `\n\n---\n**Sources:**` + await safeExecute(await new ExtractorSourcesPhindSearch().extractSources(selectPagination, format)) + "\n\n"
    : "";

  return userPart + aiPart + paginationPart;
}

async function process(format, metadata) {
  // Unfold user questions before export
  safeExecute(clickElements('.fe-chevron-down'));

  // Catch page interesting elements
  const newAnswerSelector = document.querySelectorAll('[name^="answer-"]');
  let markdown = await safeExecute(setFileHeader(metadata.pageTitle, metadata.domainName));

  for (const content of newAnswerSelector) {
    const messageText = await processPhindSearchMessage(content, format);

    if (messageText !== "") markdown += messageText + "\n";
  }

  // Fold user questions after export if they were originally folded
  safeExecute(clickElements('.fe-chevron-up'));

  return markdown;
}

export default class ExtractorPhindSearch extends Extractor {
  async extractPage(format, metadata) {
    return await process(format, metadata);
  }
}
