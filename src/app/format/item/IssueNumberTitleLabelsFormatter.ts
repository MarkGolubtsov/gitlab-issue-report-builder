import {IssueFormatter} from "app/format/IssueFormatter";
import {Issue} from "app/model/Issue";

export class IssueNumberTitleLabelsFormatter implements IssueFormatter {
    name = 'Номер-заголовок-список-меток';

    format(issue: Issue): string {
        return `${issue.number} ${issue.title} [${issue.labels.join(',')}]`
    }
}