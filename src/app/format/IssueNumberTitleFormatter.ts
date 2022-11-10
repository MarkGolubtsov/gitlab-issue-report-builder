import IssueFormatter from "app/format/IssueFormatter";
import {Issue} from "app/model/Issue";

export default class IssueNumberTitleFormatter implements IssueFormatter {
    format(issue: Issue): string {
        return `${issue.number} ${issue.title}`;
    }
}