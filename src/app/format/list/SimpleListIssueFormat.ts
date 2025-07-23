import {IssueListFormatter} from 'app/format/IssueListFormatter';
import {Issue} from 'app/model/Issue';
import {IssueFormatter} from 'app/format/IssueFormatter';

export class SimpleListIssueFormat extends IssueListFormatter {

    constructor(issueFormat: IssueFormatter) {
        super('Список', issueFormat)
    }

    format(issues: Issue[]): string {
        return issues.map(it => this.itemFormatter.format(it)).join('\n');
    }

    static build(issueFormat: IssueFormatter): IssueListFormatter {
        return new SimpleListIssueFormat(issueFormat);
    }
}