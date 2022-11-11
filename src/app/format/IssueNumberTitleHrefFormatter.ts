import IssueFormatter from "app/format/IssueFormatter";
import {Issue} from "app/model/Issue";

export class IssueNumberTitleHrefFormatter implements IssueFormatter {
    format(issue: Issue): string {
        return `${issue.number} ${issue.title} [${issue.href}]`
    }

}