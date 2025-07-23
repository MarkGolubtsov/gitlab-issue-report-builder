import IssueFormatter from "app/format/IssueFormatter";
import {Issue} from "app/model/Issue";

export default class IssueNumberTitleFormatter implements IssueFormatter {
    name = 'Номер-заголовок';

    format(issue: Issue): string {
        return `${issue.number} ${issue.title}`;
    }
}